TAG ?= latest
APP_ENV ?= local
t ?= 20
NPM_TOKEN ?= INSERT_HERE

.PHONY: api front cms

detached: silent logs

silent:
	TAG=$(TAG) NPM_TOKEN=$(NPM_TOKEN) APP_ENV=$(APP_ENV) docker-compose up -d $(s)

up:
	TAG=$(TAG) NPM_TOKEN=$(NPM_TOKEN) APP_ENV=$(APP_ENV) docker-compose up $(s)

down:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker-compose down

stop:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker-compose stop $(s)

restop:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker-compose stop $(s) && TAG=$(TAG) APP_ENV=$(APP_ENV) docker-compose up -d $(s)

test:
	TAG=$(TAG) APP_ENV=test TEST_COMMAND="npm run test" NPM_TOKEN=$(NPM_TOKEN) API_PORT=4001 docker-compose -f docker-compose.test.$(s).yml -p hunt-tests up --abort-on-container-exit

test-rebuild:
	TAG=$(TAG) ENV=test NPM_TOKEN=$(NPM_TOKEN) docker-compose -f docker-compose.test.$(s).yml -p huntd-tests up --build

test-down:
	TAG=$(TAG) APP_ENV=test docker-compose -f docker-compose.test.$(s).yml -p hunt-tests down -v

test-local:
	TAG=$(TAG) ENV=test NPM_TOKEN=$(NPM_TOKEN) docker-compose -f docker-compose.test.$(s).yml -f docker-compose.test.local.$(s).yml -p huntd-tests up --abort-on-container-exit

test-local-listen:
	TAG=$(TAG) ENV=test NPM_TOKEN=$(NPM_TOKEN) docker-compose -f docker-compose.test.$(s).yml -f docker-compose.test.local.$(s).yml -f docker-compose.test.local.listen.$(s).yml -p huntd-tests run api

test-local-rebuild:
	TAG=$(TAG) ENV=test NPM_TOKEN=$(NPM_TOKEN) docker-compose -f docker-compose.test.$(s).yml -f docker-compose.test.local.$(s).yml -p huntd-tests up --abort-on-container-exit --build

test-inspect:
	TAG=$(TAG) ENV=test NPM_TOKEN=$(NPM_TOKEN) docker-compose -f docker-compose.test.$(s).yml -f docker-compose.test.inspect.$(s).yml -p huntd-tests up --abort-on-container-exit

rm:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker-compose rm -fs $(s)

rm-hard:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker-compose rm -fsv $(s)

restart:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker-compose restart $(s)

build:
	TAG=$(TAG) NPM_TOKEN=$(NPM_TOKEN) APP_ENV=$(APP_ENV) docker-compose build $(s)

rebuild: rm build silent

rebuild-hard: rm-hard build silent

db-development:
	psql --host=localhost --port=5432 --username=dev --password --dbname=huntd_development

api:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker exec -it huntd-public-api-1 bash

cms:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker exec -it huntd-public-cms-1 bash

front:
	TAG=$(TAG) APP_ENV=$(APP_ENV) docker exec -it huntd-public-frontend-1 sh

init:
	cp ./.env.sample ./.env

clean-images:
	docker rmi $$(docker images | grep "^<none>" | awk "{print $3}")

clean-volumes:
	docker volume rm $$(docker volume ls -q)

clean:
	-make clean-images
	-make clean-volumes
