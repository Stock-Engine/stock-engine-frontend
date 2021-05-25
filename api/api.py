import flask
import flask_praetorian

from models import Alert, Query, User
from flask import Blueprint, request, jsonify

guard = flask_praetorian.Praetorian()
api_blueprint = Blueprint(name="api", import_name=__name__, url_prefix="/api")


@api_blueprint.route("/login", methods=["POST"])
def login():
    req = flask.request.get_json(force=True)
    username = req.get("username", None)
    password = req.get("password", None)
    user = guard.authenticate(username, password)
    ret = {"access_token": guard.encode_jwt_token(user)}
    return ret, 200


@api_blueprint.route("/refresh", methods=["POST"])
def refresh():
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {"access_token": new_token}
    return ret, 200


@api_blueprint.route("/", methods=["GET"])
@flask_praetorian.auth_required
def dashboard():
    return "Dashboard"


@api_blueprint.route("/query", methods=["GET"])
@flask_praetorian.auth_required
def get_queries():
    user_id = flask_praetorian.current_user_id()

    return jsonify(list=db.session.query(Query).filter_by(user_id=user_id).all())


@api_blueprint.route("/alert", methods=["GET"])
@flask_praetorian.auth_required
def get_alerts():
    user_id = flask_praetorian.current_user_id()

    return jsonify(list=db.session.query(Alert).filter_by(user_id=user_id).all())
