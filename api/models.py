import json

import flask_sqlalchemy
from sqlalchemy import Column
from sqlalchemy.orm import relationship

db = flask_sqlalchemy.SQLAlchemy()


class ModelEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, db.Model):
            return dict((c.name, getattr(obj, c.name)) for c in obj.__table__.columns)


class User(db.Model):
    id = Column(db.Integer, primary_key=True)
    username = Column(db.Text, unique=True)
    password = Column(db.Text)
    roles = Column(db.Text)
    is_active = Column(db.Boolean, default=True, server_default="true")
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


class Query(db.Model):
    id = Column(db.Integer, primary_key=True)
    user_id = Column(db.Integer, db.ForeignKey("user.id"))
    name = Column(db.Text)
    user = relationship("User", back_populates="queries")


class Alert(db.Model):
    id = Column(db.Integer, primary_key=True)
    user_id = Column(db.Integer, db.ForeignKey("user.id"))
    name = Column(db.Text)
    user = relationship("User", back_populates="alerts")
