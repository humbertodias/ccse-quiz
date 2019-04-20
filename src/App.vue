<template>
  <div id="app">

    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />

    <br />

    <b-container class="bv-example-row">
      <b-row>
        <b-col offset="0">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :previous="previous"
            :increment="increment"
            :index="index"
          />
        </b-col>
      </b-row>
    </b-container>

    <br />

    <Footer
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'
import Footer from './components/Footer.vue'
import { setTimeout } from 'timers';

export default {
  name: 'app',
  components: {
    Header,
    QuestionBox,
    Footer
  },
  data() {
    return {
      questions: [],
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
  mounted: function() {
//    let url = 'https://opentdb.com/api.php?amount=10&category=27&type=multiple';
//    url = 'static.json';
    let url = 'preguntas-ok.json';
    fetch(url, {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results;
      this.answers = new int[this.questions.length];
    });
  }
}
</script>

<style>
</style>
