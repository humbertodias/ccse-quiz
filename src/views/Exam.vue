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
    .then(response => {
      return response.json()
    })
    .then(jsonData => {
      this.questions = this.q25(jsonData.results);
    });
  },
  methods: {
    shuffle(ar){
      return ar.sort( () => Math.random() - 0.5);
    },
    byTaskId(qs, taskId) {
      return qs.filter(q => { return q.task == taskId; });
    },
    q25(all){
      let q25 = [];
      let shuffled = this.shuffle(all);
      let q1 = this.byTaskId(shuffled, 1).slice(0,5);
      let q2 = this.byTaskId(shuffled, 2).slice(0,5);
      let q3 = this.byTaskId(shuffled, 3).slice(0,5);
      let q4 = this.byTaskId(shuffled, 4).slice(0,5);
      let q5 = this.byTaskId(shuffled, 5).slice(0,5);
      let q25all = [q1,q2,q3,q4,q5].flat();
      for(let q of q25all) q25.push(q);
      return q25;
    }
  }

}
</script>

<style>
</style>
