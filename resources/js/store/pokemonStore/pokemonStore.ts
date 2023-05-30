import { ActionTree, Module, MutationTree, Store } from 'vuex'
import { getPokemonList, getPokemonInfo, getPersonageData, getBreedDetails } from '../../services/api'
import type { PokemonState, RootState } from './types'

const state = (): PokemonState => ({
    pokemonList: [],
    pokemonData: {},
    pokemonBreedDetails: {},
    isLoading: false
})

const mutations: MutationTree<PokemonState> = {
    addDetailsPokemon(state: PokemonState, pokemonInfo) {
      state.pokemonList.push(pokemonInfo)
    },
    addDataOfBreed(state: PokemonState, pokemonData) {
      state.pokemonData = pokemonData
    },
    addBreedDetails(state: PokemonState, pokemonData) {
      state.pokemonBreedDetails = pokemonData
    },
    setIsLoading(state: PokemonState, loading: Boolean) {
        state.isLoading = loading
    }
}

const actions: ActionTree<PokemonState, RootState> = {
  async update_pokemon_list({ commit }) {
      commit('setIsLoading', true)
      try {
        const result = await getPokemonList()
        if (result.results.length) {
          result.results.forEach( async (item: any)  => {
            try {
              const resultInfo = await getPokemonInfo(item.url)
              commit('addDetailsPokemon', resultInfo)
            } catch {
              console.log('Falha ao atribuir URLs.');
            }
          })
        }
      } catch {
        console.log('Falha ao atribuir lista.');
      }
      commit('setIsLoading', false)
  },

  async update_pokemon_profile({ commit }, id: number) {  
    commit('setIsLoading', true)
    try {
      const resultData = await getPersonageData(id)
      if (resultData) {
        commit('addDataOfBreed', resultData)
        try {
          const resultBreedDetails = await getBreedDetails(id)
          commit('addBreedDetails', resultBreedDetails)
        } catch {
          console.log('Falha ao atribuir id de espécies.');
        }
      }
    } catch {
      console.log('Falha ao atribuir detalhes do pokemon escolhido.');
    }
    commit('setIsLoading', false)
  }
}

const namespaced: boolean = true

export const pokemonStore: Module<PokemonState, RootState> = {
    namespaced,
    state,
    actions,
    mutations
}
