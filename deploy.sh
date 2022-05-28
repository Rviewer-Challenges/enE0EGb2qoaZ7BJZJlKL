#!/usr/bin/env sh fwef

set -e

git add -A
git commit -m $1
git push -f git@github.com:Rviewer-Challenges/enE0EGb2qoaZ7BJZJlKL.git main:devel

npm run build

cd dist

git init
git add -A
git commit -m 'Despliegue'
git push -f git@github.com:HenrySantamariaC/CalculadoraNumerica.git master:gh-pages

cd -