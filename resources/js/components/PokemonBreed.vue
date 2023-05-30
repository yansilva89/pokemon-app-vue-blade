<template>
  <div class="pokemon-breed-container">
    <PokemonPersonage :data="pokeData" />
    <PokemonDetails :data="pokeData" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PokemonPersonage from './PokemonPersonage.vue';
import PokemonDetails from './PokemonDetails.vue';

  export default Vue.extend({
    name: 'PokemonBreed',
    components: {
      PokemonPersonage,
      PokemonDetails
    },
    data () {
      return {
        id: ''
      }
    },  
    computed: {
      pokeData() {
        const details = this.$store.state.pokemonStore.pokemonData
        const description = this.$store.state.pokemonStore.pokemonBreedDetails
        const pokemonBreed = {
          avatar: details?.sprites?.other.dream_world.front_default || null,
          id: details?.id,
          name: details?.name,
          description: description?.flavor_text_entries?.filter((text:any) => text.language.name === 'en')?.map((text: any) => text.flavor_text)[6],
          types: details?.types,
          stats: details?.stats?.map((stat: any) => ({ name: stat.stat.name, base: stat.base_stat }))
        }
        return pokemonBreed
      }
    },
    methods: {
      getUrlId() {
        const url = window.location.pathname
        const urlId = url.split('/').pop()
        this.id = urlId || ''
      }
    },
    mounted() {
      this.getUrlId()
      this.$store.dispatch('pokemonStore/update_pokemon_profile', this.id)
    }
  })
</script>

<style lang="scss" scoped>
.pokemon-breed-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
  @media (min-width: 859px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 13px;
  }
}
</style>