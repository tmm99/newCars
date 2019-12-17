<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 11:51:13
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-17 20:59:03
 * @Description: 
 -->
# call

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 汽车报价
    
- 初始化项目
- 结构规范
- 拆分store
- 引入common.css/reset.css消除浏览器默认样式
- 引入Vant,移动端UI库
- 二次封装axios,添加拦截器
- Rem自适应
- 首页逻辑
    - 图片加载
    - 事件委托
    - touch事件
    - 消除滚动的相互影响
#### 项目优化
    
1.百分百还原页面

2.百分百实现效果

3.优化交互动画

4.移动端兼容问题
  
    eg:1px像素问题 ios滑动卡顿 键盘谈起 ,input框遮挡问题 ,默认样式，300ms延迟,点击穿透4.6rem适配问题
5.git仓库，工程目录
6.代码整理
7.README整理
#### 首页
1.骨架屏(dom节点,图片,vant)

2.图片懒加载(预加载图片换成1*1)

3.touch事件(使用防抖或者截流)

4.优化动画

5.请求优化

#### 图片页面
封装图片背景，懒加载
#### 发布上线


- [x]  区分vue的dist
- [x] 服务端开启gzip
- [x] 去掉sourceMap
- [x] 修改publicPath(1.相对路径,2.子路径)
- [x] 使用XFTP吧构建后的文件上传到服务器上
- [x] 拼接线上路径
- [x] 配置Https,优化资源加载协议(把资源头部去掉,自适应当前页面的协议)
- [x] 路由懒加载
- [ ]  UI库的按需加载
- [ ]  Vuex去掉Logger
- [ ]  第三方依赖的抽离，发布到CDM
- [ ]  优化资源加载，移动端300k以内