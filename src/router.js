import { IonicVueRouter } from '@ionic/vue';

import Vue from 'vue'
Vue.use(IonicVueRouter);

import HomePage from './views/Home.vue'
import InfoPage from './views/Info.vue'
import StatsPage from './views/Stats.vue'
import ResultPage from './views/Result.vue'
import RedoPage from './views/Redo.vue'
import QuestionsPage from './views/Questions.vue'
import GlossaryPage from './views/Glossary.vue'
import LinksPage from './views/Links.vue'
import AcronymsPage from './views/Acronyms.vue'
import ExamYearsPage from './views/ExamYears.vue'
import ExamPage from './views/Exam.vue'
import TasksPage from './views/Tasks.vue'

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/info', name:"info", component: InfoPage },
    { path: '/stats', name:"stats", component: StatsPage },
    { path: '/result', name:"result", component: ResultPage },
    { path: '/redo', name:"redo", component: RedoPage },
    { path: '/questions', name:"questions", component: QuestionsPage },
    { path: '/glossary', name:"glossary", component: GlossaryPage },
    { path: '/links', name:"links", component: LinksPage },
    { path: '/acronyms', name:"acronyms", component: AcronymsPage },
    { path: '/exam-years', name:"exam-years", component: ExamYearsPage },
    { path: '/exam', name:"exam", component: ExamPage },
    { path: '/tasks', name:"tasks", component: TasksPage },
  ]
});

