<template>
  <IonVuePage title="Estadísticas">

  <ion-card>

      <ion-item>
        <ion-label>Correctas</ion-label>
        <ion-badge slot="end" color="success">{{numCorrect}}</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Incorrectas</ion-label>
        <ion-badge slot="end" color="danger">{{numTotal-numCorrect}}</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Total</ion-label>
        <ion-badge slot="end" color="primary">{{numTotal}}</ion-badge>
      </ion-item>

      <ion-card :color="resultColor" class="ion-text-center">
        <ion-card-content>{{ resultLabel }} con {{resultAveragePercetage * 100}}% era esperado 60%</ion-card-content>
      </ion-card>

  </ion-card>

  </IonVuePage>

</template>

<script>

export default {
  data: function() {
    return {
      resultLabel: "Reprovado",
      resultColor: "danger",
      resultAveragePercetage: 0,
      numCorrect:  0,
      numTotal: 0,
    };
  },

  mounted: function() {
    console.log("Welcome to the Stats view");

    if(this.$route.params.numCorrect)
      this.numCorrect = this.$route.params.numCorrect;

    if(this.$route.params.numTotal)
      this.numTotal = this.$route.params.numTotal;
    
    if(this.numTotal > 0 && this.numCorrect > 0){
      this.resultAveragePercetage = (this.numCorrect / this.numTotal);
      this.resultLabel = this.resultAveragePercetage >= 0.6 ? 'Aprovado' : 'Reprovado';
      this.resultColor = this.resultAveragePercetage >= 0.6 ? 'success' : 'danger';
    }
  },
  destroyed: function() {
    console.log("Thanks for visiting to the Stats view");
  }

};
</script>

