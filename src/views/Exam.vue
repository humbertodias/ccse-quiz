<template>

  <Questionary title="Exame" :questions="questions">
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
    fetch('preguntas.json', {
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
