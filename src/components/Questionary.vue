<template>

  <IonVuePage :title="title">

    <Question
      v-if="index < questions.length"
      :currentQuestion=questions[index]
      :next="next"
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
import Question from './Question.vue'
import { setTimeout } from 'timers';

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
      numTotal: 0
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

      if (isCorrect) {
        this.numCorrect++;
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