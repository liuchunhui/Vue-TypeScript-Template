<template>
  <div class="table-detail">
    <div class="info">
      <p style="margin-bottom: 20px">
        <span style="margin-right: 40px">数据库：{{databaseGet}}</span>
        <span>数据表：{{tableGet}}</span>
      </p>
    </div>
    <Table
      border
      size="small"
      :loading="loadingGet"
      :columns="columnsGet"
      :data="statusList"
    ></Table>
    <div class="pagination">
      <Page
        show-sizer
        show-total
        :current="paginationGet.current"
        :total="paginationGet.total"
        :page-size="paginationGet.pageSize"
        :page-size-opts="paginationGet.pageSizeOpts"
        @on-change="paginationChange"
        @on-page-size-change="paginationSizeChange"
      ></Page>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

import {
  TABLE_DETAIL_DATABASE,
  TABLE_DETAIL_TABLE,
  TABLE_DETAIL_STATUS_LIST,
  TABLE_DETAIL_LOADING,
  TABLE_DETAIL_PAGINATION,
  TABLE_DETAIL_COLUMN,
} from "../store/mutation-types";

import {
  InterStatus,
  InterColumn,
  InterPagination,
} from "../store/modules/TableDetail";


@Component
export default class TableDetail extends Vue {

  // getter
  @Getter(TABLE_DETAIL_DATABASE) public databaseGet: string;
  @Getter(TABLE_DETAIL_TABLE) public tableGet: string;
  @Getter(TABLE_DETAIL_STATUS_LIST) public statusListGet: InterStatus[];
  @Getter(TABLE_DETAIL_LOADING) public loadingGet: string;
  @Getter(TABLE_DETAIL_PAGINATION) public paginationGet: InterPagination;
  @Getter(TABLE_DETAIL_COLUMN) public columnsGet: InterColumn;

  // data
  public name: string = "";  // 从路由中获取的数据名称
  public statusList: InterStatus[] = [];

  // action
  @Action(TABLE_DETAIL_STATUS_LIST) public statusListAct: (name: string) => void;
  @Action(TABLE_DETAIL_PAGINATION) public paginationAct: (val: InterPagination) => void;

  // watch
  @Watch("statusListGet")
  public tableListGetWatch(list: InterStatus[]): void {
    this.statusList = list;
  }

  // methods
  public initData() {  // 初始化data
    this.name = this.$route.params.name;
    this.statusList = this.statusListGet;
  }

  public paginationChange(val: number): void {  // 分页页数回调
    console.log("paginationChange", val);
    const newPagination: InterPagination = {
      ...this.paginationGet,
      current: Number(val),
    };
    this.paginationAct(newPagination);
    this.statusListAct(this.name);
  }

  public paginationSizeChange(val: number): void {  // 分页条数回调
    console.log("paginationSizeChange: ", val);
    const newPagination: InterPagination = {
      ...this.paginationGet,
      pageSize: Number(val),
    };
    this.paginationAct(newPagination);
    this.statusListAct(this.name);
  }

  // hook
  public mounted(): void {
    this.initData();
    this.statusListAct(this.name);
  }
}
</script>

<style scoped lang="less">
  .table-detail{
    padding: 50px 40px;
    .sift {
      position: relative;
      height: 32px;
      margin-bottom: 20px;
      .keyword {
        position: absolute;
        width: 300px;
        left: 0;
      }
      .date {
        position: absolute;
        width: 300px;
        right: 0;
        text-align: right;
        .label {
          height: 32px;
          border: 1px solid #dddee1;
          display: inline-block;
          vertical-align: top;
          padding: 7px;
          background: #eeeeee;
          margin-right: -5px;
        }
      }
    }
    .pagination {
      text-align: right;
      margin-top: 20px;
    }
  }
</style>
