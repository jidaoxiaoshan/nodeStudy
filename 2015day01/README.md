# 这是一个牛逼的项目

## 牛不牛逼，用心去感受

### 我们是有灵魂的程序员

## [主流开源协议之间有何异同](https://www.zhihu.com/question/19568896)

## 项目制作步骤：

### 1、制作首页APP组件
1. 完成header区域，使用的是 Mint-UI 中的header 组件
2. 制作底部的 TabBar 区域，使用的是 MUI 的 TarBar.html
* 在制作购物车小图标的时候，操作会多一些
* 先把扩展图标的css 样式拷贝到项目中
* 拷贝对应的字体库到项目中的 fonts 当中
* 为购物车小图标添加相关样式
* 扩张的图标可以到 mui 的master 文件案例当中寻找
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

### 2、 改造 tabbar 为 router-link

## 3、设置路由高亮

## 4、点击 tabbar 中的路由组件链接，展示对应的路由组件

## 5、制作首页轮播图

## 6、加载首页轮播图数据
 1. 获取数据(使用 vue-resource)
 2. 使用 vue-resource 的 this.$http.get 获取数据
 3. 获取到的数据要保存到 data 身上
 4. 使用 v-for 循环渲染的每个 item 项