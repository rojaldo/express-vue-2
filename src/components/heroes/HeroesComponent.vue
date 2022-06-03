<template>
  <div class="container">
    <heroes-form @onAddHero="addHero($event)" />
    <heroes-list :myHeroes="heroes"></heroes-list>
  </div>

</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HeroesList from './HeroesList.vue';
import HeroesForm from './HeroesForm.vue';
import { Hero } from '@/models/Hero';

@Component(
  {
    components: {
      HeroesList,
      HeroesForm
    }
  }
)
export default class HeroesComponent extends Vue {

  public heroes = [
    new Hero('Windstorm', 'Stormy hero'),
    new Hero('Bombasto', 'Bombastic hero'),
    new Hero('Magneta', 'Magnetic hero'),
    new Hero('Tornado', 'Tornadic hero')];

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

}
</script>

<style scoped>
</style>