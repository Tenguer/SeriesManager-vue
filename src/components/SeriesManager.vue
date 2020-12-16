<template>
  <div class="container">
    <div><button @click="changeMode">Mode sombre</button></div>
    <h1 class="title is-1 has-text-centered">{{ name.title_h1 }}</h1>

    <FormSeries></FormSeries>

    <h2 class="title is-2">{{ name.title_h2 }}</h2>

    <button @click="resetList">{{ name.btn_reset }}</button>

    <List></List>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import List from '@/components/List.vue'
import FormSeries from '@/components/FormSeries.vue'

export default {
  name: 'SeriesManager',
  components: {
    List,
    FormSeries
  },
  data() {
    return {
      name: {
        title_h1: 'Gestionnaire de série en tout genre',
        title_h2: 'Liste des séries ajoutées',
        btn_reset: 'Reset'
      }
    }
  },
  created() {
    this.getLocalData()
  },
  methods: {
    ...mapActions('manager', ['getLocalData', 'resetList', 'changeMode'])
  }
}
</script>

<style lang="scss" scoped>
body {
  padding: 50px;
  background: #eee;
}
.title {
  padding: 0 20%;
  text-align: center;
}
.container {
  width: 100%;
  height: 100%;
  color: #000;
}
.container form {
  max-width: 60%;
  margin: 40px auto;
}
.container .list {
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.container .columns {
  border-bottom: 1px solid #ccc;
}
.container .columns:last-child {
  border-bottom: 0;
}
.current-eps {
  padding: 0 10px;
}
.input {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-width: 2px;
  border-color: #c8c8c8;
  box-shadow: none;
  background: none;
}
form button {
  display: block;
  width: 100%;
}
</style>
