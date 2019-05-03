<template>
  <Questionary title="Preguntas" :questions="questions"></Questionary>
</template>

<script>
import Questionary from "../components/Questionary.vue";

export default {
  components: {
    Questionary
  },
  data() {
    return {
      questions: []
    };
  },
  mounted: function() {
    fetch("preguntas.json", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = this.byIds(jsonData.results, this.$route.params.ids);
      });
  },
  methods: {
    byIds(all, ids) {
      if (!ids) return all;
      
      let filtered = [];
      for (let question of all) {
        if (ids.indexOf(question.id) != -1) {
          filtered.push(question);
        }
      }
      return filtered;
    }
  }
};
</script>

<style>
</style>
