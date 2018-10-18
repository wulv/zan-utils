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

build:
	$(runGulp) $(target) production

dev:
	$(runGulp) $(target) development dev

publish:
	./scripts/publish.sh
