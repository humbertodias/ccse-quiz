<template>

  <IonVuePage title="Glosario">

  <ion-toolbar>
    <ion-searchbar placeholder="Filtro" @input="handleInput">
    </ion-searchbar>
  </ion-toolbar>

    <ion-content>

      <ion-list>
        <ion-item v-for="item in items" :key="item[0]">
          {{item}}
        </ion-item>
      </ion-list>

    </ion-content>

  </IonVuePage>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted: function() {
    let url = 'glosario.json';
    fetch(url, {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.items = jsonData;
    });
  },
  methods:{
   // TODO
   handleInput(evt){  
     let searchTerm = evt.srcElement.value;
     console.log(searchTerm)
     return this.items.filter((item) => {  
       console.log("item[0]", item[0])
       return item[0].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;  
     });     
   }  
  }
}
</script>
