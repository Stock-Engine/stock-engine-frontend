#!/usr/env/python
from plumbum.cmd import git
import argparse

parser = argparse.ArgumentParser(description='Checkout branch in remote repository')
parser.add_argument('repo', type=str, help='Full reposisory name with username')
args = parser.parse_args()

repo_addr = f'git@github.com:{args.repo}'

print(repo_addr)
