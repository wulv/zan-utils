# !/bin/sh

# git clone -b gh-pages git@github.com:wulv/zan-utils.git .publish-doc

rm -rf ./docs
npx cross-env NODE_ENV="production" gulp doc

version=`cat ./package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | sed 's/^[ \t]*//g'`
publishVersion=`cat ./package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | sed 's/^[ \t]*//g' | awk -F. '{ print $1}'`

cd .publish-doc
docVersionTag=`ls | grep "$publishVersion.x.x" | head -1`

if [[ "$docVersionTag" != "" ]]; then
  rm -rf $docVersionTag
  cp -rf ../docs .
  mv docs $docVersionTag
else
  cp -rf ../docs .
  mv docs "$publishVersion.x.x"
  rm -f index.html
  echo "<html><head><meta http-equiv=\"refresh\" content=\"0;url=./$publishVersion.x.x/index.html\"> </head></html>" >> index.html
fi

git add .
git commit -m "update doc-$version"
# git push origin gh-pages
# rm -rf .publish-doc
