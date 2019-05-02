<template>

  <IonVuePage :title="title">

    <div v-if="index < questions.length">

      <Question
        :currentQuestion=questions[index]
        :next="next"
        :increment="increment"
        :index="index"
      />

      <ion-item text-center>
        <ion-label>{{numTotal}} de {{questions.length}}</ion-label>
      </ion-item>
      
      <ion-progress-bar color="danger" :value="numTotal/questions.length"></ion-progress-bar>

    </div>

    <ion-card v-if="questions.length == 0" text-center >
        <ion-card-content>No hay preguntas</ion-card-content>
    </ion-card>

  </IonVuePage>

</template>

<script>
import Question from './Question.vue'
import { setTimeout } from 'timers';

import storage from '../storage'

export default {
    props: {
      title: { type: String, default: '' },
      questions: { type: Array },
      timeout: { type: Number, default: 100},
    },
  components: {
    Question
  },
  data() {
    return {
      answers: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    }
  },
  methods: {
    next() {
        this.index++;
        if(this.hasFinished()) {
          this.goToStats();
        } 
    },
    increment(isCorrect, selectedAnswerIndex) {
      let question = this.questions[this.index];
      if (isCorrect) {
        this.numCorrect++;
        storage.removeAndSaveRedoQuestion(question);
      } else {
        storage.appendAndSaveRedoQuestion(question);
      }
      this.numTotal++
      this.answers[this.index] = selectedAnswerIndex;

      setTimeout(this.next, this.timeout);
    },
    hasFinished(){
      return this.index >= this.questions.length;
    },
    goToStats() {
      this.$router.push({ name: 'stats', 
                params: { numCorrect: this.numCorrect, numTotal: this.numTotal }});
    },
  },
}
</script>