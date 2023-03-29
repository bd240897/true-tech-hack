<template>
  <div class="wrapper">
    <header class="header">
      <div class="headeer__wrapper">
        <img src="../assets/img/video_list_2/Logo.png" alt="" class="header-kion">
        <div class="header__inner">
          <div class="header__left">
            <nav class="header__nav">
              <ul class="nav__items">
                <li class="nav__item"><a href="">Главная</a></li>
                <li class="nav__item"><a href="">Телеканалы</a></li>
                <li class="nav__item"><a href="">Фильмы</a></li>
                <li class="nav__item"><a href="">Сериалы</a></li>
              </ul>
            </nav>
          </div>
          <div class="header__right">
            <div class="header__find">
              <input class="header__find-text" type="text" name="find" placeholder="Поиск">
            </div>
            <div class="header__profile">
              <svg class="header__profile-icon" width="40" height="40">
                <use href="#profile-icon"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="home__title">
          <img src="../assets/img/video_list_2/миллионер_название_баннер.svg" alt="" class="home__title-img">
          <p class="home__title__text">Четверо рыбаков узнают, что вот-вот останутся без работы. Чем не повод ограбить
            собственного босса!</p>
          <div class="home__title-descr">
            <p class="home__title-descr--text">2022</p>
            <p class="home__title-descr--text">Комедия</p>
            <p class="home__title-descr--text">18+</p>
          </div>
          <img class="home__title-play" src="../assets/img/video_list_2/play2.svg" alt="">
        </div>
        <div class="arrow">
          <svg class="arrow-svg" width="100" height="45" viewBox="0 0 100 45" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L50 42L98 2" stroke="white" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </header>
    <section class="home">
      <div class="hits">
        <div class="bottom-menu">
          <img src="../assets/img/video_list_2/12345.png" alt="">
          <nav class="header__nav">
            <ul class="nav__items new__style">
              <li class="nav__item"><a href="">Главная</a></li>
              <li class="nav__item"><a href="">Телеканалы</a></li>
              <li class="nav__item"><a href="">Фильмы</a></li>
              <li class="nav__item"><a href="">Сериалы</a></li>
            </ul>
          </nav>
        </div>
        <div class="hits-top">
          <h2 class="title-hits">Хиты на KION</h2>
          <p class="more">Смотреть больше ></p>
        </div>

        <div class="cards" v-on:click="goToFilmVideo">
          <div class="card">
            <img class="card__img" src="../assets/img/video_list_2/films/1.png" alt="">
            <div class="card__text">
              <p class="card_name">Сердце Пармы</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.6 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>

          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/2.png" alt="">
            <div class="card__text">
              <p class="card_name">Раневская</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.6 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/3.png" alt="">
            <div class="card__text">
              <p class="card_name">Один настоящий де..</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.6 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/4.png" alt="">
            <div class="card__text">
              <p class="card_name">Тест на беременно...</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.2 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/5.png" alt="">
            <div class="card__text">
              <p class="card_name">Комплекс Бога</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.9 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/6.png" alt="">
            <div class="card__text">
              <p class="card_name">Омар в большом го..</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">7.4</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hits-top hits-bot">
          <h2 class="title-hits">Фильмы для людей с особенностями зрения</h2>
          <p class="more">Смотреть больше ></p>
        </div>
        <p class="descr">Фильмы содержат функцию пропуска сцен, способных вызвать эпелептический припадок, а также
          фильтры для разных типов дальтонизма.</p>
        <div class="cards cards-sec">
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/1.png" alt="">
            <div class="card__text">
              <p class="card_name">Сердце Пармы</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.6 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/2.png" alt="">
            <div class="card__text">
              <p class="card_name">Раневская</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.6 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/3.png" alt="">
            <div class="card__text">
              <p class="card_name">Один настоящий де..</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.6 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/4.png" alt="">
            <div class="card__text">
              <p class="card_name">Тест на беременно...</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.2 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/5.png" alt="">
            <div class="card__text">
              <p class="card_name">Комплекс Бога</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">8.9 /</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
          <div class="card" v-on:click="goToFilmVideo">
            <img class="card__img" src="../assets/img/video_list_2/films/6.png" alt="">
            <div class="card__text">
              <p class="card_name">Омар в большом го..</p>
              <div class="card__rating">
                <img class="card__rating-stars" src="../assets/img/video_list_2/Vector.png" alt="">
                <p class="rating">7.4</p>
                <p class="podpiska">Подписка</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    <!--    <script src="../assets/js/video_list_2/libs/gsap/gsap.min.js" defer></script>-->
    <!--    <script src="../assets/js/video_list_2/libs/gsap/ScrollTrigger.min.js" defer></script>-->
    <!--    <script src="../assets/js/video_list_2/libs/gsap/ScrollSmoother.min.js" defer></script>-->

  </div>


