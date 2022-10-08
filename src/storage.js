import Vue from 'vue'
// storage
import Vue2Storage from 'vue2-storage'
Vue.use(Vue2Storage)

export default {
  getJsonArray(key){
    return localStorage.getItem(key) 
                        ? JSON.parse(localStorage.getItem(key))
                        : [];
  },
  saveJsonArray(key, array){
    const json = JSON.stringify(array);
    localStorage.setItem(key, json);
  },

  REDO_KEY : 'redoQuestions',
  getRedoQuestions(){
    return this.getJsonArray(this.REDO_KEY);
  },
  saveRedoQuestions(redoQuestions){
    this.saveJsonArray(this.REDO_KEY, redoQuestions);
  },
  appendAndSaveRedoQuestion(question){
    let redoQuestions = this.getRedoQuestions();
    if(!this.hasQuestion(redoQuestions, question)){
      redoQuestions.push(question);
    }
    this.saveRedoQuestions(redoQuestions);
  },
  hasQuestion(qs,question){
    let found = qs.filter(function (q) {
      return q.id == question.id;
    });
    return found.length != 0;
  },
  removeAndSaveRedoQuestion(question){
    let allRedoQuestions = this.getRedoQuestions();
    let redoQuestions = allRedoQuestions.filter(function (q) {
      return q.id != question.id;
    });
    this.saveRedoQuestions(redoQuestions);
  },
  STATS_KEY : 'stats',
  getStats(){
    return this.getJsonArray(this.STATS_KEY);
  },
  saveStats(key, stats){
    this.saveJsonArray(key, stats);
  },
  appendAndSaveStat(stat){
    let stats = this.getStats();
    stats.push(stat);
    this.saveStats(this.STATS_KEY, stats);
  },

};

