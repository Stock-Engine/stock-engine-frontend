import json

import flask_sqlalchemy
from sqlalchemy import Boolean, Column, ForeignKey, Integer, Text
from sqlalchemy.orm import DeclarativeMeta, relationship

db = flask_sqlalchemy.SQLAlchemy()

BaseModel: DeclarativeMeta = db.Model


class ModelEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, BaseModel):
            return dict((c.name, getattr(obj, c.name)) for c in obj.__table__.columns)


class User(BaseModel):
    id = Column(Integer, primary_key=True)
    username = Column(Text, unique=True)
    password = Column(Text)
    roles = Column(Text)
    fcm_token = Column(Text, default=None)
    is_active = Column(Boolean, default=True, server_default="true")
    queries = relationship(
        "Query", back_populates="user", cascade="all, delete", passive_deletes=True
    )
    alerts = relationship(
        "Alert", back_populates="user", cascade="all, delete", passive_deletes=True
    )

    @property
    def rolenames(self):
        try:
            return self.roles.split(",")
        except Exception:
            return []

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active


class Query(BaseModel):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    name = Column(Text)
    user = relationship("User", back_populates="queries")


class Alert(BaseModel):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    name = Column(Text)
    user = relationship("User", back_populates="alerts")
