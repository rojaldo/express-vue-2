<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(hero, index) in myHeroes" :key="index">
            <b>{{ hero.name }}</b>
            <br>
            <p>{{ hero.description }}</p>
            <button type="button" class="btn btn-danger" @click="removeHero(index)">Remove</button>
        </li>
    </ul>
</template>

<script lang="ts">
import { Hero } from '@/models/Hero';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HeroesList extends Vue {
    @Prop() public myHeroes!: Hero[];

    removeHero(index: number) {
        fetch('http://localhost:3000/api/v1/heroes/' + this.myHeroes[index].name, {
            method: 'DELETE'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    console.log(data);
                    this.myHeroes.splice(index, 1);
                })
            } else {
                console.error('Error deleting hero');
            }
        })
            ;

    }
}
</script>

<style scoped>
</style>

