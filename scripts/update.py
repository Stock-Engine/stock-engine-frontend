#!/usr/bin/env python
from plumbum.cmd import git


def run_git(*args):
    return git.run(args, retcode=None)


if __name__ == "__main__":
    run_git("fetch", "upstream")

    retcode, out, err = run_git("rebase", "upstream/main")

    if retcode != 0:
        print(err)
        run_git("rebase", "--abort")
    else:
        print("Code is up to date!")
