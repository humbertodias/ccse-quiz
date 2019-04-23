<template>

  <IonVuePage :title="title">

    <Question
      v-if="questions.length"
      :currentQuestion=questions[index]
      :next="next"
      :previous="previous"
      :increment="increment"
      :index="index"
    />

    <ion-item>
      <ion-label slot="end">{{numTotal}}/{{questions.length}}</ion-label>
    </ion-item>
    
    <ion-progress-bar color="danger" :value="numTotal/questions.length"></ion-progress-bar>

  </IonVuePage>

</template>

<script>
import _ from 'lodash'
import Question from './Question.vue'

import { setTimeout } from 'timers';

export default {
    props: {
      title: { type: String, default: '' },
      questions: { type: Array, default: [] },
    },
  components: {
    Question
  },
  data() {
    return {
      answers: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  methods: {
    next() {
      if(this.index < this.questions.length)
        this.index++;
    },
    previous() {
      if(this.index > 0)
        this.index--;
    },
    increment(isCorrect, selectedAnswerIndex) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++
      this.answers[this.index] = selectedAnswerIndex;

      setTimeout(this.next, 2000)
    }
  },
}
</script>

<style>
</style>
