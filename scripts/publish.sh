npm run lint
if [ $? -ne 0 ];then
  exit $?
fi

npm run test

./scripts/update-version.sh
if [ $? -ne 0 ];then
  exit $?
fi

targets=`ls config/target | grep \\.js | grep -v index | sed 's/.js$//g'`

for name in $targets
do
  ./scripts/gulp.sh $name production publish && ./scripts/publish-npm.sh $name
done

