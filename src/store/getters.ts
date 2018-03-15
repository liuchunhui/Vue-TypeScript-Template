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

// getters
const getters = {
  [GLOBAL_INFO]: (state: InterState): InterNotice => state.info,
  [GLOBAL_SUCCESS]: (state: InterState): InterNotice => state.success,
  [GLOBAL_WARING]: (state: InterState): InterNotice => state.waring,
  [GLOBAL_ERROR]: (state: InterState): InterNotice => state.error,
  [GLOBAL_NAV]: (state: InterState): string => state.nav,
};

export default getters;
