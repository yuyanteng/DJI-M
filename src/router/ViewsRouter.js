import React,{lazy} from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from '../views/home/home'
import Detail from '../views/detail/detail'
import Cart from '../views/cart/cart'
import Order from '../views/order/order'
import User from '../views/user/user'
import Explore from '../views/explore/explore'
import Shop from '../views/shop/shop'

const Login =lazy(() => import('../views/login/login.js'))
const Register =lazy(() => import('../views/register/register.js'))

// 路由映射表
const LocalRouterMap = {
  "/home": <Home />,
  "/detail" : <Detail />,
  "/cart" : <Cart/>,
  "/order" : <Order/>,
  "/user" : <User/>,
  "/explore" : <Explore/>,
  "/shop" : <Shop/>,
}
const LocalRouter = [
  {
    "id": 1,
    "title": "首页",
    "key": "/home",
    "footerTab": 1,
  },
  {
    "id": 2,
    "title": "详情页",
    "key": "/detail",
    "footerTab": 1,
  },
  {
    "id": 3,
    "title": "购物车",
    "key": "/cart",
    "footerTab": 1,
  },
  {
    "id": 4,
    "title": "订单页",
    "key": "/order",
    "footerTab": 1,
  },
  {
    "id": 5,
    "title": "个人中心页",
    "key": "/user",
    "footerTab": 1,
  },
  {
    "id": 6,
    "title": "探索页",
    "key": "/explore",
    "footerTab": 1,
  },
  {
    "id": 7,
    "title": "点餐页",
    "key": "/shop",
    "footerTab": 1,
  },
]
export default function ViewsRouter() {
  return (
    <Routes>
     {
      LocalRouter.map(item => (
        <Route path={item.key} key= {item.key} element={LocalRouterMap[item.key]} />
      ))
      }
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="*" element={<Navigate replace from="*" to="/home"/>} />
    </Routes>
  )
}
