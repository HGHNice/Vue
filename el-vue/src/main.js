// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, {h} from 'vue'
import App from './App'
import router from "./router/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>'
})
