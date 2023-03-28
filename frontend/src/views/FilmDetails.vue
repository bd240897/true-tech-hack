<template>

  <h1 class="screen-name text-center text-white">FilmDetails</h1>

  <!--  {{this.$route.params.id}}-->

  <section class="second_screen mb-5">
    <div class="container">

      FilmDetails
      <button v-on:click="goToFilmVideo">GoToFilmVideo</button>
    </div>
  </section>

</template>

<script>
import goToSomewhere from "@/mixins/goToSomewhere";
import {mapActions, mapState} from "vuex";


export default {
  name: "FilmDetails",
  components: {

  },
  mixins: [goToSomewhere],
  data() {
    return {
      temp: '',
    }
  },
  computed: {
    // ...mapState('second', ['secondData',]),
  },
  methods: {
    // ...mapActions('second', ["GET_SECOND_DATA",]),
    isWarning(str) {
      return str === 'warning'
    },
    isAlarm(str) {
      return str === 'alarm'
    },
    isWarningOrAlarm(strData) {
      if (strData === 'warning') {
        return "block_exauster__params--warning"
      } else if (strData === 'alarm') {
        return "block_exauster__params--alert"
      }
    },


  },
  created() {
    this.GET_SECOND_DATA({id: this.$route.params.id})
  },
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')

html, body
  height: 100%

  .exauster
    padding: 0 20px
    margin: 0

    &__name
      font-weight: bold

    &__img
      height: auto
      width: 100%

    &__body
      &__header
        font-size: 22px
        text-align: center

.temperature_oil__block__img
  text-align: center

.temperature_oil__block__sensor
  color: red

.freezer__img
  width: 25%
  height: auto

p
  margin: 0 0


.col-1, .col-2, .col-3, .col-4, .col-5, .col-6
  margin: 0 0
  padding: 0 0
  font-size: 10px

.block_exauster
  background-color: #414F4F
  border-radius: 10px
  color: white
  text-align: center
  margin-bottom: 5px
  padding: 5px 5px

  &__name
    font-weight: bold
    font-size: 12px
    margin-bottom: 5px

  &__params
    margin: 2px 0

    &--alert
      background-color: red
      font-weight: bold
      border-radius: 5px

    &--warning
      background-color: #ffc107
      font-weight: bold
      border-radius: 5px

    &--well
      background-color: green
      font-weight: bold
      border-radius: 5px


.exauster__work
  border-radius: 10px
  color: white
  text-align: center
  margin: 20px 0

</style>