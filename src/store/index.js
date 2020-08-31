import Vue from 'vue'
import Vuex from 'vuex'
import { arrayListMusic } from '../.firebase/firebaseFunctions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    songs: [],
    indice: 0,
    statePlayOrPause: true,
    mutedAudio: false,
    audio: new Audio(),
    volume: 0.5,
    listOrAdd: true,
  },

  getters: {
    songWithIndice(state) {
      return state.songs[state.indice]
    },
  },

  mutations: {
    loadSongs(state, listSongs) {
      state.songs = listSongs
      state.audio = new Audio(state.songs[state.indice].url)
      state.audio.volume = state.volume
      state.audio.addEventListener('ended', () => store.commit('next'))
    },
    playOrPause(state) {
      if (state.audio.paused) {
        state.audio.play()
        state.statePlayOrPause = false
      } else {
        state.audio.pause()
        state.statePlayOrPause = true
      }
    },
    next(state) {
      if (state.songs.length - 1 > state.indice) {
        store.commit('selectSong', state.indice + 1)
      }
    },
    back(state) {
      if (state.indice !== 0) {
        store.commit('selectSong', state.indice - 1)
      }
    },
    muted(state) {
      state.audio.muted = !state.audio.muted
      state.mutedAudio = state.audio.muted
    },
    reduceVolume(state) {
      if (state.volume >= 0.1) {
        state.volume -= 0.1
        state.audio.volume = state.volume
      }
    },
    upVolume(state) {
      if (state.volume <= 0.9) {
        state.volume += 0.1
        state.audio.volume = state.volume
      }
    },
    selectSong(state, index) {
      state.indice = index
      state.audio.pause()
      state.audio = new Audio(state.songs[state.indice].url)
      state.audio.volume = state.volume
      state.audio.autoplay = true
      state.audio.muted = state.mutedAudio
      state.statePlayOrPause = false
      state.audio.addEventListener('ended', () => store.commit('next'))
    },
    changeListOrAdd(state) {
      state.listOrAdd = !state.listOrAdd
    },
  },
  actions: {
    async getSongs({ commit }) {
      commit('loadSongs', await arrayListMusic())
    },
  },
})

export default store
