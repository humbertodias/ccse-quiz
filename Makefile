clean:
	rm -rf android ios

android:	clean
	npm run build
	npx cap add android
	cd android && gradle build
	find android -name "*.apk"

ios-dep:
	#sudo xcode-select --install
	sudo gem install cocoapods

ios:	clean	ios-dep
	npm run build
	npx cap add ios
	find android -name "*.ipa"

vue-cli-install:
	npm install -g @vue/cli


