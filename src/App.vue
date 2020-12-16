<template>
  <div id="app" :class="{ darkmode: darkMode }">
    <SeriesManager />
  </div>
</template>

<script>
import SeriesManager from '@/components/SeriesManager.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    SeriesManager
  },
  computed: {
    ...mapState('manager', ['darkMode'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
}

.darkmode {
  background: #000;
  color: white;
}
</style>
