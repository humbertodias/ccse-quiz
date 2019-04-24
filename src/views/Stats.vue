<template>

  <IonVuePage title="Estadistícas">

      <ion-card>

        <ion-item>
          <div style="margin: 0 auto;">
            <ion-button @click="goToHome()">
              <ion-icon name="home"></ion-icon>
            </ion-button>
          </div>
        </ion-item>

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

      </ion-card>

      <ion-card :color="resultColor" class="ion-text-center">
        <ion-card-content>{{resultLabel}} con {{resultPercentage}}% era esperado 60%</ion-card-content>
      </ion-card>

  </IonVuePage>

</template>

<script>

export default {
  data: function() {
    return {
      resultLabel: "NO APTO",
      resultColor: "danger",
      resultPercentage: 0,
      numCorrect:  0,
      numTotal: 0,
    };
  },

  mounted: function() {
    if(this.$route.params.numCorrect)
      this.numCorrect = this.$route.params.numCorrect;

    if(this.$route.params.numTotal)
      this.numTotal = this.$route.params.numTotal;
    
    if(this.numTotal > 0 && this.numCorrect > 0){
      this.resultPercentage = Math.round( (this.numCorrect / this.numTotal) * 100);
      if(this.resultPercentage >= 60){
        this.resultLabel = 'APTO';
        this.resultColor = 'success';
      } 
    }
  },
  methods: {
    goToHome(){
        this.$router.push('/'); 
    },
  },
};
</script>

