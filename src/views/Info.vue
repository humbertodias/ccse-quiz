<template>

  <IonVuePage title="Información">
    <ion-content>
      
      <ion-card>
        <ion-item href="https://examenes.cervantes.es/es/ccse/examen">
          <ion-label>Especificaciones de la pruba CCSE</ion-label>
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

      <ion-card>
        <ion-item>
          <ion-label>Inventario general de contenidos</ion-label>
          <ion-icon name="document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item href="https://examenes.cervantes.es/sites/default/files/Modelo-CCSE-2018.pdf">
          <ion-label>Modelo de prueba CCSE</ion-label>
          <ion-icon name="document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item href="https://examenes.cervantes.es/sites/default/files/ccse_manual_2019.pdf">
          <ion-label>
            Manual CCSE 2019
            <p>prepara los exámenes a partir de enero 2019</p>
          </ion-label>

          <ion-icon name="document" slot="end"></ion-icon>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item href="https://examenes.cervantes.es/es/ccse">
          <ion-label>
            <h3>Sitio web oficial</h3>
            <p>https://examenes.cervantes.es/es/ccse</p>
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
