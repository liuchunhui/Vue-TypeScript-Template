/**
 * 定义state 接口
 */
export interface InterNotice {
  title: string;
  desc: string;
}

export interface InterState {
  info: InterNotice;
  success: InterNotice;
  waring: InterNotice;
  error: InterNotice;
  nav: string;
}

const state: InterState = {
  info: { // 通知
    title: "",
    desc: "",
  },
  success: { // 成功提示
    title: "",
    desc: "",
  },
  waring: { // 警告提示
    title: "",
    desc: "",
  },
  error: { // 错误提示
    title: "",
    desc: "",
  },
  nav: "", // 导航
};

export default state;
