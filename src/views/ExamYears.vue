<template>
  <IonVuePage title="Exámenes Antiguos">
    <ion-toolbar>
      <ion-searchbar placeholder="Filtro" @input="handleInput"></ion-searchbar>
    </ion-toolbar>

    <ion-content>
      <ion-card style="cursor: pointer;" v-for="item in items" :key="item[0]" @click="goToQuestionary(item[1])">
        <ion-item lines="none">
          <ion-label>
            <h3>{{item[0]}}</h3>
            <p>{{item[1].length}} preguntas</p>
          </ion-label>
        </ion-item>
      </ion-card>
    </ion-content>
  </IonVuePage>
</template>

<script>
export default {
  data() {
    return {
      itemsOriginal: [],
      items: [],
      questions: []
    };
  },
  mounted: function() {
    this.loadExams();
    this.loadQuestions();
  },
  methods: {
    loadExams(){
      fetch("examenes.json", {
        method: "get"
      })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.itemsOriginal = jsonData;
        this.items = this.itemsOriginal;
      });
    },
    loadQuestions(){
      fetch("preguntas.json", {
        method: "get"
      })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
      });
    },
    handleInput(evt) {
      let searchTerm = evt.srcElement.value;
      this.items = this.itemsOriginal.filter(item => {
        return item[0].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    },
    questionIds(qIndexes) {
      let ids = [];
      for (let qIdx of qIndexes) {
        ids.push(this.questions[qIdx].id);
      }
      return ids;
    },
    goToQuestionary(qIndexes) {
      let ids = this.questionIds(qIndexes);
      this.$router.push({
        name: "questions",
        params: { ids: ids }
      });
    }
  }
};
</script>