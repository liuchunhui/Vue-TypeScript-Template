// 根级别的action

import {
  GLOBAL_INFO,
  GLOBAL_SUCCESS,
  GLOBAL_WARING,
  GLOBAL_ERROR,
  GLOBAL_NAV,
} from "./mutation-types";

import { Commit } from "vuex";
import {
  InterNotice,
  InterState,
} from "./state";

const actions = {
  [GLOBAL_INFO](context: { commit: Commit, state: InterState }, notice: InterNotice): void {
    context.commit(GLOBAL_INFO, notice);
  },
  [GLOBAL_SUCCESS](context: { commit: Commit, state: InterState }, notice: InterNotice): void {
    // $Notice.open({
    //   title: 'Notification title',
    //   desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
    // });
    context.commit(GLOBAL_SUCCESS, notice);
  },
  [GLOBAL_WARING](context: { commit: Commit, state: InterState }, notice: InterNotice): void {
    context.commit(GLOBAL_WARING, notice);
  },
  [GLOBAL_ERROR](context: { commit: Commit, state: InterState }, notice: InterNotice): void {
    context.commit(GLOBAL_ERROR, notice);
  },
  [GLOBAL_NAV](context: { commit: Commit, state: InterState }, value: string): void {
    context.commit(GLOBAL_NAV, value);
  },
};

export default actions;
