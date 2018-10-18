./scripts/update-version.sh

if [ $? -eq 0 ];then
  targets=`ls config/target | grep \\.js | grep -v index | sed 's/.js$//g'`

  for name in $targets
  do
    ./scripts/gulp.sh $name production publish && ./scripts/publish-npm.sh $name
  done
else
  exit $?
fi

