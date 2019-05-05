<template>

  <IonVuePage title="Glosario">

  <ion-toolbar>

    <ion-item lines="none">
        <ion-grid>
          <ion-row>
            <ion-col><ion-img src="flags/es.png"></ion-img></ion-col>
            <ion-col><ion-img src="flags/en.png"></ion-img></ion-col>
            <ion-col><ion-img src="flags/fr.png"></ion-img></ion-col>
            <ion-col><ion-img src="flags/pt.png"></ion-img></ion-col>
            <ion-col><ion-img src="flags/he.png"></ion-img></ion-col>
            <ion-col><ion-img src="flags/tk.png"></ion-img></ion-col>
            <ion-col><ion-img src="flags/ar.png"></ion-img></ion-col>
          </ion-row>
        </ion-grid>
    </ion-item>

    <ion-searchbar placeholder="Filtro" @input="handleInput">
    </ion-searchbar>

  </ion-toolbar>

    <ion-content>

        <ion-card v-for="item in items" :key="item[0]">
          <ion-card-header>
            <ion-card-title>
              {{item[0]}}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <!--<h3>{{item[1]}}</h3>-->
            <h3>{{item[2]}}</h3>
            <h3>{{item[3]}}</h3>
            <h3>{{item[4]}}</h3>
            <h3>{{item[5]}}</h3>
            <h3>{{item[6]}}</h3>
            <h3>{{item[7]}}</h3>
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