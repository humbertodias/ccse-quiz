<template>
  <ion-page class="ion-page" main>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>

        <ion-row align-items-stretch>
          <ion-col class="ion-text-center">
            <router-link to="exam">
              <ion-card>
                <ion-card-content>
                  <ion-icon size="large" name="clipboard"></ion-icon>
                  <h5>HACER EXAMEN</h5>
                  <h6>25 preguntas aleatorias</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row align-items-stretch>
          <ion-col class="ion-text-center">
            <router-link to="questions">
              <ion-card padding>
                <ion-card-content>
                  <ion-icon size="large" name="help"></ion-icon>
                  <h5>300 Perguntas</h5>
                  <h6>Todas las preguntas posibles</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
          <ion-col class="ion-text-center">
            <router-link to="redo">
              <ion-card padding>
                <ion-card-content>
                  <ion-icon size="large" name="timer"></ion-icon>
                  <h5>Repasar</h5>
                  <h6>Repetir preguntas que fallaste</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row align-items-stretch>
          <ion-col class="ion-text-center">
            <router-link to="stats">
              <ion-card padding>
                <ion-card-content>
                  <ion-icon size="large" name="stats"></ion-icon>
                  <h5>Estadisticas</h5>
                  <h6>Tu progreso</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>

          <ion-col class="ion-text-center">
            <router-link to="info">
              <ion-card padding>
                <ion-card-content>
                  <ion-icon size="large" name="information-circle-outline"></ion-icon>
                  <h5>Informacion</h5>
                  <h6>Material para estudiar</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>

      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
export default {};
</script>

<style>
ion-col > a {
  text-decoration: none;
}
</style>
