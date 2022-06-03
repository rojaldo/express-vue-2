<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(hero, index) in myHeroes" :key="index">{{ hero }}</li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HeroesList extends Vue {
@Prop() public myHeroes!: string[];
}
</script>

<style scoped>
</style>