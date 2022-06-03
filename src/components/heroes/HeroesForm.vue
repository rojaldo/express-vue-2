<template>
    <div>
        <div class="form-group">
            <label for="">Hero Name</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="heroName">
            <small id="helpId" class="form-text text-muted" v-if="heroName === ''">Introduce a hero name</small>
        </div>
        <button type="button" class="btn btn-primary mb-4" @click="addHero()" :disabled="heroName === ''">Add Hero
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HeroesForm extends Vue {
    @Prop() public onAddHero!: Function;
    public heroName = '';
    addHero() {
        this.$emit('onAddHero', this.heroName);
        this.heroName = '';
    }

}
</script>

<style scoped>
</style>