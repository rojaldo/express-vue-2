<template>
    <div>
        <beers-component></beers-component>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import BeersComponent from '../components/beers/BeersComponent.vue';

    @Component(
        {
            components: {
                BeersComponent
            }
        }
    )
    export default class BeersPage extends Vue {
        
    }
</script>

<style scoped>

</style>