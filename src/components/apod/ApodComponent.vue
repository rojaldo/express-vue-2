<template>
    <div class="container">
        <div class="jumbotron">
        <h1 class="display-3">{{apodData.title}}</h1>
        <p class="lead">{{apodData.date}}</p>
        <hr class="my-2">
        <img :src="apodData.url" :alt="apodData.title" class="img-fluid mb-3">
        <p>{{apodData.explanation}}</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" :href="apodData.hdurl" role="button">View Image</a>
        </p>
    </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ApodComponent extends Vue {
        apodData: any = {};
        mounted() {
            console.log('ApodComponent mounted');
            fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.apodData = data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
        beforeDestroy() {
            console.log('ApodComponent beforeDestroy')
        }
    }
</script>

<style scoped>

</style>