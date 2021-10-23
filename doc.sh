rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:adekang/lu-ui-web.git&&
git push -f -u origin master &&
cd -
