# default target
target =
ifdef target
	target := $(target)
else
	target := es
endif

runGulp = ./scripts/gulp.sh

init-config:
	./scripts/init-config.sh

lint:
	npm run lint

test:
	npm run test

build:
	$(runGulp) $(target) production

dev:
	$(runGulp) $(target) development dev

publish: lint test
	./scripts/publish.sh
