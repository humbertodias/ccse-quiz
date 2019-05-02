<template>

  <IonVuePage title="Exámenes Antiguos">

  <ion-toolbar>
    <ion-searchbar placeholder="Filtro" @input="handleInput">
    </ion-searchbar>
  </ion-toolbar>

    <ion-content>
      <ion-card v-for="item in items" :key="item[0]">
        <ion-item :href="item[1]" lines="none">
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
    }
  },
  mounted: function() {
    fetch('examenes.json', {
      method: 'get'
    })
    .then(response => {
      return response.json()
    })
    .then(jsonData => {
      this.itemsOriginal = jsonData;
      this.items = this.itemsOriginal;
    });
  },
  methods:{
   handleInput(evt){  
     let searchTerm = evt.srcElement.value;
     this.items = this.itemsOriginal.filter(item => {  
       return item[0].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;  
     });     
   },
   goToExam(){
      this.$router.push('/'); 
    },
  }
}
</script>