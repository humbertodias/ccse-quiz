<template>
  <IonVuePage title="Estadistícas">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card class="ion-text-center">
            <ion-card-header>
              <ion-icon size="large" name="thumbs-up"></ion-icon>
            </ion-card-header>
            <ion-card-content>
              {{corrects}} Correctas
              <p>en total</p>
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card class="ion-text-center">
            <ion-card-header>
              <ion-icon size="large" name="close-circle"></ion-icon>
            </ion-card-header>
            <ion-card-content>
              {{wrongs}} Fallos
              <p>en total</p>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-card :color="resultColor" class="ion-text-center">
            <ion-card-content>{{resultPercentage}}%</ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-list>
      <ion-item>
        <ion-label class="ion-text-center">Historial de Examenes</ion-label>
      </ion-item>
      <ion-item v-for="stat in stats" :key="stat.date" class="ion-text-wrap">
        <ion-label class="ion-text-wrap">
          <h5>{{stat.date}}</h5>
          <p>{{stat.numCorrect}} de {{stat.numTotal}} preguntas correctas</p>
        </ion-label>
        <ion-icon :name="stat.ionIcon" slot="end"></ion-icon>
      </ion-item>
    </ion-list>
  </IonVuePage>
</template>

<script>
import storage from "../storage";

export default {
  data: function() {
    return {
      stats: [],
      corrects: 0,
      wrongs: 0,
      resultLabel: "NO APTO",
      resultColor: "danger",
      resultPercentage: 0
    };
  },
  mounted: function() {
    this.stats = storage.getStats();
    this.summary();
  },
  methods: {
    summary() {
      for (var stat of this.stats) {
        this.corrects += stat.numCorrect;
        this.wrongs += stat.numTotal - stat.numCorrect;
      }

      let total = this.corrects + this.wrongs;
      this.resultPercentage = Math.round( (this.corrects / total) * 100) || 0;
      if(this.resultPercentage >= 60){
        this.resultLabel = 'APTO';
        this.resultColor = 'success';
      } 

    }
  }
};
</script>

