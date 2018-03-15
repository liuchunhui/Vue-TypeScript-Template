// 根级别 mutation

import {
  GLOBAL_INFO,
  GLOBAL_SUCCESS,
  GLOBAL_WARING,
  GLOBAL_ERROR,
  GLOBAL_NAV,
} from "./mutation-types";

import {
  InterNotice,
  InterState,
} from "./state";

const mutations = {
  [GLOBAL_INFO](state: InterState, notice: InterNotice): void {
    state.info = notice;
  },
  [GLOBAL_SUCCESS](state: InterState, notice: InterNotice): void {
    state.success = notice;
  },
  [GLOBAL_WARING](state: InterState, notice: InterNotice): void {
    state.waring = notice;
  },
  [GLOBAL_ERROR](state: InterState, notice: InterNotice): void {
    state.error = notice;
  },
  [GLOBAL_NAV](state: InterState, value: string): void {
    state.nav = value;
  },
};

export default mutations;
