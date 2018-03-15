import Vue from "vue";
import Router from "vue-router";
import Index from "../components/Index.vue";
import TableDetail from "../components/TableDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    }, {
      path: "/table-detail/:name",
      name: "TableDetail",
      component: TableDetail,
    },
  ],
});
