target =
ifdef target
	target := $(target)
else
	target := es
endif

env =
ifdef env
	env := $(env)
else
	env := development
endif

envCall = cross-env target=$(target) NODE_ENV=$(env)

build:
	npx $(envCall) gulp

dev:
	npx $(envCall) gulp dev

publish:
	npx $(envCall) gulp publish

lint:
	npm run lint

test:
	npm run test
