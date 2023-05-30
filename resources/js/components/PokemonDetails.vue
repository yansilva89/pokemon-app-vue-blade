<template>
  <div class="pokemon-details">
    <div class="pokemon-details__box-title">
      <h2 class="pokemon-details__title">Descrição</h2>
    </div>
    <div class="pokemon-details__border" :class="getFirstType()"></div>
    <div class="pokemon-details__box-description">
      <p class="pokemon-details__description">{{ data.description }}</p>
    </div>
    <div class="box-types">
      <div v-for="poketype in getTypes" :key="poketype" class="box-types__type">
        <img :src="`/images/types/${poketype}.svg`" :alt="poketype" :title="poketype" class="box-types__img">
        <p class="box-types__name">{{ capitalizedName(poketype) }}</p>
      </div>
    </div>
    <div class="pokemon-details__box-title">
      <h2 class="pokemon-details__title">Estatistica</h2>
    </div>
    <div class="pokemon-details__border" :class="getFirstType()"></div>
    <div class="stats-list">
      <div v-for="stat in data.stats" :key="stat.name" class="stats-list__box">
      <div class="stats-list__box-acronym">
        <h3 class="stats-list__acronym">{{ getSimpleStatName(stat.name) }}</h3>
      </div>
      <div class="stats-list__progress-bar">
        <div class="stats-list__progress" :class="getFirstType()" :style="{width: stat.base < 100 ? `${stat.base}%` : '100%'}"></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'PokemonDetails',
    props: {
      data: {
        type: Object,
        default: {}
      }
    },
    computed: {
      getTypes() {
        return this.data?.types?.map((item: any) => item.type.name)
      }
    },
    methods: {
      getFirstType() {
        return this.data?.types?.[0].type.name
      },
      capitalizedName(name: string) {
        if (!name) return ''
        return name.charAt(0).toUpperCase() + name.slice(1)
      },
      getSimpleStatName(name: string) {
        return {
          hp: 'HP',
          attack: 'ATK',
          defense: 'DEF',
          'special-attack': 'SpP',
          'special-defense': 'SpD',
          speed: 'spd'
        }[name]
      }
    }
  })
</script>

<style lang="scss" scoped>
.pokemon-details {
  position: absolute;
  top: 268px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
  padding-top: 20px;
  background-color: #2C2C2D;
  @media (min-width: 859px) {
    position: static;
    width: 420px;
    box-shadow: 0px 0px 10px #000000;
    border-radius: 4px;
  }
  &__box-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-top: 20px;
    @media (min-width: 859px) {
      width: 420px;
      margin-top: 0;
    }
  }
  &__border {
    width: 100%;
    height: 2px;
  }
  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 10px;
  }
  &__box-description {
    width: 280px;
    height: 96px;
    margin-top: 10.88px;
    margin-bottom: 20px;
    @media (min-width: 859px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  &__description {
    font-weight: 450;
    font-size: 14px;
    text-align: center;
    line-height: 15px;
  }
}
.box-types {
  display: flex;
  justify-content: center;
  width: 257.25px;
  height: 47.14px;
  margin-bottom: 20.86px;
  &__type {
    display: flex;
    align-items: center;
    width: 50%;
    @media (min-width: 859px) {
    }
  }
  &__img {
    width: 52.5px;
  }
  &__name {
    margin-left: 11px;
    font-weight: 450;
    font-size: 14px;
    line-height: 15px;
  }
}
.stats-list {
  width: 280px;
  height: 205px;
  margin-top: 32.88px;
  margin-bottom: 17px;
  @media (min-width: 859px) {
    width: 100%;
    margin-bottom: 0;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    @media (min-width: 859px) {
      // justify-content: flex-start;
      padding-right: 15.75px;
    }
  }
  &__box-acronym {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50.91px;
    @media (min-width: 859px) {
      width: 73.5px;
    }
    height: 20px;
  }
  &__acronym {
    font-weight: 700;
    font-size: 20px;
    line-height: 10px;
  }
  &__progress-bar {
  position: relative;
  width: 218.18px;
  @media (min-width: 859px) {
    width: 315px;
  }
  height: 20px;
  background-color: #e6e6e6;
  border-radius: 10px;
  }
  &__progress {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
}
</style>