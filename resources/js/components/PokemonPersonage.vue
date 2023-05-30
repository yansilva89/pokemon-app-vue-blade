<template>
  <div class="pokemon-personage">
    <img class="pokemon-personage__image" :src="data.avatar" :alt="data.name">
    <div class="pokemon-personage__box-title">
      <h1 class="pokemon-personage__title">#{{ `${data.id}`.padStart(3, '0') }} {{ capitalizedName(data.name) }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'PokemonPersonage',
    props: {
      data: {
        type: Object,
        default: {}
      }
    },
    methods: {
      capitalizedName(name: string) {
        if (!name) return ''
        return name.charAt(0).toUpperCase() + name.slice(1)
      }
    }
  })
</script>

<style lang="scss" scoped>
.pokemon-personage {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 258px;
  background-image: url('../../images/bg-mobile-layer-one.png'), url('../../images/bg-mobile-layer-two.png');
  background-position: center bottom, center bottom;
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  @media (min-width: 859px) {
    position: static;
    width: 420px;
    height: 600px;
    margin-top: 123px;
  }
  &__image {
    width: 200px;
    height: 195.58px;
    @media (min-width: 859px) {
      width: 362px;
      height: 354px;
    }
  }
  &__box-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 58px;
    @media (min-width: 859px) {
      width: 418px;
      margin-top: 15px;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 30px;
    @media (min-width: 859px) {
      font-size: 45px; 
    }
    line-height: 10px;
  }
}
</style>