// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false


// 路由配置
const RouterConfig = {
  mode: 'history',
};
const router1 = new VueRouter(RouterConfig);

router1.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router1.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

Vue.use(iView);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
