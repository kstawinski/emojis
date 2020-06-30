import Vue from 'vue';
import AnimateCSS from 'animate.css';
import App from './App.vue';

Vue.use(AnimateCSS);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
