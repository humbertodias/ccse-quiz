<template>

  <IonVuePage title="Glosario">

  <ion-toolbar>
    <ion-searchbar placeholder="Filtro" @input="handleInput">
    </ion-searchbar>
  </ion-toolbar>

    <ion-content>

        <ion-card padding v-for="item in items" :key="item[0]">
          <ion-card-header>
            <ion-card-title>
              {{item[0]}}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h3>{{item[1]}}</h3>
            <h3>{{item[2]}}</h3>
            <h3>{{item[3]}}</h3>
            <h3>{{item[4]}}</h3>
            <h3>{{item[5]}}</h3>
            <h3>{{item[6]}}</h3>
          </ion-card-content>
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
    fetch('glosario.json', {
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
   }  
  }
}
</script>