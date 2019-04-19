<template>
  <div class="question-box-container">
    <b-jumbotron>

      <template slot="lead">
      {{ currentQuestion.id}} - {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="answerClass(index)"
        >
          {{ answer }}
        </b-list-group-item>
      </b-list-group>

      <hr class="my-4" />


      <b-button
        variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex === null || answered"
      >
        Enviar
      </b-button>
      <b-button @click="previous" variant="success">
        &lt;
      </b-button>
      <b-button @click="next" variant="success">
        &gt;
      </b-button>
    </b-jumbotron>

  </div>
</template>

<script>
import _ from 'lodash'
import { isNumber } from 'util';

export default {
  props: {
    currentQuestion: Object,
    previous: Function,
    next: Function,
    increment: Function
  },
  data: function() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false
    }
  },
  computed: {
    answers() {
      // this function is no longer used in finished code
      // it is replaced by the watch function below and the
      // shuffleAnswers method
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null
        this.answered = false
        this.shuffleAnswers()
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index
    },
    submitAnswer() {
      let isCorrect = false

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      this.answered = true

      this.increment(isCorrect)
    },

    removeItemByValue(array, value) {
        var index = array.indexOf(value);
        if (index !== -1) array.splice(index, 1);
    },
    fixCorrectAnswerOfCurrentQuestion(){
      if(isNumber(this.currentQuestion.correct_answer)){
        let correct_answer_index = this.currentQuestion.correct_answer - 1;
        let correct_answer = this.currentQuestion.incorrect_answers[correct_answer_index];
        this.currentQuestion.correct_answer = correct_answer;

        this.removeItemByValue(this.currentQuestion.incorrect_answers, correct_answer);
      }
    } ,
    shuffleAnswers() {
      this.fixCorrectAnswerOfCurrentQuestion();
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
    },
    answerClass(index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect'
      }

      return answerClass
    }
  }
}
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #EEE;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>
