import os
import random
import string
import tempfile


def env_default(key, val):
    if key not in os.environ:
        os.environ[key] = val


env_default("FLASK_DB_URI", f"sqlite:///{tempfile.mkstemp()[1]}")
env_default("FLASK_SECRET_KEY", "".join(random.choices(string.printable, k=32)))


# Some env changes (above) must be done before this import
from app import app, db, guard, run  # noqa

app.debug = True

with app.app_context():
    from models import User

    def add_user(user, password, roles):
        if db.session.query(User).filter_by(username=user).count() < 1:
            db.session.add(
                User(username=user, password=guard.hash_password(password), roles=roles)
            )

        db.session.commit()

    add_user("admin", "admin", roles="admin")
    add_user("user", "user", roles="")


if __name__ == "__main__":
    run()
