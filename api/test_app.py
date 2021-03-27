import os
import random
import string


def env_default(key, val):
    if key not in os.environ:
        os.environ[key] = val


env_default("FLASK_DB_URI", "sqlite:////tmp/stock-engine-test-db.db")
env_default("FLASK_SECRET_KEY", "".join(random.choices(string.printable, k=32)))


# Some env changes (above) must be done before this import
from app import app, db, guard  # noqa

app.debug = True

with app.app_context():
    from models import User

    if db.session.query(User).filter_by(username="admin").count() < 1:
        db.session.add(
            User(username="admin", password=guard.hash_password("admin"), roles="admin")
        )
    db.session.commit()
