import s from '../styles/Orders.module.css'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import { fetchOrder, updateOrder } from '../http/orderApi'
import { useHistory } from 'react-router-dom'
import { ORDERS_ROUTE } from '../utils/const'

const Orders = observer(() => {

    const { order } = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        fetchOrder().then(data => {
            order.setOrdersCreate(data.filter(el => el.status === 'Создан'))

        })
    }, [])

    const doneOrder = async (id, dishes, status) => {
        await updateOrder(id, {}, dishes, status)
        fetchOrder().then(data => {
            order.setOrdersCreate(data.filter(el => el.status === 'Создан'))
            console.log(order.ordersCreate)

        })
        history.push(ORDERS_ROUTE)
    }
    console.log(order.ordersCreate)
    return (
        <div className={s.main}>
            <div className={s.menu}>
                <h3 className={s.title}>Заказы</h3>
                {order.ordersCreate.map(el => {
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
                                onClick={() => doneOrder(el.id, el.dishes, 'Готов')}
                                className={s.doneButton}>Сготовлено</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
})

export default Orders;