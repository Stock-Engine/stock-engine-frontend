#!/usr/bin/bash
set -e

for package in nodejs pipenv
  do
    if ! which "${package}" > /dev/null
      then
        sudo apt install "${package}"
      fi
done

pipenv install
npm install

pipenv run pre-commit install

echo 'Installation successful'
