import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "//xxx"
  }, {
    id: 2,
    title: "手绘",
    imgUrl: "//xxx"
  }],
  articleList: [{
    id: 2,
    imgUrl: "https://upload-images.jianshu.io/upload_images/10668704-3d1443019d2ceb98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    title: "5900000 element-ui 后台布局",
    desc: "在这里整理下后台导航栏菜单路由的跳转详解。项目环境：项目环境：vue + vue-cli + element-ui附最终效果图："
  }, {
    id: 1,
    imgUrl: "https://upload-images.jianshu.io/upload_images/10841783-77d7c0663bedd2ac?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    title: "5. element-ui 后台布局",
    desc: "项目进行到后台部分了，在这里整理下后台导航栏菜单路由的跳转详解。项目环境：项目环境：vue + vue-cli + element-ui附最终效果图："
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}