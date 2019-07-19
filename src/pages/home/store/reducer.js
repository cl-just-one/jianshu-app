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
  }],
  recommendList: [{
    id: 1,
    imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
  }, {
    id: 2,
    imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
  }, {
    id: 3,
    imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  }, {
    id: 4,
    imgUrl: "http:////cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}