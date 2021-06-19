# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

RUN pip install --no-cache-dir pipenv==2021.5.29
WORKDIR /usr/src/app
RUN pipenv install --deploy --ignore-pipfile

EXPOSE 8008

CMD ["pipenv", "run", "flask", "run"]
