# default target
target =
ifdef target
	target := $(target)
else
	target := es
endif

# run gulp function
# arg1 target 打包目标模块
# arg2 env 打包环境变量
# arg3 task gulp任务名称
define runGulp
	npx cross-env target=$(1) NODE_ENV=$(2) gulp $(3)
endef

build:
	$(call runGulp,$(target),production)

dev:
	$(call runGulp,$(target),development,dev)

publish:
	$(call runGulp,$(target),production,publish)

lint:
	npm run lint

test:
	npm run test
