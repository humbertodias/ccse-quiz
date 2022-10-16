// Mobile
import { TextToSpeech } from '@ionic-native/text-to-speech';

// Browser
import Artyom from 'artyom.js';
const artyom = new Artyom();

export default {
  components: {
    TextToSpeech
  },
  LANG: 'es-ES',
  RATE: 1.0,
  say(text) {
    this.isMobile() ?
      this.sayMobile(text) :
      this.sayBrowser(text);
  },
  canSay() {
    return true;
  },
  isMobile() {
    return !artyom.speechSupported();
  },
  sayMobile(text) {
    let options = {
      text: text,
      locale: this.LANG,
      rate: this.RATE
    };
    TextToSpeech
      .speak(options)
      .catch((reason) => console.log(reason));
  },
  sayBrowser(text) {
    let options = {
      lang: this.LANG,
      speed: this.RATE
    };
    artyom.say(text, options);
  },
};