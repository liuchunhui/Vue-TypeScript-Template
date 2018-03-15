import {
  TABLE_DETAIL_DATABASE,
  TABLE_DETAIL_TABLE,
  TABLE_DETAIL_STATUS_LIST,
  TABLE_DETAIL_LOADING,
  TABLE_DETAIL_PAGINATION,
  TABLE_DETAIL_COLUMN, INDEX_PAGINATION,
} from "../mutation-types";

import { Commit } from "vuex";

/** 格式 约束 */
export interface InterColumn {  // 表头 接口
  title: string;
  key: string;
}

export interface InterStatus {  // 状态 接口
  name: string;
  age: number;
  address: string;
  date: string;
}

export interface InterPagination {  // 分页 接口
  current: number;
  total: number;
  pageSize: number;
  pageSizeOpts: number[];
}

export interface InterState {  // state 接口
  database: string;
  table: string;
  statusList: InterStatus[];
  loading: boolean;
  pagination: InterPagination;
  columns: InterColumn[];
}

const state: InterState = {
  database: "waimai",  // 数据库
  table: "fact_order",  // 数据表
  statusList: [],  // 数据表列表
  loading: false,  // 加载动画
  pagination: {  // 分页
    current: 1,
    total: 0,
    pageSize: 1,
    pageSizeOpts: [1, 10, 20, 30, 40],
  },
  columns: [{
    title: "Name",
    key: "name",
  }, {
    title: "Age",
    key: "age",
  }, {
    title: "Address",
    key: "Address",
  }],
};

// mutations
const mutations = {
  [TABLE_DETAIL_DATABASE](orgState: InterState, value: string): void {
    orgState.database = value;
  },
  [TABLE_DETAIL_TABLE](orgState: InterState, value: string): void {
    orgState.table = value;
  },
  [TABLE_DETAIL_STATUS_LIST](orgState: InterState, value: InterStatus[]): void {
    orgState.statusList = value;
  },
  [TABLE_DETAIL_LOADING](orgState: InterState, value: boolean): void {
    orgState.loading = value;
  },
  [TABLE_DETAIL_PAGINATION](orgState: InterState, value: InterPagination): void {
    orgState.pagination = value;
  },
};

// actions
const actions = {
  [TABLE_DETAIL_DATABASE](context: { commit: Commit, state: InterState }, value: string): void {
    context.commit(TABLE_DETAIL_DATABASE, value);
  },
  [TABLE_DETAIL_TABLE](context: { commit: Commit, state: InterState }, value: string): void {
    context.commit(TABLE_DETAIL_TABLE, value);
  },
  [TABLE_DETAIL_STATUS_LIST](context: { commit: Commit, state: InterState }, name: string): void {
    // fetch('/fs/data/getFunnelByPath', {
    //   method: 'POST',
    //   body: JSON.stringify({})
    // }).then(function (response) {
    //   if (response.status >= 400) {
    //     throw new Error('Bad response from server')
    //   }
    //   return response.json()
    // }).then(function (data) {
    //   context.commit(SUMMARY_DATA_LINE, value)
    // })
    console.log("antion收到了要查询的名称：", name);
    context.commit(TABLE_DETAIL_LOADING, true);
    setTimeout(() => {
      context.commit(TABLE_DETAIL_STATUS_LIST, [...state.statusList, {
        name: "John Brown",
        age: 18,
        address: "New York No. 1 Lake Park",
        date: "2016-10-03",
      }]);
      context.commit(TABLE_DETAIL_PAGINATION, {  // 初始化分页
        ...state.pagination,
        current: 1,
        total: state.statusList.length,
      });
      context.commit(TABLE_DETAIL_LOADING, false);
    }, 1000);
  },
  [TABLE_DETAIL_LOADING](context: { commit: Commit, state: InterState }, value: boolean): void {
    context.commit(TABLE_DETAIL_LOADING, value);
  },
  [TABLE_DETAIL_PAGINATION](context: { commit: Commit, state: InterState }, value: InterPagination): void {
    context.commit(TABLE_DETAIL_PAGINATION, value);
  },
};

// getters
const getters = {
  [TABLE_DETAIL_DATABASE]: (orgState: InterState) => orgState.database,
  [TABLE_DETAIL_TABLE]: (orgState: InterState) => orgState.table,
  [TABLE_DETAIL_STATUS_LIST]: (orgState: InterState) => orgState.statusList,
  [TABLE_DETAIL_LOADING]: (orgState: InterState) => orgState.loading,
  [TABLE_DETAIL_PAGINATION]: (orgState: InterState) => orgState.pagination,
  [TABLE_DETAIL_COLUMN]: (orgState: InterState) => orgState.columns,
};

const TableDetail = {
  state,
  getters,
  mutations,
  actions,
};
export default TableDetail;
