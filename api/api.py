import flask
import flask_praetorian
from app import guard
from flask import Blueprint, request

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
