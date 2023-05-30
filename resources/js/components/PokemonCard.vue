<template>
  <div class="pokecard" @click="goPokemonProfile(data.id)">
    <div class="pokecard__wrapper" :class="getFirstType()">
      <div class="pokecard__title">
        <p>#{{ `${data.id}`.padStart(3, '0') }}</p>
      </div>
      <div class="pokecard__content">
        <div class="pokecard__name">
          <h3 :class="`${getFirstType()}-text`">{{ data.name }}</h3>
        </div>
        <div class="pokecard__type-icons">
          <img v-for="poketype in getTypes()" :key="poketype" :src="`images/types/${poketype}.svg`" :alt="poketype" :title="poketype">
        </div>
        <div class="pokecard__avatar">
          <img :src="data.sprites.other['official-artwork'].front_default" :alt="data.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'PokemonList',
    props: {
      data: {
        type: Object,
        default: {}
      }
    },
    methods: {
      getFirstType() {
        return this.data?.types?.[0].type.name
      },
      getTypes() {
        return this.data?.types?.map((item: any) => item.type.name)
      },
      goPokemonProfile(id: string) {
        window.location.href = `/breeds/${id}`
      }
    }
  })
</script>

<style lang="scss" scoped>

.pokecard {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  @media (min-width: 859px) {
    height: 156px;
  }
  &__wrapper {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    cursor: pointer;
    @media (min-width: 859px) {
      height: 95px;
    }
  }
  &__title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 25px;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 450;
    line-height: 21px;
    @media (min-width: 859px) {
      justify-content: flex-end;
      padding-right: 5px;
    }
  }
  &__content {
    background-color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding-left: 10px;
    box-sizing: border-box;
    @media (min-width: 859px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      height: 60px;
    }
  }
  &__name {
    width: 142px;
    font-size: 18px;
    font-weight: 600;
    @media (min-width: 859px) {
      font-weight: 450;
    }
  }
  &__type-icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18px;
    gap: 10px;
    @media (min-width: 859px) {
      gap: 5px;
    }
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  &__avatar {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      max-width: 100%;
    }
    @media (min-width: 859px) {
      left: 50px;
    }
  }
}
</style>