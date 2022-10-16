#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f `git config --get remote.origin.url` `git rev-parse HEAD`:gh-pages


cd -