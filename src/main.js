// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import VueIco, {icoFace, icoShowChart, icoViewList, icoTranslate, icoAccountCircle, icoFilterVintage} from 'vue-ico'


Vue.config.productionTip = false

Vue.use(VueIco, {
  "face": icoFace,
  "canvas": icoFilterVintage,
  "chart": icoShowChart,
  "table": icoViewList,
  "translate": icoTranslate,
  "user": icoAccountCircle,
});
Vue.use(resource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
