<template>

  <IonVuePage title="Información">
    <ion-content>
      
      <ion-card>
        <ion-item href="pdf/especificaciones_prueba.pdf">
          <ion-label>Especificaciones de la prueba</ion-label>
          <ion-icon name="document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <router-link to="glossary">
      <ion-card>
        <ion-item>
          <ion-label>Glosario Multilingue</ion-label>
          <ion-icon name="arrow-dropright-circle" slot="end"></ion-icon>
        </ion-item>
      </ion-card>
      </router-link>

      <router-link to="links">
      <ion-card>
        <ion-item>
          <ion-label>Enlaces</ion-label>
          <ion-icon name="arrow-dropright-circle" slot="end"></ion-icon>
        </ion-item>
      </ion-card>
      </router-link>

      <router-link to="acronyms">
      <ion-card>
        <ion-item>
          <ion-label>Acrónimos</ion-label>
          <ion-icon name="arrow-dropright-circle" slot="end"></ion-icon>
        </ion-item>
      </ion-card>
      </router-link>


      <ion-card>
        <ion-item href="pdf/inventario.pdf">
          <ion-label>Inventario general de contenidos</ion-label>
          <ion-icon name="document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item href="pdf/modelo_examen.pdf">
          <ion-label>Modelo de prueba CCSE</ion-label>
          <ion-icon name="document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item href="pdf/manual.pdf">
          <ion-label>
            Manual CCSE
            <p>preparación para los exámenes</p>
          </ion-label>

          <ion-icon name="document" slot="end"></ion-icon>
        </ion-item>


      </ion-card>

      <ion-card>
        <ion-item href="https://examenes.cervantes.es/es/ccse">
          <ion-label>
            Sitio web oficial
            <p>examenes.cervantes.es/es/ccse</p>
          </ion-label>
          <ion-icon name="globe" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

    </ion-content>

  </IonVuePage>
</template>

<style>
a {
  text-decoration: none;
}
</style>
