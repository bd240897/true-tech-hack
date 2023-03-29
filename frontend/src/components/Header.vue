<template>
    <header class="header">
      <div class="headeer__wrapper">
        <div class="header__inner">
          <div class="header__left">
            <nav class="header__nav">
              <ul class="nav__items">
                <li class="nav__item" v-on:click="goToFilmsList"><a href="">Главная</a></li>
                <li class="nav__item" v-on:click="goToFilmsList"><a href="">Телеканалы</a></li>
                <li class="nav__item" v-on:click="goToFilmsList"><a href="">Фильмы</a></li>
                <li class="nav__item" v-on:click="goToFilmsList"><a href="">Сериалы</a></li>
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
      </div>
    </header>
</template>

<script>
import goToSomewhere from "@/mixins/goToSomewhere";
export default {
  name: "Header",
  mixins: [goToSomewhere],
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
  /*background: url('../assets/img/video_list_2/bg_image.png') no-repeat top center;*/
  background-color: rgba(225,151,2,0)
}

.headeer__wrapper {
  width: 1440px;
  margin: 0 auto;
}

.header__inner {
  padding: 20px 165px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>