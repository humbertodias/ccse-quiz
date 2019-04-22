<template>

<div>

  <b-card
    header="Menu"
    header-tag="header"
  >

    <router-link to="exam">
      <b-card align="center">
      
      <b-img-lazy src="https://mariaortegagarcia.com/wp-content/uploads/2017/10/Free-Trial-7.png"
      width="150" height="150"
                    />
        <b-card-body title="HACER EXAMEN">
          <b-card-text>25 preguntas aleatorías</b-card-text>
        </b-card-body>

      </b-card>
    </router-link>

    <br/>

    <b-row>
      <b-col cols="6">
  
      <router-link to="questions">
      <b-card>

        <b-card-body title="300 PREGUNTAS">
          <b-card-text>Todas las preguntas posibles</b-card-text>
        </b-card-body>

      </b-card>
      </router-link>

      </b-col>
      
      <b-col cols="6">
        <router-link to="redo">
        <b-card>
            <b-card-body title="REPASAR">
              <b-card-text>Repetir preguntas que fallaste</b-card-text>
            </b-card-body>
        </b-card>
        </router-link>

      </b-col>

    </b-row>
      
    <br/>

    <b-row>
      <b-col cols="6">
        <router-link to="stats">
      <b-card>

        <b-card-body title="ESTADÍSTICAS">
            <b-card-text>Tu progreso</b-card-text>
        </b-card-body>

      </b-card>
        </router-link>

      </b-col>
      
      <b-col cols="6">
        <router-link to="info">
        <b-card>
            <b-card-body title="INFORMACÍON">
              <b-card-text>Material para estudiar</b-card-text>
            </b-card-body>
        </b-card>
        </router-link>

      </b-col>

    </b-row>

  </b-card>

</div>

</template>

<script>
export default {
}
</script>

<style>
</style>
