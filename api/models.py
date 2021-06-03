import flask_sqlalchemy
from sqlalchemy import Boolean, Column, Integer, Text
from sqlalchemy.orm import DeclarativeMeta

db = flask_sqlalchemy.SQLAlchemy()

BaseModel: DeclarativeMeta = db.Model


class User(BaseModel):
    id = Column(Integer, primary_key=True)
    username = Column(Text, unique=True)
    password = Column(Text)
    roles = Column(Text)
    is_active = Column(Boolean, default=True, server_default="true")

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
