import s from '../styles/WaiterStyle.module.css'
import {useEffect, useContext, useState} from 'react'
import {fetchDish} from '../http/dishApi'
import {createOrder, fetchOrder, updateOrder} from '../http/orderApi'
import {Context} from '../index'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import {WAITER_ROUTE} from '../utils/const'

const Waiter = observer(() => {

    const {dish, order, user} = useContext(Context)
    const [menuList, setMenuList] = useState([])
    const history = useHistory()
    const [addDish, setAddDish] = useState([])

    useEffect(() => {
        fetchDish().then(date => {
            dish.setDishes(date)
            fetchOrder().then(data => {
                order.setOrdersDone(data.filter(el => el.status === 'Готов'))
    
            })
            setMenuList(dish.dishes.filter(el => el.inMenu === true))
        })
    }, [])


    const sendOrder = async (id, dishes, status ) => {
        await updateOrder(id, {}, dishes, status)
        fetchOrder().then(data => {
            order.setOrdersDone(data.filter(el => el.status === 'Готов'))

        })
        history.push(WAITER_ROUTE)
    }

    const create = async (user, dishes , status) => {
        console.log(dishes)

        // setAddDish([...addDish, dishes])
        console.log(addDish)
        await createOrder(user, dishes, status)
        // setAddDish([])
    }

    return (
        <div className={s.main}>
        <div className={s.dish}>
        <h2>Меню</h2>
        {menuList.map(el => {
                    return (
                        <div key={el.id} className={s.itemMenu}>
                            <h3>{el.name}<span>{`${el.amount} руб`}</span></h3>
                            <button
                                onClick={() => create(user.user, [el], 'Создан')}
                                className={s.button}>Заказать</button>
                        </div>
                    )
                })}
        </div>
        <div className={s.orders}>
            <h2>Готовые заказы</h2>
            {order.ordersDone.map(el => {
                    return (
                        <div className={s.order}>
                            {el.dishes.map(dish => {
                                return (
                                    <div key={dish.id} className={s.dish}>
                                        <h3>{dish.name}</h3>
                                    </div>
                                )
                            })}
                            <button
                                onClick={() => sendOrder(el.id, el.dishes, 'Доставлен')}
                                className={s.doneButton}>Доставлен</button>
                        </div>
                    )
                })}

        </div>
        </div>
    )
})

export default Waiter;