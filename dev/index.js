import Vue from 'vue';
import { plugin } from '@/v-aos';

import App from './App';

Vue.use(plugin, { startEvent: 'load', duration: 600 });

new Vue({
  render: h => h(App),
}).$mount('#app');
