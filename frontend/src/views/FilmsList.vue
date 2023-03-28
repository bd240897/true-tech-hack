<template>

  <h1 class="screen-name text-center text-white">FilmsList</h1>

  <section class="first_screen">
    <div class="container">
      FilmsList
      <button v-on:click="goToFilmDetail">GoToFilmDetails</button>
    </div>
  </section>

</template>

<script>
import goToSomewhere from "@/mixins/goToSomewhere";
import {mapActions, mapState} from "vuex";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "FilmsList",
  components: {

  },
  mixins: [goToSomewhere],
  data() {
    return {
      temp: '',
    }
  },
  computed: {
    // ...mapState('first', ['firstData',]),
  },
  methods: {
    // ...mapActions('first', ["GET_FIRST_DATA",]),
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
    // this.GET_FIRST_DATA({})
  },
  mounted() {

  }
}


</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')

html, body
  height: 100%


.btn-reset
  background-color: red


.brightness-high-filter
  filter: brightness(400%)


.black-white-filter
  filter: grayscale(100%)


.invert-filter
  filter: invert(100%)


.blur-filter
  filter: blur(3px) brightness(30%) url(#filter-green)


.block_machines
  background-color: #6c757d
  border-radius: 2px
  color: white
  text-align: center

  &__exauster
    background-color: white
    border-radius: 2px
    border-color: black
    color: black


    &__img
      width: auto
      height: auto
      max-height: 100%
      max-width: 100%
      cursor: pointer

.bearings

  .working__status
    border-radius: 1px
    border: solid #77787f

    &--work
      background-color: green

    &--nowork
      background-color: red

  &__parameters
    margin-bottom: 10px

    &__number
      border-radius: 5px
      border: solid #77787f
      background-color: #d7d8da


.block_exauster__params

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

</style>