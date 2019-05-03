<template>
  <IonVuePage title="Tareas">
    <ion-card no-padding class="noborder">
      <ion-button expand="full" @click="goToQuestionary">Empezar</ion-button>
    </ion-card>

    <ion-card v-for="(task, index) in tasks" :key="index">
      <ion-card-header>
        <ion-card-title>
          <p>
            <ion-checkbox checked="true" @click="tasksChecked[index] = !tasksChecked[index]"></ion-checkbox>
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
          console.log("mounted", this.tasksChecked.length);
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
      console.log("taskIds", taskIds);
      let questionsByTask = this.byTask(this.questions, taskIds);
      console.log("questionsByTask", questionsByTask);
      let ids = [];
      for (var i = 0; i < questionsByTask.length; i++) {
        ids.push(questionsByTask[i].id);
      }
      this.$router.push({
        name: "questions",
        params: { ids: ids }
      });
    },
    byTask(ar, taskIds) {
      return ar.filter(q => {
        return taskIds.indexOf(q.task) > -1;
      });
    }
  }
};
</script>

<style>
.noborder {
  box-shadow: none !important;
}
</style>

