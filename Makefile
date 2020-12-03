# Application Name
APP_NAME:=learning_lynx
# Docker image name and tag
IMAGE:=kpcwebdev/learning_lynx-frontend
TAG:=latest
# Shell that make should use
SHELL:=bash

help:
# http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@#grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev-image: ## Make a development Node.js image with dev/test dependencies for Next.js frontend
	docker build --rm --target dev -t $(IMAGE):dev .

dev-shell: ## Make a BASH shell in the dev docker container
	docker rum --rm --it $(IMAGE):dev bash

prod-image: ## Make a production Node.js image with optimized Next.js build
	docker build --rm --target production -t $(IMAGE):$(TAG) .

prod-shell: ## Make a BASH hell in the production docker container
	docker run --rm --it $(IMAGE):$(TAG) bash

docker-stack_local: prod-image ## Make a local deployment using docker-compose and docker swarm
	@-docker swarm init
	docker stack deploy \
	--prune -c docker-compose.yml \
	$(APP_NAME)

unstack: ## Make a local docker-compose deployment shutdown
	docker stack rm $(APP_NAME) && docker swarm leave --force
