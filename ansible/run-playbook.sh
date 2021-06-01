#!/bin/bash

ansible-playbook "$1" -i ansible_hosts --ask-become-pass -e 'ansible_python_interpreter=/usr/bin/python3'
