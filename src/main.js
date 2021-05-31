import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueAwesomeSwiper from "vue-awesome-swiper";
import NProgress from "nprogress";
import VueYouTubeEmbed from 'vue-youtube-embed';
import Embed from 'v-video-embed';


// require styles
import "swiper/swiper.min.css";
import "../node_modules/nprogress/nprogress.css";

Vue.use(VueAwesomeSwiper);
Vue.use(VueYouTubeEmbed);
Vue.use(Embed);

Vue.config.productionTip = false;

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
// eslint-disable-next-line no-unused-vars
let vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
