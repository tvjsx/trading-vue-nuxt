import { Overlay } from 'trading-vue-js'

export default {
    mixins: [Overlay],
    methods: {
        draw(ctx) {
            const layout = this.$props.layout
            ctx.fillStyle = '#FF0000'
            ctx.lineWidth = 1.5
            ctx.strokeStyle = 'black'
            for (const p of this.$props.data) {
                ctx.fillStyle = 'gray'
                ctx.beginPath()
                const x = layout.t2screen(p[0]) // x - Mapping
                const y = layout.$2screen(p[2]) // y - Mapping
                ctx.arc(x, y, 30, 0, Math.PI * 2, true) // Trade point
                ctx.fill()
                ctx.stroke()
            }
        },
        use_for() {
            return ['Setups']
        },
    }
}
