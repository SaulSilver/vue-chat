import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueChatScroll from "vue-chat-scroll";
import VueI18n from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/loading.css";
import "./assets/css/loading-btn.css";

import translations from "../i18n";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueChatScroll);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: translations
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
