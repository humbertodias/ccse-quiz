<template>

  <div>

  <b-navbar sticky="true" type="dark" variant="info">

      <b-navbar-nav>
        <b-nav-item href="/">&lt;</b-nav-item>
      </b-navbar-nav>

    <b-navbar-brand>Exame {{numTotal}}/{{questions.length}}</b-navbar-brand>
  </b-navbar>


    <!--
    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />
    -->



    <b-card>
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
    </b-card>

  </div>

</template>

<script>
import Header from './Header.vue'
import QuestionBox from './QuestionBox.vue'
import Footer from './Footer.vue'
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
      this.questions = jsonData.results.slice(0,25);
      //this.answers = new int[this.questions.length];
    });
  }
}
</script>

<style>
</style>
