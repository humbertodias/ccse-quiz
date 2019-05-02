import Vue from 'vue'
// storage
import Vue2Storage from 'vue2-storage'
Vue.use(Vue2Storage)

export default {
  REDO_KEY : 'redoQuestions',
  getRedoQuestions(){
    return localStorage.getItem(this.REDO_KEY) 
                        ? JSON.parse(localStorage.getItem(this.REDO_KEY))
                        : [];
  },
  saveRedoQuestions(redoQuestions){
    const parsed = JSON.stringify(redoQuestions);
    localStorage.setItem(this.REDO_KEY, parsed);
  },
  appendAndSaveRedoQuestion(question){
    let redoQuestions = this.getRedoQuestions();
    redoQuestions.push(question);
    this.saveRedoQuestions(redoQuestions);
  },
  removeAndSaveRedoQuestion(question){
    let allRedoQuestions = this.getRedoQuestions();
    let redoQuestions = allRedoQuestions.filter(function (q) {
      return q.id != question.id;
    });
    this.saveRedoQuestions(redoQuestions);
  },

};

