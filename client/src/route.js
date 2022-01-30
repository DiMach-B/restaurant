import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAKING_A_PRODUCTS_ROUTE, ORDER_PRODUCTS_ROUTE, MAKING_A_MENU_ROUTE, MAKING_A_DISH_ROUTE, ORDERS_ROUTE, WAITER_ROUTE } from './utils/const'
import Auth from './pages/Auth'
import Admin from './pages/Admin'
import OrderProducts from './components/OrderProducts'
import CreateMenu from './components/CreateMenu'
import Chef from './pages/Chef'
import Waiter from './pages/Waiter'
import Orders from './components/Orders'


export const authRouters = [

    {
        path: LOGIN_ROUTE,
        Component: Auth

    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: MAKING_A_PRODUCTS_ROUTE,
        Component: Admin
    },

    {
        path: ORDER_PRODUCTS_ROUTE,
        Component: OrderProducts
    },

    {
        path: MAKING_A_MENU_ROUTE,
        Component: CreateMenu
    },

    {
        path: MAKING_A_DISH_ROUTE,
        Component:  Chef
    },
    
    {
        path: ORDERS_ROUTE,
        Component: Orders
    },

    {
        path: WAITER_ROUTE,
        Component: Waiter
    }

]
