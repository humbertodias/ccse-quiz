import { IonicVueRouter } from '@ionic/vue';

import Vue from 'vue'
Vue.use(IonicVueRouter);

import HomePage from './views/Home.vue'
import InfoPage from './views/Info.vue'
import StatsPage from './views/Stats.vue'
import RedoPage from './views/Redo.vue'
import QuestionsPage from './views/Questions.vue'
import ExamPage from './views/Exam.vue'
import GlossaryPage from './views/Glossary.vue'

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/info', name:"info", component: InfoPage },
    { path: '/stats', name:"stats", component: StatsPage },
    { path: '/redo', name:"redo", component: RedoPage },
    { path: '/questions', name:"questions", component: QuestionsPage },
    { path: '/exam', name:"exam", component: ExamPage },
    { path: '/glossary', name:"glossary", component: GlossaryPage }
  ]
});

