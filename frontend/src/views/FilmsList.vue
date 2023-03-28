<template>

  <h1 class="screen-name text-center text-white">FilmsList</h1>

  <section class="first_screen">
    <div class="container">
      FilmsList
      <button v-on:click="goToFilmDetail">GoToFilmDetails</button>
    </div>
  </section>

   <div class="wrapper search_live" style="background-color: #001424;">
      <header class="header">header</header>

      <section class="content">
        <div class="main">

          <section class="logo">
            <div class="container">
              <div class="logo">
                <div class="logo__item">
                  <img src="../assets/img/video_list/logo.svg" alt="" />
                </div>
              </div>
            </div>
          </section>

          <section class="search">
            <div class="container">
              <div class="string">
                <div class="string__block">
                  <div class="string__item">
                    <div class="string__logo">
                      <img src="../assets/img/video_list/find_icon.png" alt="" />
                    </div>

                    <div class="string__form">
                      <form method="post">
                        <input
                          type="text"
                          id="myInput"
                          placeholder="Поиск фильмов по жанрам и актерам"
                        />
                      </form>
                    </div>

                    <div class="string__cruz">
                      <img src="../assets/img/video_list/cruz_icon.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="tags">
                <div class="tags__block">
                  <div class="tags__item">Как я встретил мамку</div>
                  <div class="tags__item">Гоп-стоп</div>
                  <div class="tags__item">Весенний дрозд</div>
                  <div class="tags__item">Белоснежка и семь гномов</div>
                  <div class="tags__item tags__item--extra">Трое в лодке</div>
                  <div class="tags__item tags__item--extra">
                    Бандитский петербург
                  </div>
                  <div class="tags__item tags__item--extra">
                    Спящая женщина и принц
                  </div>
                  <div class="tags__item tags__item--extra">Война миров</div>
                  <div class="tags__item tags__item--extra">
                    Дикий дикий дикий запад
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="results">
            <div class="container">
              <h2 class="results__header">Нашли 82 фильма</h2>

              <div class="results__row">
                <div class="results__col">
                  <div class="results__item">
                    <img src="../assets/img/video_list/poster.png" alt="" />
                  </div>
                </div>
                <div class="results__col">
                  <div class="results__item">
                    <img src="../assets/img/video_list/poster.png" alt="" />
                  </div>
                </div>
                <div class="results__col">
                  <div class="results__item">
                    <img src="../assets/img/video_list/poster.png" alt="" />
                  </div>
                </div>
                <div class="results__col">
                  <div class="results__item">
                    <img src="../assets/img/video_list/poster.png" alt="" />
                  </div>
                </div>

                <div class="results__col">
                  <div class="results__item results__item--no_poster">
                    <img src="../assets/img/video_list/loading.png" alt="" />

                    <div class="results__item__name">Шпионский мост</div>
                    <div class="results__item__ganre">Боевик, триллер</div>
                    <div class="results__item__year">2017</div>
                  </div>
                </div>

                <div class="results__col">
                  <div class="results__item results__item--loading">
                    <img src="../assets/img/video_list/loading.png" alt="" />

                    <div class="results__item__plug_1"></div>
                    <div class="results__item__plug_2"></div>
                  </div>
                </div>

                <div class="results__col">
                  <div class="results__item results__item--loading">
                    <img src="../assets/img/video_list/loading.png" alt="" />

                    <div class="results__item__plug_1"></div>
                    <div class="results__item__plug_2"></div>
                  </div>
                </div>

                <div class="results__col">
                  <div class="results__item results__item--loading">
                    <img src="../assets/img/video_list/loading.png" alt="" />

                    <div class="results__item__plug_1"></div>
                    <div class="results__item__plug_2"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="no_results">
            <div class="container">
              <div class="no_results__text">
                Мы не поняли о чем речь ¯\_(ツ)_/¯
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>

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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap")

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap")

$colorBackground: rgba(255, 255, 255, 0.4)
$colorFilmItemPlugs: rgba(255, 255, 255, 0.16)
$filterIconParams: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)

