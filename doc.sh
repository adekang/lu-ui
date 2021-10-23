#!/bin/env bash

yarn build
git checkout gh-pages
build/* ./
git add .
git commit -m "update"
git push
git checkout master