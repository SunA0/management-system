import Vue from "vue";
//import element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);

//权限配置
import './permission'

//Vue.config.productionTip = process.env.NODE_ENV === 'prodction';

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
