/* Init Vue and F7 with F7Vue */
import Vue from 'vue';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7Vue from 'framework7-vue';
import App from './App.vue';

/* Import CSS's to style */
require('framework7/css/framework7.md.min.css')
require('framework7/css/framework7.ios.min.css')
require('./css/app.css') // Global CSS for any need

// Start F7 with Vue
Framework7.use(Framework7Vue);

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  render: c => c(App),
});
