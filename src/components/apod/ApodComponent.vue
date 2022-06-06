<template>
    <div class="container">
        <div class="container-fluid d-flex mb-3">
            <b-calendar class="mx-auto" locale="en-US" calendarLocale="en-US" v-model="date"></b-calendar>
        </div>
        <div class="jumbotron">
            <h1 class="display-3">{{ apodData.title }}</h1>
            <p class="lead">{{ apodData.date }}</p>
            <hr class="my-2">
            <img :src="apodData.url" :alt="apodData.title" class="img-fluid mb-3"
                v-if="apodData.media_type === 'image'">
            <div class="container-fluid d-flex" v-if="apodData.media_type === 'video'">
                <iframe class="mx-auto" width="560" height="315" :src="apodData.url" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <p>{{ apodData.explanation }}</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" :href="apodData.hdurl" role="button">View Image</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class ApodComponent extends Vue {
    apodData: any = {};
    date = '';

    @Watch('date')
    dateChanged(currentDate: string, previousDate: string) {
        if (currentDate !== previousDate) {
            this.getApod(currentDate);
        }
    }

    mounted() {
        console.log('ApodComponent mounted');
        this.getApod()
    }
    beforeDestroy() {
        console.log('ApodComponent beforeDestroy')
    }

    getApod(date = '') {
        let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        if (date !== '') {
            url += '&date=' + date;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.apodData = data;
            })
            .catch(error => console.error(error));
    }

}
</script>

<style scoped>
</style>