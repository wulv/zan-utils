# !/bin/sh

git clone -b gh-pages git@github.com:wulv/zan-utils.git .publish-doc

rm -rf ./docs
npx cross-env NODE_ENV="production" gulp doc

version=`cat ./package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | sed 's/^[ \t]*//g'`
publishVersion=`cat ./package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | sed 's/^[ \t]*//g' | awk -F. '{ print $1}'`

# 暂存 version 目录
cp -rf .publish-doc/version temp_version
# 清理 publish-doc
rm -rf .publish-doc/*
# 新建 publish-doc
cp -rf docs/* .publish-doc/
# 更新新的 version 版本
cd temp_version
docVersionTag=`ls | grep "$publishVersion" | head -1`
# 如果存在,删除并更新
if [[ "$docVersionTag" != "" ]]; then
  rm -rf $docVersionTag
  cp -rf ../docs .
  mv docs $version
else
# 如果不存在，新建该目录
  cp -rf ../docs .
  mv docs $version
fi
# 将 temp_version 移到 publish-doc 中
cd ..
cp -rf temp_version .publish-doc/
cd .publish-doc
mv temp_version version
# commit push
cd .publish-doc
git add .
git commit -m "update doc-$version"
git push origin gh-pages
# 清除 cache
cd ..
rm -rf temp_version
rm -rf .publish-doc
