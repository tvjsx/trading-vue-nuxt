<template>
<client-only>
    <trading-vue :data="tradingVue"
        :overlays="overlays"
        :extensions="ext"
        :legend-buttons="['display']">
    </trading-vue>
</client-only>
</template>

<script>
import Vue from 'vue'

// import SetupIndicator from '~/components/SetupIndicator';
// Importing manually will also throw `windows is not defined error`
// Using `components: true` in nuxt.config.js
// import TradingVue from 'trading-vue-js'
export default {
    name: 'app',
    // Importing manually will also throw `windows is not defined error`
    // Using `components: true` in nuxt.config.js
    // components: { TradingVue }
    computed: {
        ext() {
            // TODO: For some reason the injections are initially
            // 'undefined'
            return Object.values(this.$ChartExtensions || {})
        }
    },
    data() {
        return {
            // TODO: For some reason the injections are initially
            // 'undefined'
            tradingVue: this.$DataCube ? new this.$DataCube({
                chart: {
                    type: 'Candles',
                    data: [
                        [1551128400000, 33, 37.1, 14, 14, 196],
                        [1551132000000, 13.7, 30, 6.6, 30, 206],
                        [1551135600000, 29.9, 33, 21.3, 21.8, 74],
                        [1551139200000, 21.7, 25.9, 18, 24, 140],
                        [1551142800000, 24.1, 24.1, 24, 24.1, 29],
                    ]
                },
                onchart: [{
                    name: 'Setups',
                    type: 'Setups',
                    data: [
                        [1551128400000, 1, 35]
                    ],
                    settings: {},
                }, ],
            }) : {},
            overlays: [this.$SetupIndicator]
        }
    }
}
</script>
