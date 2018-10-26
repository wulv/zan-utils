#!/bin/sh

RED='\033[0;31m'

fail () {
  printf "${RED}$@\nAborting\n"
  exit -1
}

branch=`git branch | sed -n '/\* /s///p'`

if [[ "$branch" != "master" ]]; then
  fail "$@"
fi
