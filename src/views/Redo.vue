<template>

  <Questionary title="Revisar" :questions="questions">
  </Questionary>

</template>

<script>
import Questionary from '../components/Questionary.vue'

export default {
  components: {
    Questionary
  },
  data() {
    return {
      questions: [],
    }
  },
  mounted: function() {
//    let url = 'https://opentdb.com/api.php?amount=10&category=27&type=multiple';
    let url = 'preguntas.json';
    fetch(url, {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results;
      //this.answers = new int[this.questions.length];
    });
  }

}
</script>

<style>
</style>
