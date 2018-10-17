function runGulp() {
  echo "npx cross-env target=$1 NODE_ENV=$2 gulp $3"
	npx cross-env target=$1 NODE_ENV=$2 gulp $3
}

runGulp $@
