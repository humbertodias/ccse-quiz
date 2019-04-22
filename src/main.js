import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import HomePage from './components/Home.vue'
import InfoPage from './components/Info.vue'
import StatsPage from './components/Stats.vue'
import RedoPage from './components/Redo.vue'
import QuestionsPage from './components/Questions.vue'
import ExamPage from './components/Exam.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/info', component: InfoPage },
    { path: '/stats', component: StatsPage },
    { path: '/redo', component: RedoPage },
    { path: '/questions', component: QuestionsPage },
    { path: '/exam', component: ExamPage }
  ]
})


import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
