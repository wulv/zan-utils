usage = "\
Usage: make [task] [target=es|cjs] \n\n\
init-config           初始化配置\n\
build                 打包（不发布）\n\
dev                   开发模式\n\
publish               打包并发布\n\
"

# default target
target =
ifdef target
	target := $(target)
else
	target := es
endif

runGulp = ./scripts/gulp.sh

default:
	@echo $(usage)

init-config:
	./scripts/init-config.sh

build:
	$(runGulp) $(target) production

dev:
	$(runGulp) $(target) development dev

publish:
	./scripts/publish.sh
