build:
	NODE_ENV=production npx gulp

dev:
	NODE_ENV=development npx gulp watch

test:
	NODE_ENV=test npm run test
