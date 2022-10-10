<template>
  <ion-page class="ion-page" main>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>CCSE</ion-title>
        <ion-buttons slot="primary">
          <router-link to="github">
            <ion-button fill="clear" color="light">
              <ion-icon size="large" name="logo-github"></ion-icon>
            </ion-button>
          </router-link>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-grid>

        <ion-row>
          <ion-col class="ion-text-center">
            <router-link to="exam">
              <ion-card padding class="card-expand">
                <ion-card-content>
                  <ion-icon size="large" name="clipboard"></ion-icon>
                  <h5>HACER EXAMEN</h5>
                  <h6>25 preguntas aleatorias</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-text-center">
            <router-link to="tasks">
              <ion-card padding class="card-expand">
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
              <ion-card padding class="card-expand">
                <ion-card-content>
                  <ion-icon size="large" name="timer"></ion-icon>
                  <h5>Repasar</h5>
                  <h6>Repetir preguntas que fallaste</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-text-center">
            <router-link to="stats">
              <ion-card padding class="card-expand">
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
              <ion-card padding class="card-expand">
                <ion-card-content>
                  <ion-icon size="large" name="information-circle-outline"></ion-icon>
                  <h5>Informacion</h5>
                  <h6>Material para estudiar</h6>
                </ion-card-content>
              </ion-card>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-text-center">
            <router-link to="exam-years">
              <ion-card padding class="card-expand">
                <ion-card-content>
                  <ion-icon size="large" name="clipboard"></ion-icon>
                  <h5>EXÁMENES ANTERIORES</h5>
                  <h6>25 preguntas</h6>
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

.card-expand {
  height: 100%;
}
</style>
