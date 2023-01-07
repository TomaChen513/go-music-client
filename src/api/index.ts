import { getBaseURL, get, post } from "./request";

const HttpManager = {
  //测试
  getAllPaperMessage: () => get('wallpaper/paper'),


  // 获取图片信息
  attachImageUrl: (url) => url ? `${getBaseURL()}/api${url}` : "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",

  // =======================> 用户 API
  // 登录
  signIn: (params) => post(`api/user/login/status`, params),
  // 注册
  SignUp: (params) => post(`api/user/add`, params),
  // 删除用户
  deleteUser: (id) => get(`api/user/delete?id=${id}`),
  // 更新用户信息
  updateUserMsg: (params) => post(`api/user/update`, params),
  updateUserPassword: (params) => post(`api/user/updatePassword`, params),
  // 返回指定ID的用户
  getUserOfId: (id) => get(`api/user/detail?id=${id}`),
  // 更新用户头像
  uploadUrl: (userId) => `${getBaseURL()}/api/user/avatar/update?id=${userId}`,

  // =======================> 歌单 API
  // 获取全部歌单
  getSongList: () => get("api/songList"),
  // 获取歌单类型
  getSongListOfStyle: (style) => get(`api/songList/style/detail?style=${style}`),
  // 返回标题包含文字的歌单
  getSongListOfLikeTitle: (keywords) => get(`api/songList/likeTitle/detail?title=${keywords}`),
  // 返回歌单里指定歌单ID的歌曲
  getListSongOfSongId: (songListId) => get(`api/listSong/detail?songListId=${songListId}`),

  // =======================> 歌手 API
  // 返回所有歌手
  getAllSinger: () => get("api/singer"),
  // 通过性别对歌手分类
  getSingerOfSex: (sex) => get(`api/singer/sex/detail?sex=${sex}`),

  // =======================> 收藏 API
  // 返回的指定用户ID的收藏列表
  getCollectionOfUser: (userId) => get(`api/collection/detail?userId=${userId}`),
  // 添加收藏的歌曲 type: 0 代表歌曲， 1 代表歌单
  setCollection: (params) => post(`api/collection/add`, params),

  deleteCollection: (params) => post(`api/collection/delete`, params),

  isCollection: (params) => post(`api/collection/status`, params),

  // =======================> 评分 API
  // 提交评分
  setRank: (params) => post(`api/rankList/add`, params),
  // 获取指定歌单的评分
  getRankOfSongListId: (songListId) => get(`api/rankList?songListId=${songListId}`),
  // 获取指定用户的歌单评分
  getUserRank: (consumerId, songListId) => get(`api/rankList/user?consumerId=${consumerId}&songListId=${songListId}`),

  // =======================> 评论 API
  // 添加评论
  setComment: (params) => post(`api/comment/add`, params),
  // 删除评论
  deleteComment: (id) => get(`api/comment/delete?id=${id}`),
  // 点赞
  setSupport: (params) => post(`api/comment/like`, params),
  // 返回所有评论
  getAllComment: (type, id) => {
    let url = "";
    if (type === 1) {
      url = `api/comment/songList/detail?songListId=${id}`;
    } else if (type === 0) {
      url = `api/comment/song/detail?songId=${id}`;
    }
    return get(url);
  },

  // =======================> 歌曲 API
  // 返回指定歌曲ID的歌曲
  getSongOfId: (id) => get(`api/song/detail?id=${id}`),
  // 返回指定歌手ID的歌曲
  getSongOfSingerId: (id) => get(`api/song/singer/detail?singerId=${id}`),
  // 返回指定歌手名的歌曲
  getSongOfSingerName: (keywords) => get(`api/song/singerName/detail?name=${keywords}`),
  // 下载音乐
  downloadMusic: (url) => get(url, { responseType: "blob" }),
};

export { HttpManager };
