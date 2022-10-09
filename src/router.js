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
  base: process.env.BASE_URL ,
  routes: [
    { path: '/ccse-quiz/', name: 'home', component: HomePage },
    { path: '/ccse-quiz/info', name:"info", component: InfoPage },
    { path: '/ccse-quiz/stats', name:"stats", component: StatsPage },
    { path: '/ccse-quiz/result', name:"result", component: ResultPage },
    { path: '/ccse-quiz/redo', name:"redo", component: RedoPage },
    { path: '/ccse-quiz/questions', name:"questions", component: QuestionsPage },
    { path: '/ccse-quiz/glossary', name:"glossary", component: GlossaryPage },
    { path: '/ccse-quiz/links', name:"links", component: LinksPage },
    { path: '/ccse-quiz/acronyms', name:"acronyms", component: AcronymsPage },
    { path: '/ccse-quiz/exam-years', name:"exam-years", component: ExamYearsPage },
    { path: '/ccse-quiz/exam', name:"exam", component: ExamPage },
    { path: '/ccse-quiz/tasks', name:"tasks", component: TasksPage },
  ]
});

