import { directive } from './directive';
import AOS from 'aos';

export const plugin = {
  install(Vue, options) {
    if (this.installed) return;
    this.installed = true;
    window.AOS = AOS;
    AOS.init(options);
    Vue.directive('aos', directive);
    Vue.prototype.$aos = AOS;
  },
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}
