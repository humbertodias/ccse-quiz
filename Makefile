clean:
	rm -rf dist android ios

build:
	npm run build

run:
	rm -f ccse-quiz
	ln -s ./dist ccse-quiz
	echo "http://localhost:8080/ccse-quiz"
	http-server . -g -i

android:	clean
	npm run build
	npx cap add android
	$(MAKE) android-icons
	cd android && gradle build
	find android -name "*.apk"

ios-dep:
	#sudo xcode-select --install
	sudo gem install cocoapods

ios:	clean	ios-dep
	npm run build
	npx cap add ios
	find ios -name "*.ipa"

android-icons:	android-icons-foreground	android-icons-launcher-foreground	android-icons-launcher	android-splash

android-icons-foreground:
	convert src/assets/logo-ccse.png -resize 108x108\! android/app/src/main/res/mipmap-mdpi/ic_foreground.png
	convert src/assets/logo-ccse.png -resize 162x162\! android/app/src/main/res/mipmap-hdpi/ic_foreground.png
	convert src/assets/logo-ccse.png -resize 216x216\! android/app/src/main/res/mipmap-xhdpi/ic_foreground.png
	convert src/assets/logo-ccse.png -resize 324x324\! android/app/src/main/res/mipmap-xxhdpi/ic_foreground.png
	convert src/assets/logo-ccse.png -resize 432x432\! android/app/src/main/res/mipmap-xxxhdpi/ic_foreground.png

android-icons-launcher-foreground:
	convert src/assets/logo-ccse.png -resize 108x108\! android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png
	convert src/assets/logo-ccse.png -resize 162x162\! android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png
	convert src/assets/logo-ccse.png -resize 216x216\! android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png
	convert src/assets/logo-ccse.png -resize 324x324\! android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png
	convert src/assets/logo-ccse.png -resize 432x432\! android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png

android-icons-launcher:
	convert src/assets/logo-ccse.png -resize 48x48\! android/app/src/main/res/mipmap-mdpi/ic_launcher.png
	convert src/assets/logo-ccse.png -resize 72x72\! android/app/src/main/res/mipmap-hdpi/ic_launcher.png
	convert src/assets/logo-ccse.png -resize 96x96\! android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
	convert src/assets/logo-ccse.png -resize 144x144\! android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
	convert src/assets/logo-ccse.png -resize 192x192\! android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png

android-splash:
	convert src/assets/logo-ccse.png -background white -gravity center -extent 480x320 -alpha remove -alpha off android/app/src/main/res/drawable/splash.png

	convert src/assets/logo-ccse.png -background white -gravity center -extent 480x320 -alpha remove -alpha off android/app/src/main/res/drawable-land-mdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 800x480 -alpha remove -alpha off android/app/src/main/res/drawable-land-hdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 1270x720 -alpha remove -alpha off android/app/src/main/res/drawable-land-xhdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 1600x960 -alpha remove -alpha off android/app/src/main/res/drawable-land-xxhdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 1920x1280 -alpha remove -alpha off android/app/src/main/res/drawable-land-xxxhdpi/splash.png

	convert src/assets/logo-ccse.png -background white -gravity center -extent 320x480 -alpha remove -alpha off android/app/src/main/res/drawable-port-mdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 480x800 -alpha remove -alpha off android/app/src/main/res/drawable-port-hdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 720x1270 -alpha remove -alpha off android/app/src/main/res/drawable-port-xhdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 960x1600 -alpha remove -alpha off android/app/src/main/res/drawable-port-xxhdpi/splash.png
	convert src/assets/logo-ccse.png -background white -gravity center -extent 1280x1920 -alpha remove -alpha off android/app/src/main/res/drawable-port-xxxhdpi/splash.png

vue-cli-install:
	npm install -g @vue/cli


