import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './types'
import { pokemonStore } from './pokemonStore'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
    modules: {
      pokemonStore
    }
})
