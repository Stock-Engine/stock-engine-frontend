# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

RUN pip installl pipenv
WORKDIR /usr/src/app
RUN pipenv install --deploy --ignore-pipfile

EXPOSE 5000

CMD ["FLASK_APP=app_dev", "pipenv", "run", "flask", "run"]
