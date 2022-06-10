<template>
    <div>
        <div class="form-group">
            <label for="">Hero Name</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                v-model="name">
            <small id="helpId" class="form-text text-muted" v-if="name === ''">Introduce a hero name</small>
        </div>
        <div class="form-group">
            <label for="">Hero Description</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                v-model="hero.description">
            <small id="helpId" class="form-text text-muted" v-if="hero.description === ''">Introduce a hero name</small>
        </div>

        <button type="button" class="btn btn-primary mb-4" @click="addHero()" :disabled="name.length === 0">Add Hero
        </button>
    </div>
</template>

<script lang="ts">
import { Hero } from '@/models/Hero';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HeroesForm extends Vue {
    @Prop() public onAddHero!: Function;
    public hero = new Hero();
    public name = '';
    addHero() {
        this.hero.name = this.name;
        this.$emit('onAddHero', this.hero);
        this.hero = new Hero();
        this.name = '';
    }

}
</script>

<style scoped>
</style>