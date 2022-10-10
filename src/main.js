import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './icons';

// Import IonVuePage component
import IonVuePage from '@/components/IonVuePage.vue';

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

// pwa
import wb from "./registerServiceWorker";
Vue.prototype.$workbox = wb;

// Enable the ionic-vue plugin
Vue.use(Ionic);

// Register as global component to be used as boilerplate
Vue.component('IonVuePage', IonVuePage);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');