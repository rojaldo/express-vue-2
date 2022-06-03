<template>
  <div class="home">
    <heroes-component msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HeroesComponent from '../components/heroes/HeroesComponent.vue';

  @Component(
    {
      components: {
        HeroesComponent
      }
    }
  )
  export default class HeroesPage extends Vue {
    
  }
</script>

<style scoped>

</style>

vbase