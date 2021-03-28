.PHONY: up build

up:
	git pull origin master
	git add .
	git commit -am "up"
	git push origin master
	@echo "\n 发布中..."