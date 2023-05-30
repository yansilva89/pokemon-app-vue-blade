<template>
  <div class="pokemon-container">
    <div class="float-scroll">
      <div class="float-scroll__icon">
        <img src="images/icons/scroll.png" alt="Scroll" title="Scrolling Page">
      </div>
    </div>
    <div class="pokemon-container__filters">
      <div class="pokemon-container__input">
        <input v-model="filter.name" type="text" placeholder="Search">
        <div class="pokemon-container__icon-filter">
          <img src="images/icons/search.svg" alt="Search Item">
        </div>
      </div>
      <div class="pokemon-container__select">
        <select v-model="filter.type">
          <option value="">Show All</option>
          <option v-for="(poketype, index) in types" :key="index" :value="poketype[0]">{{ poketype[1] }}</option>        
        </select>
        <div class="pokemon-container__icon-filter">
          <img src="images/icons/dropdown.svg" alt="Select Dropdown">
        </div>
      </div>
    </div>
    <div v-if="$store.state.pokemonStore.isLoading">
      <h2>Carregando...</h2>
    </div>
    <div class="pokemon-container__list">    
      <PokemonCard v-for="pokemon in pokeList" :key="pokemon.id" :data="pokemon" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import PokemonCard from './PokemonCard.vue';

  export default Vue.extend({
    name: 'PokemonList',
    components: {
      PokemonCard
    },
    data () {
      return {
        filter: {
          name: '',
          type: ''
        },
        types: [
          ['normal', 'Normal'],
          ['fire', 'Fire'],
          ['fighting', 'Fighting'],
          ['water', 'Water'],
          ['grass', 'Grass'],
          ['poison', 'Poison'],
          ['electric', 'Electric'],
          ['ground', 'Ground'],
          ['rock', 'Rock'],
          ['bug', 'Bug'],
          ['dragon', 'Dragon'],
          ['ghost', 'Ghost'],
          ['dark', 'Dark'],
          ['fairy', 'Fairy'],
          ['steel', 'Steel'],
          ['psychic', 'Psychic'],
          ['ice', 'Ice'],
          ['flying', 'Flying']
        ]
      }
    },
    computed: {
      pokeList() {
        // Pokemons List State
        let list = this.$store.state.pokemonStore.pokemonList 

        list = list.filter((pokemon: any) => {
          const inputField = (this.filter.name || '').trim()

          if (inputField.length > 0) {
            // Skip if name or id not found
            if (!pokemon.name.includes(inputField) && !`${pokemon.id}`.includes(inputField)) {
              return false
            }
          }
          // Item types not found - Remove all items without selected types
          if (this.filter.type && !pokemon.types.map((item: any) => item.type.name).includes(this.filter.type)) {
            return false
          }
          // Return all
          return true
        })

        // Order List Pokemons
        list.sort((a: { order: number; }, b: { order: number; }) => { 
          if (a.order < b.order) return -1 
          if (a.order > b.order) return 1 
          return 0
        })
        return list
      }
    },
    mounted() {
      this.$store.dispatch('pokemonStore/update_pokemon_list')
    }
  })
</script>

<style lang="scss" scoped>
.pokemon-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  &__filters {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    @media (min-width: 859px) {
      flex-direction: row;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
  }
  // Defaults
  input, select {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #CCCCCC;
    border-radius: 100px;
    padding: 0 12px;
    outline: none;
    &:focus-visible {
      outline: none;
    }
  }
  &__input, &__select {
    position: relative;
    width: 280px;
    height: 30px;
    @media (min-width: 859px) {
      width: 200px;
    }
  }
  &__icon-filter {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      height: 100%;
      margin-right: 8px;
      pointer-events: none;
      img {
        max-width: 100%;
      }
    }
  &__input {
    margin: 0 0 15px 0;
    input {
      &::placeholder {
        color: #CCCCCC;
      }
    }
    @media (min-width: 859px) {
      margin: 0 20px 0 0;
    }
  }
  &__select {
    select {
      color: #CCCCCC;
      cursor: pointer;
      appearance: none;
    }
  }
  &__list {
    width: 100%;
    height: 470px;
    display: flex;
    flex-direction: column;
    @media (min-width: 859px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      height: 570px;
    }
    overflow: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
  }
}
.float-scroll {
  display: flex;
  justify-content: flex-end;
  @media (min-width: 859px) {
    justify-content: center;
  }
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 20px;
  z-index: 19;
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
    background-color: rgb(44 44 45 / 90%);
  }
  img {
    width: 30px;
  }
}
</style>