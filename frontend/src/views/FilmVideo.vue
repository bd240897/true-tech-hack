<template>
  <Navbar/>

  <h1 class="screen-name text-center text-white">FilmVideo</h1>

  <section class="first_screen">
    <div class="container">

      <svg style="display:none" xmlns="http://www.w3.org/2000/svg">
        <symbol id="pause">
          <path
              d="M37.8906 21.2557C39.2526 22.0198 39.2526 23.9802 37.8906 24.7443L2.9785 44.3291C1.64532 45.077 8.48698e-08 44.1135 1.53639e-07 42.5849L1.91578e-06 3.41515C1.98455e-06 1.88653 1.64532 0.922985 2.9785 1.67087L37.8906 21.2557Z"
              fill="white"/>
        </symbol>
      </svg>
      <div class="container">

        <div class="video">

          <!--          <div class="video-wrapper">-->
          <!--            <video id="myvideo" class="video-stream" width="100%" height="auto">-->
          <!--              <source controls="controls" src="http://91.185.84.82:8001/video" type="video/mp4"/>-->
          <!--            </video>-->
          <!--          </div>-->

          <div class="video-wrapper">
            <video id="myvideo" class="video-stream" width="100%" height="auto">
              <source controls="controls" src="http://localhost:8000/video/" type="video/mp4"/>
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
              <img src="../assets/img/video/back.png" alt="">
              <img src="../assets/img/video/up.png" alt="">
              <img src="../assets/img/video/volume.svg" alt="">
            </div>
            <div class="center__panel">
              <div class="center__panel-block">
                <svg class="circle" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                  <circle r="20px" cx="20px" cy="20px" fill="white" fill-opacity="0.25"/>
                </svg>
                <img class="icon" src="../assets/img/video/lighning/ligh.svg" alt="">
              </div>
              <div class="center__panel-block">
                <svg class="circle" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                  <circle r="20px" cx="20px" cy="20px" fill="white" fill-opacity="0.25"/>
                </svg>
                <img class="icon" src="../assets/img/video/sun/sun.svg" alt="">
              </div>
              <div class="center__panel-block">
                <svg class="circle" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                  <circle r="20px" cx="20px" cy="20px" fill="white" fill-opacity="0.25"/>
                </svg>
                <img class="icon" src="../assets/img/video/alice/alice.png" alt="">
              </div>
            </div>
            <div class="end__panel">
              <img src="../assets/img/video/12.png" alt="">
              <img src="../assets/img/video/settings.png" alt="">
              <img src="../assets/img/video/full.png" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="temp">
        <button type="button" id="play">Play</button>
        <button type="button" id="stop">Stop</button>
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
    ...mapState(['VIDEO_URL',]),
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


    // смена ссылки на видео
    let videoElement = document.getElementById('myvideo');
    videoElement.src = this.VIDEO_URL
    document.getElementById("myvideo").poster = "https://papik.pro/en/uploads/posts/2022-07/1658692788_34-papik-pro-p-pure-black-background-without-drawing-35.jpg";

    //////////////////////////////// player video ///////////////////////////////////////////////////////////
    let controls = {
      video: $("#myvideo"),
      total: $("#total"),
      buffered: $("#buffered"),
      progress: $("#current"),
      duration: $("#duration"),
      currentTime: $("#currenttime"),
      hasHours: false,

      togglePlayback: function () {
        (video.paused) ? video.play($('.video__btn').css('display', 'none'))
            : video.pause($('.video__btn').css('display', 'block'));
      }
    };

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
      cleanWrapperClasses()
      document.querySelector(".video-wrapper").classList.add("black-white-filter")
    })

    document.querySelector(".btn-2").addEventListener('click', event => {
      event.preventDefault()
      cleanWrapperClasses()
      document.querySelector(".video-wrapper").classList.add("brightness-high-filter")
    })

    document.querySelector('.div-BCS').addEventListener('click', event => {
      event.preventDefault()
      setBCS()
    })

    document.querySelector(".video-stream").addEventListener('timeupdate', event => {
      // event.preventDefault()
      const video = document.querySelector(".video-stream")
      let currentTime = video.currentTime
      console.log(currentTime)

      let alreadyUsedEvents = []
      this.videoEventsData.forEach(x => { //timeEvents was
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
      let a = document.querySelector(".video-stream")
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap') html, body

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
  width: 85%;
  display: flex;
  align-items: center;
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
  background: #fff;
  height: 4px;
  top: -1px;
  opacity: 1;
  border-radius: 1px;
}

.time {
  color: #999;
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

</style>