import Vue from 'vue'
import TradingVue from 'trading-vue-js'
import SetupIndicator from '~/components/SetupIndicator';
import ChartOverlays from 'tvjs-overlays'
import ChartExtensions from 'tvjs-xp'
import { DataCube } from 'trading-vue-js'


Vue.use(TradingVue)

export default ({ app }, inject) => {
    inject('SetupIndicator', SetupIndicator)
    inject('ChartExtensions', ChartExtensions)
    inject('ChartOverlays', ChartOverlays)
    inject('DataCube', DataCube)
}
