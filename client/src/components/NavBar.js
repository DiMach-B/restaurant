import { NavLink, useHistory } from "react-router-dom";
import { MAKING_A_PRODUCTS_ROUTE, ORDER_PRODUCTS_ROUTE, LOGIN_ROUTE, MAKING_A_MENU_ROUTE, ORDERS_ROUTE, MAKING_A_DISH_ROUTE } from '../utils/const'
import s from '../styles/NavBarStyle.module.css'
import { useContext, useEffect, useState } from "react";
import { Context } from '../index'
import { observer } from 'mobx-react-lite';
import {calcOrder} from '../http/orderApi'


const NavBar = observer(() => {
    const { user, order } = useContext(Context)
    const history = useHistory();
    const [revenue, setRevenue] = useState('')

    useEffect (() => {
        calcOrder().then(data => setRevenue(data))

    }, [])
    
    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
        history.push(LOGIN_ROUTE)
        window.location.reload();

    }

    const selectNav = (role) => {
        switch (role) {
            case 'ADMIN':
                return (
                    <div className={s.menu}>
                    <div className={s.linkBlock}><NavLink className={s.link} to={MAKING_A_PRODUCTS_ROUTE}>Выбор продуктов</NavLink></div>
                    <div className={s.linkBlock}><NavLink className={s.link} to={ORDER_PRODUCTS_ROUTE}>Заказ продуктов</NavLink></div>
                    <div className={s.linkBlock}><NavLink className={s.link} to={MAKING_A_MENU_ROUTE}>Составить меню дня</NavLink></div>
                    <h3 style={{margin:'0', marginLeft: '50px', marginTop: '10px'}}>{`Выручка: ${revenue}`}</h3>
                    <button onClick={logOut}>Выйти</button>
                    </div>
                )
            case 'CHEF':
                return (
                    <div className={s.menu}>
                    <div className={s.linkBlock}><NavLink className={s.link} to={MAKING_A_DISH_ROUTE}>Составить список блюд</NavLink></div>
                    <div className={s.linkBlock}><NavLink className={s.link} to={ORDERS_ROUTE}>Заказы</NavLink></div>
                    <button onClick={logOut}>Выйти</button>
                    </div>
                )
            case 'WAITER':
                return (
                    <div className={s.menu}>
                    <button onClick={logOut}>Выйти</button>
                    </div>
                )
        }
    }

    return (
        <div className={s.navBar}>
            {user.isAuth ?
                selectNav(user.user.role)
            :
            <div></div>
}
        </div>
    )
})

export default NavBar;