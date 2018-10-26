#!/bin/sh

target=$1

cd .publish

publishVersion=`cat ./package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | sed 's/^[ \t]*//g'`
publishName=`cat ./package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | sed 's/^[ \t]*//g'`

echo publishing package $publishName with version $publishVersion...

git tag "$target-v$publishVersion"
npm publish
git push --tags

echo publish package $publishName with version $publishVersion over
