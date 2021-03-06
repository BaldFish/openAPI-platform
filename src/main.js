// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
Vue.use(Vuex);

import '@/common/stylus/index.styl';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '@/common/js/validate.js'

import axios from 'axios';
Vue.prototype.$axios = axios;

import {baseURL,} from '@/common/js/public.js';
Vue.prototype.$baseURL = baseURL;

const querystring = require('querystring');
Vue.prototype.$querystring = querystring;

import _ from 'lodash';
Vue.prototype.$_ = _;

import utils from '@/common/js/utils';
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {},
  mutations: {}
});
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
