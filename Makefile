#!/usr/bin/make -f

start:
	@echo ">>> Bring up Local Docs"
	vuepress dev docs

pull:
	@echo ">>> Getting the latest code"
	git pull origin master --rebase

push: |
	@echo ">>> Pushed to master and update github Pages"
	git push origin master
	npm run deploy
