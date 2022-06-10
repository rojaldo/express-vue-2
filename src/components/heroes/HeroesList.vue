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
    @Prop() public onRemoveHero!: Function;

    removeHero(index: number) {
        // send hero name in path to server
        fetch('http://localhost:3000/api/v1/heroes/' + this.myHeroes[index].name, {
            method: 'DELETE'
        }).then(response => {
            if(response.status === 200) {
                this.$emit('onRemoveHero', index);
            }
            return response.json()})
            .then(data => {
                console.log(data);
                
                
            });
    }
}
</script>

<style scoped>
</style>

