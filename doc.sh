rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M gh-pages &&
git push -f git@github.com:adekang/lu-ui.git gh-pages &&
cd -
