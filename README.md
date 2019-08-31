# MGJ-mall

  **高仿蘑菇街移动端购物商城**
  > 本项目是Vue.js项目，实现了类似蘑菇街的移动端购物平台，此项目是移动端项目，不兼容PC端
 
### 项目实现

  * 使用Vue-CLI3搭建，包括vue-router、vuex、axios数据请求等进行开发
  * API接口
    
    项目所有的数据均来自真实的数据，请求的真实的数据API接口
  
  * 使用Slider插件进行轮播图的封装
  * 移动端滚动
    
    使用better-scroll来对移动端进行各种滚动场景需求，better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的
    iscroll 的实现，它的 API 设计基本兼容 iscroll，在 iscroll 的基础上又扩展了一些 feature 以及做了一些性能优化。better-scroll 是基于原生 
    JS 实现的，不依赖任何框架。
  
  * 处理滚动频繁刷新：通过使用debounce防抖函数进行处理
  
***项目演示***
  
* '首页'部分
***主页***

![home](https://github.com/GDYG/MGJ-mall/blob/master/src/assets/css/images/home.jpg)
![home](https://github.com/GDYG/MGJ-mall/blob/master/src/assets/css/images/detail.jpg)

***新款***

![home](https://github.com/GDYG/MGJ-mall/blob/master/src/assets/css/images/new.jpg)

***流行***

![home](https://github.com/GDYG/MGJ-mall/blob/master/src/assets/css/images/pop.jpg)

***精选***

![home](https://github.com/GDYG/MGJ-mall/blob/master/src/assets/css/images/sell.jpg)
      
* '分类'部分
    
* '购物车'部分

![home](https://github.com/GDYG/MGJ-mall/blob/master/src/assets/css/images/cart.jpg)

* '我的'部分

## 项目的优点
  
  **完全符合Vue的组件化开发核心思想，整个项目拆分细致明确，对可复用个体独立封装。真实的接口数据，项目涵盖Vue技术面广**
  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
