<template>
  <div class="list">
    <FilterButton></FilterButton>

    <div class="series">
      <div class="columns">
        <div class="column" v-for="column in columnName" :key="column">
          <strong>{{ column }}</strong>
        </div>
      </div>
    </div>

    <div class="series">
      <div class="series_list" v-if="filters.active === 'all'">
        <Serie
          v-for="serie in seriesList"
          :key="serie.id"
          :serie="serie"
        ></Serie>
      </div>
      <div class="series_list" v-else>
        <Serie
          v-for="serie in filterList"
          :key="serie.id"
          :serie="serie"
        ></Serie>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import FilterButton from '@/components/FilterButton.vue'
import Serie from '@/components/Serie.vue'

export default {
  name: 'List',
  data() {
    return {
      columnName: [
        'Type',
        'Titre',
        'Episodes en cours',
        'Episodes',
        "Nombre total d'épisodes"
      ]
    }
  },
  components: {
    FilterButton,
    Serie
  },
  computed: {
    ...mapState('manager', ['seriesList', 'filters']),
    ...mapGetters('manager', ['filterList'])
  }
}
</script>
