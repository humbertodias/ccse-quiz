// Using the /build/artyom.js file
import Artyom from 'artyom.js';
const artyom = new Artyom();
export default {
  say(text) {
    artyom.say(text);
  },
  canSay() {
    return artyom.speechSupported();
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