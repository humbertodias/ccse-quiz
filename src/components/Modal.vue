<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>

        <ion-buttons slot="start">
          <ion-back-button default-href="/" @click="close"/>
        </ion-buttons>

        <ion-icon v-show="canSay()" size="large" name="volume-high" slot="end" @click="say" style="cursor: pointer"></ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-content padding class="new-line">{{ content }}</ion-content>
  </div>
</template>

<script>
import Speech from "../speech";

export default {
  name: "Modal",
  props: {
    title: undefined
  },
  data() {
    return {
      content: "Content"
    };
  },
  methods: {
    say() {
      Speech.say(this.content);
    },
    canSay(){
      return Speech.canSay()
    },
    close() {
      this.$ionic.modalController.dismiss(true);
    }
  }
};
</script>

<style>
.new-line {
  white-space: pre-line;
}
</style>
