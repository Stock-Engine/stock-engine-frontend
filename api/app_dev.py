import os
import tempfile


def env_default(key, val):
    if key not in os.environ:
        os.environ[key] = val


env_default("FLASK_DB_URI", f"sqlite:///{tempfile.mkstemp()[1]}")
env_default("FLASK_SECRET_KEY", "not_a_secret_at_all")


# Some env changes (above) must be done before this import
from app import app, db, guard, run  # noqa

app.debug = True
app.config["PROPAGATE_EXCEPTIONS"] = True

with app.app_context():
    from models import User, Query, Alert

    def add_user(user, password, roles):
        if db.session.query(User).filter_by(username=user).count() < 1:
            db.session.add(
                User(username=user, password=guard.hash_password(password), roles=roles)
            )

        db.session.commit()

    def add_by_name(username, name, clazz):
        user = db.session.query(User).filter_by(username=username).first()
        if db.session.query(clazz).filter_by(name=name).count() < 1:
            db.session.add(clazz(user_id=user.id, name=name))
        db.session.commit()

    def add_query(username, name):
        add_by_name(username, name, Query)

    def add_alert(username, name):
        add_by_name(username, name, Alert)

    add_user("admin", "admin", roles="admin")
    add_user("user", "user", roles="")
    add_query("user", "Test query #1")
    add_query("user", "Test query #2")

    add_query("user", "Test alert #1")
    add_query("user", "Test alert #2")


if __name__ == "__main__":
    run()
