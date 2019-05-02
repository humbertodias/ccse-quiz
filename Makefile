android:
	rm -rf android
	npm run build
	npx cap add android
	cd android && gradle build
	find android -name "*.apk"

ios-dep:
	#sudo xcode-select --install
	sudo gem install cocoapods

ios:	ios-dep
	rm -rf ios
	npm run build
	npx cap add ios
#	cd ios && gradle build
	find android -name "*.ipa"

vue-cli-install:
	npm install -g @vue/cli