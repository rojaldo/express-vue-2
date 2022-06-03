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

@Component(
  {
    components: {
      HeroesList,
      HeroesForm
    }
  }
)
export default class HeroesComponent extends Vue {

  @Prop() public msg!: string;
  public heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  addHero(hero: any) {
    this.heroes.push(hero);
  }

}
</script>

<style scoped>
</style>