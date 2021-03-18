# stock-engine-frontend

## What is this project about?
In this project we aim for delivering a frontend for existing backend project that allows to track and analyze prices of stock market, extendable for other areas as well.
Backend is not planned to be made publicly available (at least not now), but we strive to deliver clean an generic API, so that this project may be easily adapted to other solutions.

Apart from its practical applications this project serves for educational purposes of developing good coding practices. Therefore we focus on high quality of code and processes.

Initially this project was meant as a hobbyist project for two people, but everyone is encouraged to participate. Keep in mind, however, that it's not about delivering solutions at all costs, but rather doing it the right way, prioritizing automatization and convenience of use. (We hope that) some of the solutions will be overkills implemented for the sake of learning new stuff.

Having said that we also state that the initial team consists of:
* somehow-experienced full stack developer with very little experience in team leadership,
* junior frontend developer.

Thus we expect it will be a funny journey for all of us :)

## How to contribute
1. Fork the repository
    * Clone it with `git clone git@github.com:Stock-Engine/stock-engine-frontend.git`
    * [Configure][1] `upstream` repository with `git remote add upstream git@github.com:Stock-Engine/stock-engine-frontend.git`
    * In order to keep your fork up to date use `git fetch upstream; git rebase upstream/main`
2. Assign one of the [issues][2] to yourself, or create new one with your idea and wait for some response.
3. Do the change.
    * If anything is unclear or doesn't work - feel encouraged to ask about it.
    * Name commits [properly][3].
4. Create Pull Request and link it with your issue.
    * If possible keep review changes in separate commits. Those should be later squashed to keep nice & clean history.
    * Recommended scenario (it is not required, but it should be the least painful one) is as follows:
        * Keep the change in single commit,
        * Add separate review commits,
        * At the end squash everything to a single commit.
5. Repository requires linear history, so please avoid merging.

### Authors: Adrian & Olaf Naruszko

[1]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork
[2]: https://github.com/Stock-Engine/stock-engine-frontend/issues
[3]: https://chris.beams.io/posts/git-commit/
