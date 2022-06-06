<template>
    <div>
        <ApodComponent />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ApodComponent from '../components/apod/ApodComponent.vue';

    @Component(
        {
            components: {
                ApodComponent
            }
        }
    )
    export default class ApodPage extends Vue {
        
    }
</script>

<style scoped>

</style>