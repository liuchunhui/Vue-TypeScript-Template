<template>
  <div id="app">
    <Header>
      <Menu mode="horizontal" theme="dark">
        <router-link to="/">
          <div class="layout-logo">Kudo Loader</div>
        </router-link>
      </Menu>
    </Header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";

import {
  GLOBAL_INFO,
  GLOBAL_SUCCESS,
  GLOBAL_WARING,
  GLOBAL_ERROR,
} from "./store/mutation-types";

import {
  InterNotice,
} from "./store/state";

import { Notice } from "iview";

@Component
export default class App extends Vue {
  
  // getter
  @Getter(GLOBAL_INFO) public infoGet: string;
  @Getter(GLOBAL_SUCCESS) public successGet: string;
  @Getter(GLOBAL_WARING) public waringGet: string;
  @Getter(GLOBAL_ERROR) public errorGet: string;

  // watch
  @Watch("infoGet")
  public infoGetWatch(notice: InterNotice): void {
    Notice.info({
      title: notice.title,
      desc: notice.desc,
    });
  }
  @Watch("successGet")
  public successGetWatch(notice: InterNotice): void {
    Notice.success({
      title: notice.title,
      desc: notice.desc,
    });
  }
  @Watch("waringGet")
  public waringGettWatch(notice: InterNotice): void {
    Notice.warning({
      title: notice.title,
      desc: notice.desc,
    });
  }
  @Watch("errorGet")
  public errorGetWatch(notice: InterNotice): void {
    Notice.error({
      title: notice.title,
      desc: notice.desc,
    });
  }

  // hook
  // public mounted(): void {}
}
</script>
<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .spin-icon-load{
      animation: ani-demo-spin 1s linear infinite;
    }
    .ivu-layout-header {
      background: #4673da;
      .ivu-menu-dark {
        background: #4673da;
      }
    }
    .layout-logo{
      width: 200px;
      height: 30px;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      text-align: center;
      color: #ffffff;
      line-height: 30px;
      font-size: 22px;
    }
    .layout-nav{
      float: right;
      margin-right: 20px;
    }
  }
</style>
