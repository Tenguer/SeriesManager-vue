export const namespaced = true

export const state = {
  localStorageName: 'my-series_manager',
  // Liste de toutes les séries
  seriesList: [],
  // Liste de filtres
  filters: {
    active: 'all',
    list: ['all']
  },
  // Etat des erreurs
  error: {
    type: true,
    title: true,
    seen: true,
    total: true
  },
  form_list: [
    {
      id: 0,
      label: { value: 'type', text: 'Type', exist: true },
      input: { type: 'text', num: 1 },
      error: { id: 0, value: 'Entrer le type de série !', num: 1 }
    },
    {
      id: 1,
      label: { value: 'title', text: 'Titre', exist: true },
      input: { type: 'text', num: 1 },
      error: { id: 0, text: 'Entrer le nom de la série !', num: 1 }
    },
    {
      id: 2,
      label: { value: 'seen', text: "Nombre d'épisodes vu", exist: true },
      input: { type: 'text', num: 1 },
      error: { id: 0, text: "Entrer le nombre d'épisodes vu !", num: 1 }
    },
    {
      id: 3,
      label: {
        value: 'total',
        text: "Nombre d'épisode total",
        exist: true
      },
      input: { type: 'text', num: 1 },
      error: {
        id: 0,
        text: [
          "Entrer le nombre d'épisodes vu !",
          "Entrer le nombre d'épisodes total à voire !"
        ],
        num: 1
      }
    }
  ],
  darkMode: false
}

export const mutations = {
  ADD_SERIES_LIST(state, list) {
    state.seriesList = list
    console.log('ADD_SERRIES_LIST : ', state.seriesList)
  },
  ADD_FILTER(state, filter) {
    state.filters.list.push(filter)
  },
  ADD_NEW_SERIE(state, newSerie) {
    state.seriesList.push(newSerie)
    console.log('Add serie: ', state.seriesList)
  },
  RESET_LIST(state) {
    state.seriesList = []
    state.filters.list = ['all']
    state.filters.active = 'all'
  },
  NEW_FILTER_ACTIVE(state, active) {
    state.filters.active = active
  },
  PLUS_SERIE(state, index) {
    state.seriesList[index].seen++
  },
  MINUS_SERIE(state, index) {
    state.seriesList[index].seen--
  },
  CHANGE_BACKGROUND_MODE(state) {
    state.darkMode = !state.darkMode
  }
}

export const actions = {
  // Récupère du localStorage la liste de séries
  getLocalData({ commit, dispatch }) {
    var data = localStorage.getItem(state.localStorageName)

    if (data) {
      commit('ADD_SERIES_LIST', JSON.parse(data))
    } else {
      commit('ADD_SERIES_LIST', [])
    }

    if (state.seriesList.length) {
      dispatch('getLocalFilter')
    }
  },
  // Récupère les filtres du localStorage
  getLocalFilter({ commit }) {
    for (var i = 0; i < state.seriesList.length; i++) {
      var newfilter = state.filters.list.indexOf(state.seriesList[i].type)

      if (newfilter === -1) {
        commit('ADD_FILTER', state.seriesList[i].type)
      }
    }
  },
  // Ajoute à la liste de séries la nouvelle série
  addNewSeries({ commit, dispatch }, newSerie) {
    commit('ADD_NEW_SERIE', newSerie)
    commit('ADD_FILTER', newSerie.type)
    dispatch('saveSeries')
  },
  // Sauvegarde la liste de séries dans le localstorage
  saveSeries() {
    var data = JSON.stringify(state.seriesList)

    localStorage.setItem(state.localStorageName, data)
  },
  // Renitialise la liste de series, les filtres et supprime du localstorage
  resetList({ commit }) {
    commit('RESET_LIST')

    localStorage.removeItem(state.localStorageName)
  },
  showFilters({ commit }, filter) {
    if (filter) {
      commit('NEW_FILTER_ACTIVE', filter)
    }
  },
  plusFonction({ commit, dispatch, getters }, newSerie) {
    if (newSerie.seen < newSerie.total) {
      commit('PLUS_SERIE', getters.getSerieIndex(newSerie.id))
      dispatch('saveSeries')
    }
  },
  minusFonction({ commit, dispatch, getters }, newSerie) {
    if (newSerie.seen > 0) {
      commit('MINUS_SERIE', getters.getSerieIndex(newSerie.id))
      dispatch('saveSeries')
    }
  },
  changeMode({ commit }) {
    commit('CHANGE_BACKGROUND_MODE')
  }
}

export const getters = {
  filterList() {
    return state.seriesList.filter(serie => serie.type === state.filters.active)
  },
  getSerieIndex: state => id => {
    return state.seriesList.findIndex(elem => elem.id === id)
  }
}
