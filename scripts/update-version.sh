#!/bin/sh

read -p "enter publish version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]: " new_version
if [[ "$new_version" = "" ]]; then
$new_version="patch"
fi
npm version $new_version
