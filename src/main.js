import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// Import IonVuePage component
import IonVuePage from '@/components/IonVuePage.vue';

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

// Enable the ionic-vue plugin
Vue.use(Ionic);

// Register as global component to be used as boilerplate
Vue.component('IonVuePage', IonVuePage);

Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');