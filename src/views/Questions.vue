<template>

  <Questionary title="Preguntas" :questions="questions">
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
    let url = 'preguntas.json';
    fetch(url, {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results.slice(0,25);
    });
  }

}
</script>

<style>
</style>
