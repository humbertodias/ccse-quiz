<template>
  <div>

    <ion-item>
      <ion-text>
      {{ currentQuestion.id}} - {{ currentQuestion.question }}
      </ion-text>
    </ion-item>

    <ion-item>
      <ion-icon
        name="help-circle-outline"
        slot="end"
        v-if="currentQuestion.hint"
        @click="openModal(currentQuestion.id,currentQuestion.hint)"
      ></ion-icon>
    </ion-item>

    <ion-card
      v-for="(answer, index) in shuffledAnswers"
      :key="index"
      @click.prevent="selectAnswer(index)"
      :color="answer && index == selectedIndex ? answerColor : ''"
      style="cursor: pointer;"
    >
      <ion-card-content>{{ answer }}</ion-card-content>
    </ion-card>

  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
    index: Number
  },
  data: function() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
      answerColor: "Light"
    };
  },
  computed: {
    answers() {
      // this function is no longer used in finished code
      // it is replaced by the watch function below and the
      // shuffleAnswers method
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      }
    }
  },
  methods: {
    selectAnswer(index) {
      if(this.answered) return;

      this.selectedIndex = index;
      // auto submit
      this.submitAnswer();
      this.answerClass(index);
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;

      this.increment(isCorrect, this.selectedIndex);
    },

    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffledAnswers = answers.sort(function() { return 0.5 - Math.random() });
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    answerClass(index) {
      if (this.answered) {
        if (this.correctIndex === index) {
          this.answerColor = "success";
        } else if (
          this.selectedIndex === index &&
          this.correctIndex !== index
        ) {
          this.answerColor = "danger";
        }
      }
    },
    openModal(title, content) {
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            data: {
              content: content
            },
            propsData: {
              title: title
            }
          }
        })
        .then(m => m.present());
    }
  }
};
</script>

<style scoped>
</style>
