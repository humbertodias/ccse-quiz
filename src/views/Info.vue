<template>
  <IonVuePage title="Información">
    <ion-content>
      <ion-card>
        <ion-item :href="Config.PDF_ESPEC">
          <ion-label>Especificaciones de la prueba</ion-label>
          <ion-icon md="md-document" ios="ios-document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <router-link to="glossary">
        <ion-card>
          <ion-item>
            <ion-label>Glosario Multilingue</ion-label>
            <ion-icon md="md-arrow-dropright-circle" ios="ios-arrow-dropright-circle" slot="end"></ion-icon>
          </ion-item>
        </ion-card>
      </router-link>

      <router-link to="links">
        <ion-card>
          <ion-item>
            <ion-label>Enlaces</ion-label>
            <ion-icon md="md-arrow-dropright-circle" ios="ios-arrow-dropright-circle" slot="end"></ion-icon>
          </ion-item>
        </ion-card>
      </router-link>

      <router-link to="acronyms">
        <ion-card>
          <ion-item>
            <ion-label>Acrónimos</ion-label>
            <ion-icon md="md-arrow-dropright-circle" ios="ios-arrow-dropright-circle" slot="end"></ion-icon>
          </ion-item>
        </ion-card>
      </router-link>

      <ion-card>
        <ion-item :href="Config.PDF_INVENTORY">
          <ion-label>Inventario general de contenidos</ion-label>
          <ion-icon md="md-document" ios="ios-document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item :href="Config.PDF_MODEL">
          <ion-label>Modelo de prueba CCSE</ion-label>
          <ion-icon md="md-document" ios="ios-document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item :href="Config.PDF_MANUAL">
          <ion-label>
            Manual CCSE
            <p>preparación para los exámenes</p>
          </ion-label>

          <ion-icon md="md-document" ios="ios-document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item :href="Config.CCSE_URL">
          <ion-label>
            Sitio web oficial
            <p>examenes.cervantes.es/es/ccse</p>
          </ion-label>
          <ion-icon md="md-globe" ios="ios-globe" slot="end"></ion-icon>
        </ion-item>
      </ion-card>
    </ion-content>
  </IonVuePage>
</template>

<script>
export default {
  data() {
    return {
      Config: {
        PDF_ESPEC: "https://examenes.cervantes.es/sites/default/files/especificaciones_prueba_ccse.pdf",
        PDF_INVENTORY: "https://examenes.cervantes.es/sites/default/files/inventario_general_contenidos_prueba_CCSE.pdf",
        PDF_MANUAL: "https://examenes.cervantes.es/sites/default/files/ccse_manual_2019.pdf",
        PDF_MODEL: "https://examenes.cervantes.es/sites/default/files/Modelo-CCSE-2018.pdf",
        CCSE_URL: "https://examenes.cervantes.es/es/ccse"
      }
    };
  }
};
</script>


<style>
a {
  text-decoration: none;
}
</style>
