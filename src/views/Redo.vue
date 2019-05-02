<template>

  <Questionary title="Revisar" :questions="questions">
  </Questionary>

</template>

<script>
import Questionary from '../components/Questionary.vue'
import storage from '../storage'

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
    this.questions = storage.getRedoQuestions();
  }
}
</script>

<style>
</style>
