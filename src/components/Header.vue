<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled><b>CCSE - Quiz</b></b-nav-item>
      <b-nav-item disabled>Progreso: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>
  </div>

</template>

<script>
export default {
    props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>

<style>

</style>
