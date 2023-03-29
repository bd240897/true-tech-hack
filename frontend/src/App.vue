<template>
  <div class="content">
    <router-view/>
  </div>
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

.content {
  flex: 1 0 auto;
}

</style>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
  }
}
</script>

