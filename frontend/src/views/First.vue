<template>
  <Navbar/>

  <h1 class="screen-name text-center">Первый экран</h1>

  <section class="first_screen">
    <div class="container">

      <div class="main-block">

        <div class="div-video-stream">


          <video width="1200" controls class="video-stream">
            <!-- <video width="1200" controls muted="muted"> -->
            <!-- <source src="video.mp4" type="video/mp4" /> -->
            <!--      TODO change u  http://localhost:8000/video  http://91.185.84.82:8001/video--> &html5=True
            <source controls="controls" src="http://localhost:8000/video" type="video/mp4"/>

            <!--      <source class="video-stream" src="http://localhost:8000/video" type="video/mp4" />-->
          </video>
          <button type="button" id="play">Play</button>
          <button type="button" id="stop">Stop</button>


        </div>

        <button class="btn-1">Черно белое видео</button>
        <button class="btn-2">Яркость 100%</button>

        <div class="div-BCS" style="display: flex; flex-direction: column; width: 50%">
          <input class="brightness" type="range" min="0" max="500" step="1" value="100">
          <input class="contrast" type="range" min="0" max="500" step="1" value="100">
          <input class="saturate" type="range" min="0" max="500" step="1" value="100">
        </div>
        <button class="btn-reset">Сбросить все</button>

      </div>


    </div>
  </section>

  <Footer/>


  <svg style="position: absolute; top: -99999px" xmlns="//www.w3.org/2000/svg">
    <filter id="filter-green">
      <feColorMatrix type="matrix" result="gray" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0"></feColorMatrix>
      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
        <feFuncR type="table" tableValues="0 0.16"></feFuncR>
        <feFuncG type="table" tableValues="0.14 0.65"></feFuncG>
        <feFuncB type="table" tableValues="0.21 0.54"></feFuncB>
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>
    <filter id="filter-yellow">
      <feColorMatrix type="matrix" result="gray" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0"></feColorMatrix>
      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
        <feFuncR type="table" tableValues="0 0.95"></feFuncR>
        <feFuncG type="table" tableValues="0.14 0.59"></feFuncG>
        <feFuncB type="table" tableValues="0.21 0.13"></feFuncB>
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>
  </svg>

</template>

<script>
import goToSomewhere from "@/mixins/goToSomewhere";
import {mapActions, mapState} from "vuex";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "First",
  components: {
    Navbar,
    Footer
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
    document.querySelector(".video-stream").classList.add("filter-green")


/////////////////////////////////////////////////////////////////////////////////////////////////////

// button for video drive
    document.querySelector("#play").addEventListener('click', event => {
      event.preventDefault()
      document.querySelector(".video-stream").play()
    })
    document.querySelector("#stop").addEventListener('click', event => {
      event.preventDefault()
      document.querySelector(".video-stream").pause()
    })


    document.querySelector(".btn-1").addEventListener('click', event => {
      event.preventDefault()
      document.querySelector(".video-stream").classList.add("black-white-filter")
    })

    document.querySelector(".btn-2").addEventListener('click', event => {
      event.preventDefault()
      document.querySelector(".video-stream").classList.add("brightness-high-filter")
    })

// установить яркость конрастность и насыщенность
    function setBCS() {
      const note = document.querySelector('.video-stream');
      // Яркость Контраст Насыщенность
      let brightness = document.querySelector('.brightness').value //400
      let contrast = document.querySelector('.contrast').value //100
      let saturate = document.querySelector('.saturate').value //100
      note.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`;
    }

    function resetBCSStyle() {
      let a = document.querySelector(".video-stream")
      a.style = ""
      document.querySelector('.brightness').value = 100
      document.querySelector('.contrast').value = 100
      document.querySelector('.saturate').value = 100
    }

    function resetBCSClasses() {
      let a = document.querySelector(".video-stream")
      a.className = ''
      a.classList.add("video-stream")
    }

    document.querySelector(".btn-reset").addEventListener('click', event => {
      event.preventDefault()
      resetBCSClasses()
      resetBCSStyle()
    })


    document.querySelector('.div-BCS').addEventListener('click', event => {
      event.preventDefault()
      setBCS()
    })


// пресет с фронтенда
    function setBCSValue(brightness, contrast, saturate) {
      document.querySelector('.brightness').value = brightness //400
      document.querySelector('.contrast').value = contrast //100
      document.querySelector('.saturate').value = saturate //100
      const note = document.querySelector('.video-stream');
      note.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`;
    }


    let timeEvents = [
      {
        id: 1,
        type: "blur-filter",
        on: 2,
        off: 5
      },
      {
        id: 2,
        type: "blur-filter",
        on: 7,
        off: 10
      },
    ]


    document.querySelector(".video-stream").addEventListener('timeupdate', event => {
      // event.preventDefault()
      const video = document.querySelector(".video-stream")
      let currentTime = video.currentTime
      console.log(currentTime)

      let alreadyUsedEvents = []
      timeEvents.forEach(x => {
        if (currentTime > x.on && currentTime < x.off) {
          document.querySelector(".video-stream").classList.add("blur-filter")
          console.log('on')
        } else if (currentTime > x.off && !alreadyUsedEvents.includes(x.id)) {
          alreadyUsedEvents.push(x.id)
          resetBCSClasses()
          console.log('off')
        }
      })
    })

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