html, body
    font-family: "Montserrat", sans-serif
    font-size: 18px
    line-height: 140%
    height: 100%
    background-color: $colorBackground

.wrapper
    height: 100%
    display: flex
    flex-direction: column

    .header
        flex: 0 0 auto
        background-color: blue
        text-align: center
        display: none

    .content
        flex: 1 0 auto

    .footer
        flex: 0 0 auto
        padding: 16px 0
        font-size: 12px
        text-align: center

.container
    max-width: 900px
    margin: 0 auto
    padding: 0 10px

.logo
    display: flex
    justify-content: center
    margin: 80px 0 54px 0

    &__item
        margin: 20px 0

.string
    margin-top: 10px

    &__block
        width: 80%
        margin: 0 auto
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

    &__block:after
        content: ""
        display: block
        width: 100%
        margin: 10px 0 20px 0
        border-bottom: 2px solid white

    &__item
        width: 100%
        display: flex
        margin: 10px 10px

    &__logo
        flex: 0 0 auto
        display: flex
        justify-content: center
        align-items: center
        margin-right: 5px

    &__logo img
        width: 24px
        cursor: pointer

    &__logo img:hover
        filter: $filterIconParams

    &__cruz
        flex: 0 0 auto
        display: flex
        justify-content: center
        align-items: center
        margin-left: 5px

    &__cruz img
        width: 24px
        cursor: pointer

    &__cruz img:hover
        filter: $filterIconParams

    &__form
        flex: 1 0 auto
        align-self: center

    &__form form
        width: 100%
        display: flex

    &__form input
        flex-grow: 1
        min-width: 100%
        font-size: 24px
        background: transparent
        border: none
        color: white

    &__form input::placeholder
        color: $colorBackground
        width: 100%

.tags
    display: none

    &__block
        display: flex
        flex-wrap: wrap

    &__item
        border: 1px solid black
        padding: 6px 16px
        background-color: #FFFFFF
        border-radius: 5px
        margin: 4px 4px
        font-family: "Roboto", sans-serif
        font-weight: 700
        color: black
        cursor: pointer

    &__item--extra
        display: none

.results
    display: none

    &__header
        font-weight: 700
        font-size: 36px
        color: white
        margin: 50px 0 18px 0

    &__row
        display: flex
        flex-wrap: wrap

    &__col
        width: 1 / 4 * 100%

    &__item
        position: relative
        padding: 12px
        color: $colorFilmItemPlugs

    &__item img
        width: 100%

    &__item__name
        position: absolute
        left: 12px + 12px
        font-size: 18px
        bottom: 70px

    &__item__ganre
        position: absolute
        right: 12px + 12px
        font-size: 12px
        bottom: 30px

    &__item__year
        position: absolute
        bottom: 30px
        font-size: 12px
        left: 12px + 12px

    &__item__plug_1
        position: absolute
        padding: 8px
        left: 10%
        bottom: 90px
        width: 75%
        background-color: $colorFilmItemPlugs
        border-radius: 2px
        content: ""

    &__item__plug_2
        position: absolute
        bottom: 60px
        left: 10%
        width: 50%
        padding: 8px
        background-color: $colorFilmItemPlugs
        border-radius: 2px
        content: ""

.no_results
    display: none
    border: 1px solid black
    padding: 100px 0
    text-align: center

    &__text
        font-weight: 700
        font-size: 36px
        color: white
        line-height: 100%

.search_active
    .tags
        display: block

    .string__block
        width: 100%

.search_more_history
    .tags
        display: block

    .tags__item--extra
        display: block

    .string__block
        width: 100%

.search_not_found
    .no_results
        display: block

    .tags
        display: block

    .string__block
        width: 100%

.search_live
    .results
        display: block

    .tags
        display: block

    .string__block
        width: 100%

.scroll
    .search
        background-color: $colorBackground
        position: sticky
        top: 0
        z-index: 99

    .string__block
        width: 100%

    .results
        display: block


</style>