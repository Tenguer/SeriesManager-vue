<template lang="html">
  <div class="field has-addons filters">
    <p class="control">
      <a
        class="button"
        @click="showFilters(filter)"
        v-for="filter in filters.list"
        :key="filter.id"
      >
        <span>{{ filter }}</span>
      </a>
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'FilterButton',
  computed: {
    ...mapState('manager', ['filters'])
  },
  methods: {
    ...mapActions('manager', ['showFilters'])
  }
}
</script>

<style lang="scss"></style>
