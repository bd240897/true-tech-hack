<script>
export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close');
    },
    setPreset(x) {


      console.log(x)
      const note = document.querySelector('.video-stream');

      if (x === "clear") {
        note.style.filter = ""
      } else {
        note.style.filter = `url(#${x})`
      }
      this.close()
    }
  }
};
</script>

<template>
  <transition name="modal-fade-v2">
    <div class="modal-backdrop-v2">

      <section class="presets h-100">
        <div class="presets h-100 d-flex align-items-center justify-content-center">
          <div class="w-50">

            <div class="p-3" style="background-color: dimgrey; border-radius: 10px;">
              <h1 class="text-center text-white">Выберите пресет</h1>
              <div class="container ">
                <div class="row">

                  <div class="col-6 p-3">
                    <div class="preset-element" v-on:click="setPreset('filter1')">
                      <img style="width: 100%; height: auto"
                           src="https://elements-cover-images-0.imgix.net/168979b9-9d8d-4d9e-a1fc-29af8831c9cb?auto=compress%2Cformat&fit=max&w=1170&s=e2b12e1f43f6027f459fe23b4e94cd83"
                           alt="">
                    </div>
                  </div>

                  <div class="col-6 p-3">
                    <div class="preset-element" v-on:click="setPreset('filter2')">
                      <img style="width: 100%; height: auto"
                           src="https://elements-cover-images-0.imgix.net/168979b9-9d8d-4d9e-a1fc-29af8831c9cb?auto=compress%2Cformat&fit=max&w=1170&s=e2b12e1f43f6027f459fe23b4e94cd83"
                           alt="">
                    </div>
                  </div>

                  <div class="col-6 p-3">
                    <div class="preset-element" v-on:click="setPreset('filter3')">
                      <img style="width: 100%; height: auto"
                           src="https://elements-cover-images-0.imgix.net/168979b9-9d8d-4d9e-a1fc-29af8831c9cb?auto=compress%2Cformat&fit=max&w=1170&s=e2b12e1f43f6027f459fe23b4e94cd83"
                           alt="">
                    </div>
                  </div>

                  <div class="col-6 p-3">
                    <div class="preset-element" v-on:click="setPreset('filter4')">
                      <img style="width: 100%; height: auto"
                           src="https://elements-cover-images-0.imgix.net/168979b9-9d8d-4d9e-a1fc-29af8831c9cb?auto=compress%2Cformat&fit=max&w=1170&s=e2b12e1f43f6027f459fe23b4e94cd83"
                           alt="">
                    </div>
                  </div>

                  <div class="col-12 p-3">
                    <div class="preset-element text-center text-white bg-primary" v-on:click="setPreset('clear')">
                      Сбросить все пресеты
                    </div>
                  </div>
                </div>

              </div>

              <div class="d-grid gap-2">
                <button
                    type="button"
                    class="btn  btn-success"
                    @click="close"
                    aria-label="Close modal"
                >
                  Закрыть окно
                </button>
              </div>
            </div>
          </div>

        </div>

        <svg>
          <filter id="filter1">
            <feTurbulence id="turbulence" type="turbulence" numOctaves="1" result="NOISE"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50"></feDisplacementMap>
            <animate xlink:href="#turbulence" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
                     values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite"></animate>
          </filter>

          <filter id="filter2">
            <feColorMatrix in="SourceGraphic" type="hueRotate" values="60"/>
          </filter>


          <filter id="filter3" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
            <feColorMatrix type="saturate" values="0.7" x="0%" y="0%" width="100%" height="100%" in="image"
                           result="colormatrix"/>
            <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
              <feFuncR type="linear" slope="1.2" intercept="0"/>
              <feFuncG type="linear" slope="1.3" intercept="0"/>
              <feFuncB type="linear" slope="0.9" intercept="0"/>
              <feFuncA type="linear" slope="1" intercept="0"/>
            </feComponentTransfer>
          </filter>

          <filter id="filter4" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
            <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="image2" result="componentTransfer2">
              <feFuncR type="linear" slope="1.3" intercept="0"/>
              <feFuncG type="linear" slope="1.1" intercept="0"/>
              <feFuncB type="linear" slope="1" intercept="0"/>
              <feFuncA type="linear" slope="1" intercept="0"/>
            </feComponentTransfer>
            <feColorMatrix type="saturate" values="1.3" x="0%" y="0%" width="100%" height="100%" in="componentTransfer2"
                           result="colormatrix1"/>
          </filter>
        </svg>

      </section>

    </div>
  </transition>

</template>

<style>

.preset-element img {
  border-radius: 10px;
}

.preset-element {
  border-radius: 10px;
}

.preset-element:hover {
  border: 2px solid red;
  cursor: pointer;
  border-radius: 10px;
}

.modal-backdrop-v2 {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-v2 {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  z-index: 999;
}

.modal-header-v2,
.modal-footer-v2 {
  padding: 15px;
  display: flex;
}

.modal-header-v2 {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer-v2 {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body-v2 {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>
