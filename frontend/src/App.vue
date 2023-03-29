<template>
<!--  <div class="header">-->
<!--    <Navbar class="a"/>-->
<!--  </div>-->

  <div class="content">
    <router-view class="b"/>
  </div>

<!--  <div class="footer">-->
<!--    <Footer class="c"/>-->
<!--  </div>-->
</template>

<style>

html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #001424;
}

.header {
  flex: 0 0 auto;
}

.content {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}

</style>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  created() {
  }
}
</script>

