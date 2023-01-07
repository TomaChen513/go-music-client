"use strict";(self["webpackChunkmusic_client"]=self["webpackChunkmusic_client"]||[]).push([[596],{8045:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(3396),i=a(9749),c=a(3658),r=a(2167);function s(){const{proxy:e}=(0,t.FN)(),n=(0,i.oR)(),a=(0,t.Fl)((()=>n.getters.token));function s(e){return 0===e?"女":1===e?"男":void 0}function l(e){return e.split("-")[1]}function o(e){return e.split("-")[0]}function u(n){return!!a.value||(!1!==n&&e.$message({message:"请先登录",type:"warning"}),!1)}function g({id:n,url:a,pic:t,index:i,name:c,lyric:r,currentSongList:s}){const u=l(c),g=o(c);e.$store.dispatch("playMusic",{id:n,url:a,pic:t,index:i,songTitle:u,singerName:g,lyric:r,currentSongList:s})}async function p({songUrl:n,songName:a}){if(!n)return e.$message({message:"下载链接为空！",type:"error"}),void console.error("下载链接为空！");const t=await r.x.downloadMusic(n),i=document.createElement("a");i.download=`${a}.mp3`,i.style.display="none";const c=new Blob([t.data]);i.href=URL.createObjectURL(c),document.body.appendChild(i),i.click(),document.body.removeChild(i)}function d(n){e.$store.commit("setActiveNavName",n)}function m(n,a){switch(n){case c.wC.Search:e.$router.push({path:a.path,query:a.query});break;case c.wC.Home:case c.wC.SongSheet:case c.wC.SongSheetDetail:case c.wC.Singer:case c.wC.SingerDetail:case c.wC.Personal:case c.wC.PersonalData:case c.wC.Setting:case c.wC.SignIn:case c.wC.SignUp:case c.wC.SignOut:case c.wC.Lyric:case c.wC.Error:default:e.$router.push({path:a.path});break}}function v(n=-1){e.$router.go(n)}return{getUserSex:s,getSongTitle:l,getSingerName:o,changeIndex:d,checkStatus:u,playMusic:g,routerManager:m,goBack:v,downloadMusic:p}}},2476:function(e,n,a){a.d(n,{Z:function(){return C}});var t=a(3396),i=a(7139);const c={class:"play-list"},r={key:0,class:"play-title"},s={class:"play-body"},l=["onClick"],o=["onClick"],u={class:"card-name"};function g(e,n,a,g,p,d){const m=(0,t.up)("el-image"),v=(0,t.up)("yin-icon");return(0,t.wg)(),(0,t.iD)("div",c,[e.title?((0,t.wg)(),(0,t.iD)("div",r,(0,i.zw)(e.title),1)):(0,t.kq)("",!0),(0,t._)("ul",s,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.playList,((n,a)=>((0,t.wg)(),(0,t.iD)("li",{class:"card-frame",key:a},[(0,t._)("div",{class:"card",onClick:a=>e.goAblum(n)},[(0,t.Wm)(m,{class:"card-img",fit:"contain",src:e.attachImageUrl(n.pic)},null,8,["src"]),(0,t._)("div",{class:"mask",onClick:a=>e.goAblum(n)},[(0,t.Wm)(v,{class:"mask-icon",icon:e.BOFANG},null,8,["icon"])],8,o)],8,l),(0,t._)("p",u,(0,i.zw)(n.name||n.title),1)])))),128))])])}var p=a(4870),d=a(3089),m=a(8045),v=a(3658),y=a(2167),h=(0,t.aZ)({components:{YinIcon:d.Z},props:{title:String,playList:Array,path:String},setup(e){const{proxy:n}=(0,t.FN)(),{routerManager:a}=(0,m.Z)(),{path:i}=(0,p.BK)(e);function c(e){n.$store.commit("setSongDetails",e),a(i.value,{path:`/${i.value}/${e.id}`})}return{BOFANG:v.JO.BOFANG,goAblum:c,attachImageUrl:y.x.attachImageUrl}}}),w=a(89);const f=(0,w.Z)(h,[["render",g],["__scopeId","data-v-184e2a92"]]);var C=f},3089:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(3396);const i={class:"icon","aria-hidden":"true"},c=["xlink:href"];function r(e,n,a,r,s,l){return(0,t.wg)(),(0,t.iD)("svg",i,[(0,t._)("use",{"xlink:href":e.icon},null,8,c)])}var s=(0,t.aZ)({props:{icon:String}}),l=a(89);const o=(0,l.Z)(s,[["render",r]]);var u=o},9747:function(e,n,a){a.d(n,{Z:function(){return g}});var t=a(3396),i=a(7139);const c={class:"yin-nav"},r=["onClick"];function s(e,n,a,s,l,o){return(0,t.wg)(),(0,t.iD)("ul",c,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.styleList,((n,a)=>((0,t.wg)(),(0,t.iD)("li",{key:a,class:(0,i.C_)({active:n.name==e.activeName}),onClick:a=>e.handleChangeView(n)},(0,i.zw)(n.name),11,r)))),128))])}var l=(0,t.aZ)({props:{styleList:Array,activeName:String},emits:["click"],setup(){const{proxy:e}=(0,t.FN)();function n(n){e.$emit("click",n)}return{handleChangeView:n}}}),o=a(89);const u=(0,o.Z)(l,[["render",s],["__scopeId","data-v-7ec6ad2f"]]);var g=u},2596:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var t=a(3396);const i={class:"play-list-container"};function c(e,n,a,c,r,s){const l=(0,t.up)("yin-nav"),o=(0,t.up)("play-list"),u=(0,t.up)("el-pagination");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(l,{styleList:e.songStyle,activeName:e.activeName,onClick:e.handleChangeView},null,8,["styleList","activeName","onClick"]),(0,t.Wm)(o,{playList:e.data,path:"song-sheet-detail"},null,8,["playList"]),(0,t.Wm)(u,{class:"pagination",background:"",layout:"total, prev, pager, next","current-page":e.currentPage,"page-size":e.pageSize,total:e.allPlayList.length,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","total","onCurrentChange"])])}var r=a(4870),s=a(9747),l=a(2476),o=a(3658),u=a(2167),g=(0,t.aZ)({components:{YinNav:s.Z,PlayList:l.Z},setup(){const e=(0,r.iH)("全部歌单"),n=(0,r.iH)(15),a=(0,r.iH)(1),i=(0,r.iH)(o.cR),c=(0,r.iH)([]),s=(0,t.Fl)((()=>c.value.slice((a.value-1)*n.value,a.value*n.value)));async function l(){c.value=(await u.x.getSongList()).data,a.value=1}async function g(e){c.value=(await u.x.getSongListOfStyle(e)).data,a.value=1}try{l()}catch(m){console.error(m)}async function p(n){e.value=n.name,c.value=[];try{"全部歌单"===n.name?await l():await g(n.name)}catch(m){console.error(m)}}function d(e){a.value=e}return{activeName:e,songStyle:i,pageSize:n,currentPage:a,allPlayList:c,data:s,handleChangeView:p,handleCurrentChange:d}}}),p=a(89);const d=(0,p.Z)(g,[["render",c]]);var m=d}}]);
//# sourceMappingURL=596.1aaf8d9c.js.map