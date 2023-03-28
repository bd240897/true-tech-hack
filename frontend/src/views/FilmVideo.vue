<template>
  <Navbar/>

  <h1 class="screen-name text-center text-white">FilmVideo</h1>

  <svg style="display:none" xmlns="http://www.w3.org/2000/svg">
        <symbol id="pause">
          <path
              d="M37.8906 21.2557C39.2526 22.0198 39.2526 23.9802 37.8906 24.7443L2.9785 44.3291C1.64532 45.077 8.48698e-08 44.1135 1.53639e-07 42.5849L1.91578e-06 3.41515C1.98455e-06 1.88653 1.64532 0.922985 2.9785 1.67087L37.8906 21.2557Z"
              fill="white"/>
        </symbol>
        <symbol id="sun">
          <path d="M12 5.625C8.51048 5.625 5.625 8.51048 5.625 12C5.625 15.4895 8.51048 18.375 12 18.375C15.4895 18.375 18.375 15.4895 18.375 12C18.375 8.51048 15.4895 5.625 12 5.625ZM12.7031 16.8977V7.10231C15.082 7.44717 16.9688 9.52711 16.9688 12C16.9688 14.4729 15.082 16.5528 12.7031 16.8977ZM12 0C11.6114 0 11.2969 0.314484 11.2969 0.703125V3.51562C11.2969 3.90427 11.6114 4.21875 12 4.21875C12.3886 4.21875 12.7031 3.90427 12.7031 3.51562V0.703125C12.7031 0.314484 12.3886 0 12 0ZM12 19.7812C11.6114 19.7812 11.2969 20.0957 11.2969 20.4844V23.2969C11.2969 23.6855 11.6114 24 12 24C12.3886 24 12.7031 23.6855 12.7031 23.2969V20.4844C12.7031 20.0957 12.3886 19.7812 12 19.7812ZM3.51562 11.2969H0.703125C0.314484 11.2969 0 11.6114 0 12C0 12.3886 0.314484 12.7031 0.703125 12.7031H3.51562C3.90427 12.7031 4.21875 12.3886 4.21875 12C4.21875 11.6114 3.90427 11.2969 3.51562 11.2969ZM23.2969 11.2969H20.4844C20.0957 11.2969 19.7812 11.6114 19.7812 12C19.7812 12.3886 20.0957 12.7031 20.4844 12.7031H23.2969C23.6855 12.7031 24 12.3886 24 12C24 11.6114 23.6855 11.2969 23.2969 11.2969ZM6.48403 17.516C6.20939 17.2414 5.76441 17.2414 5.48977 17.516L3.50053 19.5045C3.22584 19.7792 3.22584 20.2241 3.50053 20.4988C3.77517 20.7735 4.22016 20.7735 4.4948 20.4988L6.48403 18.5103C6.75867 18.2356 6.75867 17.7907 6.48403 17.516ZM20.4988 3.50119C20.2242 3.22655 19.7792 3.22655 19.5045 3.50119L17.516 5.48972C17.2414 5.76436 17.2414 6.20934 17.516 6.48398C17.7907 6.75863 18.2356 6.75863 18.5103 6.48398L20.4988 4.49545C20.7735 4.22081 20.7735 3.77588 20.4988 3.50119ZM20.4988 19.5045L18.5103 17.516C18.2356 17.2414 17.7907 17.2414 17.516 17.516C17.2414 17.7907 17.2414 18.2356 17.516 18.5103L19.5045 20.4988C19.7792 20.7735 20.2242 20.7735 20.4988 20.4988C20.7735 20.2242 20.7735 19.7792 20.4988 19.5045ZM6.48403 5.48972L4.4948 3.50119C4.22011 3.22655 3.77517 3.22655 3.50053 3.50119C3.22589 3.77583 3.22589 4.22081 3.50053 4.49545L5.48977 6.48398C5.76441 6.75863 6.20939 6.75863 6.48403 6.48398C6.75867 6.20934 6.75867 5.76436 6.48403 5.48972Z" fill="white"/>
        </symbol>
      </svg>

  <section class="first_screen">
      <div class="container">
        <div class="video">
            <div class="video-wrapper">
                <video class="video-stream" id="myvideo" width="100%" height="auto">
                    <source controls="controls" src="http://91.185.84.82:8000/video" type="video/mp4"/>
                </video>
            </div>
            <svg class="video__btn" id="video__btn" width="41" height="46">
                <use href="#pause"></use>
            </svg>
        </div>
        <div class="controls" id="controls">
            <div class="progress_panel">
                <span id="progress" class="progress">
                    <span id="total" class="total">
                        <span id="current" class="current">​</span>
                    </span>
                </span>
                <span id="time" class="time">
                    <span id="currenttime" class="currenttime time__set">00:00</span> / 
                    <span id="duration" class="duration time__set">00:00</span>
                </span>
            </div>
            <div class="button__panel">
                <div class="back-up__panel">
                    <img class="point" id="back" src="../assets/img/video/back.png" alt="">
                    <img class="point" id="up" src="../assets/img/video/up.png" alt="">
                    <img class="point" src="../assets/img/video/volume.svg" alt="">
                </div>
                <div class="center__panel">
                    <div class="center__panel-block point">
                        <svg class="circle" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                            <circle r="20px" cx="20px" cy="20px" fill="white" fill-opacity="0.25"/>
                        </svg>
                        <img class="icon" src="../assets/img/video/lighning/ligh.svg" alt="">
                    </div>
                    <div class="center__panel-block point sun__btn">
                        <svg class="circle" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                            <circle class="sun__svg" r="20px" cx="20px" cy="20px" fill="white" fill-opacity="0.25"/>
                        </svg>
                        <svg class="icon" width="24" height="24">
                          <use href="#sun"></use>
                        </svg>
                        <!-- <img class="icon sun__svg" src="../assets/img/video/sun/sun.svg" alt=""> -->
                    </div>
                    <div class="center__panel-block alice-block point">
                        <svg class="circle" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                            <circle class="ali__svg" r="20px" cx="20px" cy="20px" fill="white" fill-opacity="0.25"/>
                        </svg>
                        <img class="icon alice__img" src="../assets/img/video/alice/alice.png" alt="">
                    </div>
                </div>
                <div class="end__panel">
                    <img class="point" src="../assets/img/video/12.png" alt="">
                    <img class="point" src="../assets/img/video/settings.png" alt="">
                    <img class="point" src="../assets/img/video/full.png" alt="">
                </div>
            </div>
        </div>
        <div class="temp">
        <!-- <button type="button" id="play">Play</button>
        <button type="button" id="stop">Stop</button> -->

        <div class="div-BCS">
          <div class="br__co__wrapper">
            <div class="br__co">
            <div class="set__item">
              <p class="set__item-text">Яркость:</p>
              <input class="brightness test" type="range" min="0" max="500" step="1" value="100">              
            </div>
            <div class="set__item">
              <p class="set__item-text">Контрастность:</p>
              <input class="contrast test" type="range" min="0" max="500" step="1" value="100">              
            </div>
            <div class="set__item">
              <p class="set__item-text">Насыщенность:</p>
              <input class="saturate test" type="range" min="0" max="500" step="1" value="100">           
            </div>
            <button class="btn-reset">Сбросить</button>
          </div>
        </div>
        <div class="alica-text-wrapper">
          <div class="alica-text">
          <input type="text" placeholder="Алиса, сделай ярче">
        </div>
        </div>
      </div>
        <!-- <button class="btn-1">Черно белое видео</button>
        <button class="btn-2">Яркость 100%</button> -->
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script>
import goToSomewhere from "@/mixins/goToSomewhere";
import {mapActions, mapState} from "vuex";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "FilmVideo",
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
    ...mapState('video', ['videoEventsData',]),
  },
  methods: {
    ...mapActions('video', ["GET_VIDEO_EVENTS_DATA",]),
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
    this.GET_VIDEO_EVENTS_DATA({})
  },
  mounted() {

    //////////////////////////////// player video ///////////////////////////////////////////////////////////
    let controls = {
      video: $("#myvideo"),
      total: $("#total"),
      buffered: $("#buffered"),
      progress: $("#current"),
      duration: $("#duration"),
      currentTime: $("#currenttime"),
      back: $("#back"),
      up: $("#up"),
      play: $("#play"),
      stop: $("#stop"),
      btn1: $(".btn-1"),
      hasHours: false,

      togglePlayback: function () {
        (video.paused) ? video.play($('.video__btn').css('display', 'none'))
            : video.pause($('.video__btn').css('display', 'block'));
      }
    };

    let check = 0;
    let check1 = 0;
    let video = controls.video[0];

    video.addEventListener("ended", function () {
      video.pause();
    });

    controls.video.click(function () {
      controls.togglePlayback();
    });

    video.addEventListener("canplay", function () {
      controls.hasHours = (video.duration / 3600) >= 1.0;

      controls.duration.text(formatTime(video.duration, controls.hasHours));
      controls.currentTime.text(formatTime(0), controls.hasHours);
    }, false);

    video.addEventListener("timeupdate", function () {
      controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));

      let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
      controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";
    }, false);

    controls.total.click(function (e) {
      let x = (e.pageX - this.offsetLeft) / $(this).width();
      video.currentTime = x * video.duration;
    });

    controls.up.click(function (e) {
      video.currentTime += 15;
    });

    controls.back.click(function (e) {
      video.currentTime -= 15;
    });

    function formatTime(time, hours) {
      if (hours) {
        let h = Math.floor(time / 3600);
        time = time - h * 3600;

        let m = Math.floor(time / 60);
        let s = Math.floor(time % 60);

        return h.lead0(2) + ":" + m.lead0(2) + ":" + s.lead0(2);
      } else {
        let m = Math.floor(time / 60);
        let s = Math.floor(time % 60);

        return m.lead0(2) + ":" + s.lead0(2);
      }
    }

    Number.prototype.lead0 = function (n) {
      let nz = "" + this;
      while (nz.length < n) {
        nz = "0" + nz;
      }
      return nz;
    };

    ///////////////////////////////////////// effects /////////////////////////////////////////////////////
    // button for video drive

    // let timeEvents = [
    //   {
    //     id: 1,
    //     type: "blur-filter",
    //     on: 2,
    //     off: 5
    //   },
    //   {
    //     id: 2,
    //     type: "blur-filter",
    //     on: 7,
    //     off: 10
    //   }]

    document.querySelector('.sun__btn').addEventListener('click', () => {
      if (check === 0) {
        document.querySelector(".br__co__wrapper").style.display = "block";
        document.querySelector('.sun__svg').style.fill = "rgba(155, 155, 155, 1)";
        check += 1;
      } else {
        document.querySelector(".br__co__wrapper").style.display = "none";
        document.querySelector('.sun__svg').style.fill = "rgba(255, 255, 255, 1)";
        check = 0;
      }
    })

    document.querySelector('.alice-block').addEventListener('click', () => {
      if (check1 === 0) {
        document.querySelector(".alica-text-wrapper").style.display = "block";
        document.querySelector('.ali__svg').style.fill = "rgba(155, 155, 155, 1)";
        check1 += 1;
      } else {
        document.querySelector(".alica-text-wrapper").style.display = "none";
        document.querySelector('.ali__svg').style.fill = "rgba(255, 255, 255, 1)";
        check1 = 0;
      }
    })

    // document.querySelector("#play").addEventListener('click', event => {
    //   event.preventDefault();
    //   document.querySelector(".video-stream").play();
    //   document.querySelector(".video__btn").style.display = "none";
    // })

    // document.querySelector("#stop").addEventListener('click', event => {
    //   event.preventDefault();
    //   document.querySelector(".video-stream").pause();
    //   document.querySelector(".video__btn").style.display = "block";
    // })

    // document.querySelector(".btn-1").addEventListener('click', event => {
    //   event.preventDefault()
    //   cleanWrapperClasses()
    //   document.querySelector(".video-wrapper").classList.add("black-white-filter")
    // })

    // document.querySelector(".btn-2").addEventListener('click', event => {
    //   event.preventDefault()
    //   cleanWrapperClasses()
    //   document.querySelector(".video-wrapper").classList.add("brightness-high-filter")
    // })

    document.querySelector('.div-BCS').addEventListener('click', event => {
      event.preventDefault()
      setBCS()
    })

    document.querySelector(".video-wrapper").addEventListener('timeupdate', event => {
      // event.preventDefault()
      const video = document.querySelector(".video-wrapper")
      let currentTime = video.currentTime
      console.log(currentTime)

      let alreadyUsedEvents = []
      this.videoEventsData.forEach(x => { //timeEvents was
        if (currentTime > x.on && currentTime < x.off) {
          document.querySelector(".video-wrapper").classList.add("blur-filter")
          console.log('on')
        } else if (currentTime > x.off && !alreadyUsedEvents.includes(x.id)) {
          alreadyUsedEvents.push(x.id)
          resetBCSClasses()
          console.log('off')
        }
      })
    })


    // очищает классы для обертки видео
    function cleanWrapperClasses() {
      let a = document.querySelector(".video-wrapper")
      a.className = ''
      a.classList.add("video-wrapper")
    }


    // установить яркость конрастность и насыщенность для видео
    function setBCS() {
      const note = document.querySelector('.video-stream');
      // Яркость Контраст Насыщенность
      let brightness = document.querySelector('.brightness').value //400
      let contrast = document.querySelector('.contrast').value //100
      let saturate = document.querySelector('.saturate').value //100
      note.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`;
    }


    // сбрасывает стили для видер
    function resetBCSStyle() {
      let a = video
      a.style = ""
      document.querySelector('.brightness').value = 100
      document.querySelector('.contrast').value = 100
      document.querySelector('.saturate').value = 100
    }

    // сбрасывает классы для видео
    function resetBCSClasses() {
      let a = document.querySelector(".video-stream")
      a.className = ''
      a.classList.add("video-stream")
    }

    document.querySelector(".btn-reset").addEventListener('click', event => {
      event.preventDefault()
      resetBCSClasses()
      resetBCSStyle()
      cleanWrapperClasses()
    })


    // устанавливает заданные параметры видео
    function setBCSValue(brightness, contrast, saturate) {
      document.querySelector('.brightness').value = brightness //400
      document.querySelector('.contrast').value = contrast //100
      document.querySelector('.saturate').value = saturate //100
      const note = document.querySelector('.video-stream');
      note.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`;
    }


  }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap') html, body;

