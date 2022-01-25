import Vue from "vue";
import App from "./App.vue";
import Pixel from "@mekari/pixel";

Vue.config.productionTip = false;

Vue.use(Pixel);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
