<template>
  <div class="columns">
    <div class="column">{{ serie.type }}</div>
    <div class="column">{{ serie.title }}</div>
    <div class="column">
      <span class="current-eps">{{ serie.seen }}</span>
      <button class="plus button" @click="plusFonction(serie)">
        {{ plus }}
      </button>
      <button class="minus button" @click="minusFonction(serie)">
        {{ minus }}
      </button>
    </div>
    <div class="column">{{ serie.total }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Serie',
  data() {
    return {
      plus: '+',
      minus: '-'
    }
  },
  props: {
    serie: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('manager', ['plusFonction', 'minusFonction'])
  }
}
</script>