.btn-reset {
  background-color: red;
}

.brightness-high-filter {
  filter: brightness(400%);
}

.black-white-filter {
  filter: grayscale(100%);
}

.invert-filter {
  filter: invert(100%);
}

.blur-filter {
  filter: blur(3px) brightness(30%) url(#filter-green);
}

@font-face {
  font-display: swap;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/ubuntu-v20-cyrillic_latin-regular.eot'); /* IE9 Compat Modes */
  src: url('../assets/fonts/ubuntu-v20-cyrillic_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../assets/fonts/ubuntu-v20-cyrillic_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */ url('../assets/fonts/ubuntu-v20-cyrillic_latin-regular.woff') format('woff'), /* Modern Browsers */ url('../assets/fonts/ubuntu-v20-cyrillic_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */ url('../assets/fonts/ubuntu-v20-cyrillic_latin-regular.svg#Ubuntu') format('svg'); /* Legacy iOS */
}

/** {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Ubuntu';
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #001424;
}

.container {
    padding: 10px;
    width: 60%;
}

.controls {
    margin-top: 44px;
}

.controls span {
    display: inline-block;
    cursor: pointer;
}

.video {
    position: relative;
}

.video__btn {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.progress_panel {
    display: flex;
    justify-content: space-between;
}

.progress {
    width: 88%;
    display: flex;
    align-items: center;
    --bs-progress-bg: rgba(0,0,0,0);
}

.point {
    cursor: pointer;
}

.total {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, .5);
    position: relative;
    border-radius: 1px;
    top: -4px;
}

.current {
    position: absolute;
    background:#fff;
    height: 4px;
    top: -1px;
    opacity: 1;
    border-radius: 1px;
}

.time {
    color:#999;
}

.currenttime {
    color: #fff;
}

.time__set {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
}

.button__panel {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
}

.center__panel {
    display: flex;
    gap: 10px;
}

.center__panel-block {
    position: relative;
}

.icon {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.back-up__panel {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.end__panel {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.br__co__wrapper {
  display: none;
}

.br__co {
  margin-top: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 30px;
}

.test {
  width: 150px;
  height: 4px;
}

.btn-reset {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: none;
  padding: 10px 20px;
  color: #fff;
}

.alica-text-wrapper {
  display: none;
}

.alica-text {
  display: flex;
  justify-content: center;
  margin-top: 21px;
}

.alica-text input {
  width: 445px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #FFFFFF;
  opacity: 0.4;
  outline: none;
  border: none;
  padding: 8px 16px;
}

@media (max-width: 1300px) {
    .controls {
        margin-top: 24px;
    }

    .progress {
        width: 84%;
    }

    .time__set {
        font-size: 13px;
        line-height: 20px;
    }
}

@media (max-width: 900px) {

    .container {
        width: 80%;
    }

    .progress {
        width: 80%;
    }
}

@media (max-width: 576px) {

    .progress {
        width: 75%;
    }
}

@media (max-width: 466px) {

    .progress {
        width: 65%;
    }
}

</style>