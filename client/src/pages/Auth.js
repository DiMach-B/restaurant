import s from '../styles/AuthStyle.module.css'
import { useLocation, NavLink, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAKING_A_PRODUCTS_ROUTE, WAITER_ROUTE, MAKING_A_DISH_ROUTE } from '../utils/const';
import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { registration, auth } from '../http/userApi';


const Auth = observer(() => {

    const { user } = useContext(Context)
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('WAITER');
    const history = useHistory();

    const selectRole = (role) => {
        switch (role) {
            case 'ADMIN':
                history.push(MAKING_A_PRODUCTS_ROUTE)
                break;
            case 'CHEF':
                history.push(MAKING_A_DISH_ROUTE)
                break;
            case 'WAITER':
                history.push(WAITER_ROUTE)
                break;
        }

    }

    const click = async () => {
        let date;
        if (isLogin) {
            date = await auth(login, password)
            console.log(date)
            if (date){
            user.setUser(date)
            user.setIsAuth(true)
            selectRole(date.role)
            } else {
                alert("Не корректно введён логин либо пароль!")
            }

        } else {
            date = await registration(login, password, role)
            history.push(LOGIN_ROUTE)
        }
    }

    return (
        <div className={s.main}>
            <div className={s.window}>
                <div className={s.input}>
                    {isLogin ?
                        <h3 className={s.title}>Авторизация</h3>
                        :
                        <h3 className={s.title}>Регистрация</h3>
                    }
                    <input placeholder='Ведите логин' onChange={e => setLogin(e.target.value)} />
                    <input placeholder='Введите пароль' type='password' onChange={e => setPassword(e.target.value)} />
                    {isLogin ?
                        <div></div>
                        :
                        <select onChange={e => setRole(e.target.value)}>
                            <option value='WAITER'>Официант</option>
                            <option value='CHEF'>Повар</option>
                        </select>
                    }
                </div>
                {isLogin ?
                    <div className={s.change}>
                        <NavLink to={REGISTRATION_ROUTE}>Зарегестрироваться</NavLink>
                        <button onClick={click}
                            style={{ fontSize: '18px', backgroundColor: '#5CDB95' }}>
                            Войти</button>
                    </div>
                    :
                    <div className={s.change}>
                        <NavLink to={LOGIN_ROUTE}>Авторизоваться</NavLink>
                        <button onClick={click}
                            style={{ fontSize: '18px', backgroundColor: '#5CDB95' }}>
                            Зарегестрироваться
                        </button>
                    </div>
                }


            </div>
        </div>
    )

})

export default Auth;