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

  public heroes: Hero[] = [];

  addHero(hero: Hero) {
    // this.heroes.push(hero);
    fetch('http://localhost:3000/api/v1/heroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hero.toJson())
    }
    ).then(response => response.json())
      .then(data => {
        this.heroes = data;
      });
  }

  mounted() {
    fetch('http://localhost:3000/api/v1/heroes')
      .then(response => response.json())
      .then(data => {
        this.heroes = data;
      });
  }

}
</script>

<style scoped>
</style>