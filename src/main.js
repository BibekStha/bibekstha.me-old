import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/vue-typed";
import "./plugins/vuetify";
import "timeline-vuejs/dist/timeline-vuejs.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
