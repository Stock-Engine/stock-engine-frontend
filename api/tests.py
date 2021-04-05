import json

import pytest
from app_dev import app


@pytest.fixture
def client():
    yield app.test_client()


def test_login(client):
    ans = log_in(client)
    assert "access_token" in json.loads(ans.data)


def test_refresh(client):
    ans = log_in(client)

    first_token = get_token(ans)

    ans = client.post("/api/refresh", data=first_token)
    assert ans.status_code == 425  # TOO EARLY, but working


def get_token(ans):
    return json.loads(ans.data)["access_token"]


def log_in(client):
    resp = client.post("/api/login", json={"username": "user", "password": "user"})
    assert resp.status_code == 200
    client.environ_base["HTTP_AUTHORIZATION"] = f"Bearer {get_token(resp)}"

    return resp


def test_restricted_access_allowed_after_login(client):
    restricted_urls = ["/api/dashboard"]

    for url in restricted_urls:
        assert client.get(url).status_code == 401

    log_in(client)

    for url in restricted_urls:
        assert client.get(url).status_code == 200
