<template>

    <div class="container">
        <vue-range-slider ref="slider" v-model="value"></vue-range-slider>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="(beer, index) in showBeers" :key="index">
                <div class="card h-100">
                    <img class="card-img-top mx-auto mt-2" :src="beer.image_url" alt="" style="width: 40px">
                    <div class="card-body">
                        <h4 class="card-title">{{ beer.name }}</h4>
                        <p class="card-text">{{ beer.tagline }}</p>
                        <p class="card-text">{{ beer.abv }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import 'vue-range-component/dist/vue-range-slider.css';
import VueRangeSlider from 'vue-range-component';

@Component({
    components: {
        VueRangeSlider
    }
})
export default class BeersComponent extends Vue {
    beers: any = [];
    showBeers: any = [];
    value = [5, 10]
    @Watch('value')
    valueChanged(currentValue: number[], previousValue: number[]) {
        console.log(currentValue, previousValue);
        this.filterBeers()

    }

    mounted() {
        console.log('BeersComponent mounted');
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.beers = data;
                this.showBeers = data;
                this.filterBeers();
            });
    }

    filterBeers() {
        this.showBeers = this.beers
        .filter((beer: any) => beer.abv >= this.value[0] && beer.abv <= this.value[1])
        .sort((a: any, b: any) => a.abv - b.abv);
    }
}
</script>

<style scoped>
</style>