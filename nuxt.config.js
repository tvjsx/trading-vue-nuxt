export default {
  target: 'static',
  plugins: [
    { src: '~/plugins/trading-vue.client.js', mode: 'client' }
  ],
  // Using @nuxt/components module to auto-import components
  components: true,
}
