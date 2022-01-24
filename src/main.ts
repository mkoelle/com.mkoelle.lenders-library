import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/main.scss";

import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
