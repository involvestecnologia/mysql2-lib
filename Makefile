export PROJECT_NAME = mysql2-lib
export GIT_EMAIL = arquitetura@involves.com
export GIT_USER = Buildkite

export COMPOSE_DOCKER_CLI_BUILD = 1
export DOCKER_BUILDKIT = 1

.PHONY: dependencies-update
dependencies-update:
	docker build --target=dependencies-update --tag=$(PROJECT_NAME) .
	docker run --name=$(PROJECT_NAME) $(PROJECT_NAME)
	docker cp $(PROJECT_NAME):/data/package.json .
	docker rm -vf $(PROJECT_NAME)

.PHONY: publish
publish:
	docker build \
		--build-arg NPM_TOKEN=$(NPM_TOKEN) \
		--build-arg GIT_EMAIL=$(GIT_EMAIL) \
		--build-arg GIT_USER=$(GIT_USER) \
		--target=publish .

.PHONY: test
test:
	docker-compose build --pull
	docker-compose run test

.PHONY: clean
clean:
	docker-compose down