import { TextToSpeech } from '@ionic-native/text-to-speech';

// Using the /build/artyom.js file
import Artyom from 'artyom.js';
const artyom = new Artyom();

export default {
  components: {
    TextToSpeech
  },
  say(text) {
    if (this.isMobile()) {
      let options = {
        text: text,
        locale: 'es-ES',
        rate: 0.75
      };
      TextToSpeech.speak(options)
      .then(() => console.log('Success'))
      .catch((reason) => console.log(reason));
    }
    else{
      artyom.say(text);
    }
  },
  canSay() {
    return true;
  }, isMobile() {
    return !artyom.speechSupported();
  }
};

function initSpeech() {
  if (!artyom.speechSupported()) {
    console.log("speech is not supported!");
    return;
  }
  console.log('initSpeech')
  artyom.fatality();// use this to stop any of
  setTimeout(function () {// if you use artyom.fatality , wait 250 ms to initialize again.
    artyom.initialize({
      lang: 'es-ES',// A lot of languages are supported. Read the docs !
      continuous: true,// Artyom will listen forever
      listen: false, // Start recognizing
      debug: true, // Show everything in the console
      speed: 1 // talk normally
    }).then(function () {
      console.log("Ready to work !");
    });
  }, 250);
}

initSpeech();