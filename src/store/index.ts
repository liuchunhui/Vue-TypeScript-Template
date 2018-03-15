import Vue from "vue";
import Vuex from "vuex";
// import createLogger from 'vuex/dist/logger';
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import Index from "./modules/Index";
import TableDetail from "./modules/TableDetail";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, // 严格模式，开发环境下开启，发布环境下关闭
  state, // 状态
  mutations, // 状态变更
  actions,
  getters,
  modules: {
    Index,
    TableDetail,
  },
  // plugins: [createLogger()] // 日志插件用于调试，开发环境下开启，发布环境下关闭
});

export default store;
