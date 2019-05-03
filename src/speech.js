// Using the /build/artyom.js file
import Artyom from 'artyom.js';
const artyom = new Artyom();
export default {
  say(text){
    artyom.say(text, {lang:'es-ES'});
  }
};