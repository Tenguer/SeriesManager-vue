<template lang="html">
  <form @submit.prevent="addNewSeries">
    <InputForm
      v-for="inputValue in form_list"
      :key="inputValue.id"
      :inputValue="inputValue"
      :newSerie="newSerie"
    >
    </InputForm>

    <div class="field">
      <p class="control">
        <button class="button is-success">Ajouter</button>
      </p>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import InputForm from '@/components/InputForm.vue'

export default {
  name: 'FormSeries',
  components: {
    InputForm
  },
  data() {
    return {
      newSerie: this.new_serie()
    }
  },
  computed: {
    ...mapState('manager', ['form_list'])
  },
  methods: {
    new_serie() {
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        type: '',
        title: '',
        seen: 0,
        total: 0
      }
    },
    addNewSeries() {
      this.$store.dispatch('manager/addNewSeries', this.newSerie)
      this.newSerie = this.new_serie()
    }
  }
}
</script>

<style lang="scss">
.error {
  color: red;
  font-weight: bold;
  text-decoration: underline;
  font-size: 20px;
}
</style>
