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
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
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
      let results = jsonData.results;

      let sortedQuestions = sortJSON(results, 'id', 'asc');
      this.questions = sortedQuestions;

    });

      function sortJSON(data, key, way = 'asc') {
        return data.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            if (way === 'asc') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            if (way === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        });
      }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
