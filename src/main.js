import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";

import "./scss/main.scss";

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueSlider,
  $,
  render: (h) => h(App),
}).$mount("#app");
