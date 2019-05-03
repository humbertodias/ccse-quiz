<template>
  <IonVuePage title="Tareas">
    <ion-card no-padding class="noborder">
      <ion-button expand="full" @click="goToQuestionary">Empezar</ion-button>
    </ion-card>

    <ion-card v-for="(task, index) in tasks" :key="index">
      <ion-card-header>
        <ion-card-title>
          <p>
            <ion-checkbox checked="tasksChecked[index]" @click="clickCheckbox(index)" />
            &nbsp;
            {{task[1]}}
          </p>
        </ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item lines="none">
          <ion-text>{{task[2]}}</ion-text>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </IonVuePage>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      tasksChecked: [],
      questions: []
    };
  },
  mounted: function() {
    this.loadTasks();
    this.loadQuestions();
  },
  methods: {
    clickCheckbox(index){
      this.tasksChecked[index] = !this.tasksChecked[index];
      console.log('click', this.tasksChecked[index])
    },
    loadTasks() {
      fetch("tareas.json", {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(jsonData => {
          this.tasks = jsonData;

          for (var i = 0; i < this.tasks.length; i++) {
            this.tasksChecked.push(true);
          }
          
        });
    },
    loadQuestions() {
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
    getTaskIds() {
      let ids = [];
      for (var i = 0; i < this.tasksChecked.length; i++) {
        if (this.tasksChecked[i]) {
          ids.push(this.tasks[i][0]);
        }
      }
      return ids;
    },
    goToQuestionary() {
      let taskIds = this.getTaskIds();
      let questionsByTask = this.byTask(this.questions, taskIds);
      let ids = this.questionIds(questionsByTask);
      this.$router.push({
        name: "questions",
        params: { ids: ids }
      });
    },
    byTask(ar, taskIds) {
      return ar.filter(q => {
        return taskIds.indexOf(q.task) > -1;
      });
    },
    questionIds(qs){
      let ids = [];
      for (let i = 0; i < qs.length; i++) {
        ids.push(qs[i].id);
      }
      return ids;
    }
  }
};
</script>

<style>
.noborder {
  box-shadow: none !important;
}
</style>