</template>

<script>
import goToSomewhere from "@/mixins/goToSomewhere";
import {mapActions, mapState} from "vuex";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as myKey from '../assets/js/video_list_2/libs/gsap/gsap.min.js';

export default {
  name: "FilmsList",
  components: {},
  mixins: [goToSomewhere],
  data() {
    return {
      temp: '',
    }
  },
  computed: {
    // ...mapState('first', ['firstData',]),
  },
  methods: {},
  created() {

  },
  mounted() {
  }
}


</script>
<style scoped>
@import '../assets/css/normalize.css';

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Ubuntu';
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  background-color: #001424;
}

.bg__image {
  position: absolute;
  top: 0;
  overflow: hidden;
}

.header {
  background: url('../assets/img/video_list_2/bg_image.png') no-repeat top center;
}

.headeer__wrapper {
  width: 1440px;
  margin: 0 auto;
}

.main__img {
  position: relative;
  left: -50%;
  z-index: -1;
  overflow: hidden;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.header__inner {
  padding: 20px 165px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-kion {
  position: absolute;
  top: 12%;
  margin-left: 40px;
}

.header__left {
  margin-left: 190px;
}

.nav__items {
  display: flex;
  gap: 30px;
}

.nav__item {
  list-style: none;
}

.nav__item a {
  text-decoration: none;
  color: #EEEEEE;
}

.header__right {
  display: flex;
  gap: 20px
}

.header__find-text {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  outline: none;
  border: none;
}

.home__title {
  max-width: 400px;
  position: relative;
  margin: 325px 0 244px 328px;
}

.home__title-img {
  margin-bottom: 12px;
}

.home__title__text {
  color: #fff;
  margin-bottom: 20px;
}

.home__title-descr {
  display: flex;
  gap: 16px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-bottom: 20px;
}

.arrow {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: -40px;
}

.home {
  background-color: #001424;
  z-index: 100000;
  position: relative;
}

.hits-top {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #677F99;
}

.more {
  position: relative;
  top: 5px;
  cursor: pointer;
}

.title-hits {
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 28px;
  color: #EEEEEE;
  font-weight: 700;
}

.home {
  display: flex;
  justify-content: center;
}

.hits {
  margin-top: 60px;
}

.card_name {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
  margin-top: 10px;
  margin-bottom: 5px;
}

.card__rating {
  display: flex;
  justify-content: space-between;

}

.card {
  --bs-card-bg: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.cards {
  display: flex;
  gap: 30px;
}

.rating {
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #FFFFFF;
}

.podpiska {
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #A86EA7;
}

.card__img {
  border-radius: 10px;
  transition: .4s;
}

.card__img:hover {
  border-radius: 30px;
}

.hits-bot {
  margin-top: 90px;
}

.descr {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #EEEEEE;
  width: 700px;
  position: relative;
  top: -20px;
  margin-bottom: 15px;
}

.cards-sec {
  margin-bottom: 150px;
}

.bottom-menu {
  display: flex;
  align-items: center;
  gap: 70px;
  margin-bottom: 65px;
}
</style>