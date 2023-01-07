import { RouterName } from "./router-name";

export const enum NavName {
  Home = "首页",
  SongSheet = "歌单",
  Singer = "歌手",
  Personal = "个人主页",
  Setting = "设置",
  SignIn = "登录",
  SignUp = "注册",
  SignOut = "退出",

  FOUNDUSIC="发现音乐",
  MYMUSIC="我的音乐",
  FAVOR="关注",
  SHOPPING="商城",
  MUSICPEOPLE="音乐人",
  DOWNLOADCLIENT="下载客户端",
}

// 左侧导航栏
export const HEADERNAVLIST = [
  {
    name: NavName.FOUNDUSIC,
    path: RouterName.Home,
  },
  {
    name: NavName.MYMUSIC,
    path: RouterName.Personal,
  },
  {
    name: NavName.FAVOR,
    path: RouterName.Singer,
  },
  {
    name: NavName.SHOPPING,
    path: RouterName.CRUD,
  },
  {
    name: NavName.MUSICPEOPLE,
    path: RouterName.SongSheet,
  },
  {
    name: NavName.DOWNLOADCLIENT,
    path: RouterName.Singer,
  },
  // {
  //   name: NavName.Home,
  //   path: RouterName.Home,
  // },
  // {
  //   name: NavName.SongSheet,
  //   path: RouterName.SongSheet,
  // },
  // {
  //   name: NavName.Singer,
  //   path: RouterName.Singer,
  // },

];

// 右侧导航栏
export const SIGNLIST = [
  {
    name: NavName.SignIn,
    path: RouterName.SignIn,
  },
  {
    name: NavName.SignUp,
    path: RouterName.SignUp,
  },
];

// 用户下拉菜单项
export const MENULIST = [
  {
    name: NavName.Personal,
    path: RouterName.Personal,
  },
  {
    name: NavName.Setting,
    path: RouterName.Setting,
  },
  {
    name: NavName.SignOut,
    path: RouterName.SignOut,
  },
];
