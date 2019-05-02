apk:
	rm -rf android
	npm run build
	npx cap add android
	cd android && gradle build
	find android -name "*.apk"
