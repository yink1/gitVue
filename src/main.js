// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/goods/ratings';
import seller from './components/goods/seller';

Vue.use(VueRouter);
var router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
  ]
});
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
