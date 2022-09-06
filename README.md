# 一、前端项目的创建有三种方式：

## 创建create-react-app脚手架
yarn global add create-react-app

## 创建react项目文件
npx create-react-app react-demo

## 启动后，可以通过3000端口进行访问
//Mac中自定义启动端口 Package.json文件中，将start命令中修改成 “PORT=1234 react-scripts start"

## 安装react的路由react-router-dom
yarn add react-router-dom —-save-dev

## 安装发送请求的axios.
yarn add axis

## 安装状态管理的react-redux
yarn add react-redux

# 二、设置项目目录结构

Api:接口文件
Components：相关组件文件
router：路由文件
static：静态资源文件
Store：react-redux状态管理文件
utils：各工具类文件
Views：页面视图层文件

# 三、路由设置
## 使用React.lazy搭配React.Suspense函数直接达到asyncComponnet的效果,还可以优化加载速度
```
  Import React, {Suspense,lazy} from ‘react’;

  const App =lazy(() => import('../App.js'))
  const Login =lazy(() => import('../views/login'))
  const Register =lazy(() => import('../views/register.js’))

  const BasicRoute = () => (
      <BrowserRouter>
          <Suspense fallback={<div>Loding…</div>}>
              <Routes>
                  <Route path='/' exact element={<App/>}/>
                  <Route path='/login' exact element={<Login/>}/>
                  <Route path='/register' exact element={<Register/>}/>
              </Routes>
          </Suspense>
      </BrowserRouter>
  )

  export default BasicRoute;
```
## 在src/index.js文件中引入我们的路由文件router.js
### 原写法
```
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import BasicRoute from './router/router';
  // import store from './store'

  ReactDOM.render(
      <BasicRoute/>,
      document.getElementById('root')
  );
```
### REACT 18写法
```
  import React from 'react';
  import BasicRouter from './router/BasicRouter'
  import { createRoot } from 'react-dom/client';

  import './style/style.css';
  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(<BasicRouter/>)
```
# 四、引入redux状态管理
yarn add redux -—save
yarn add redux

# 四、引入组件库
yarn add antd
--save @ant-design/icons
修改 src/App.css，在文件顶部引入 antd/dist/antd.css。
import '~antd/dist/antd.min.css';

# 五、暴露webpack

git init
git add .
git commit -m 'Saving before ejecting'
yarn eject

# 六、引入mock.js （没学后端=。=）

随机生成相应格式的数据。支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等。
官方文档：http://mockjs.com/
## 安装： npm install --save mockjs
## 引入
```javascript
  // (1) import引入
import Mock from 'mockjs'

// (2) require引入
let Mock = require('mockjs')

```
## 使用
属性名 和 生成规则 之间用竖线 | 分隔。
生成规则 是可选的。
生成规则 有 7 种格式：
```
'name|min-max': value
'name|count': value
'name|min-max.dmin-dmax': value
'name|min-max.dcount': value
'name|count.dmin-dmax': value
'name|count.dcount': value
'name|+step': value
```