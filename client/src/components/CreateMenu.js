import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { fetchDish, updateDish } from '../http/dishApi'
import { Context } from '../index'
import s from '../styles/CreateMenuStyle.module.css'

const CreateMenu = observer(() => {

    const { dish } = useContext(Context)
    const [dishList, setDishList] = useState([])
    const [menuList, setMenuList] = useState([])


    useEffect(() => {

        fetchDish().then(data => {
            dish.setDishes(data)

            setMenuList(dish.dishes.filter(el => el.inMenu === true))
            setDishList(dish.dishes.filter(el => el.inMenu === false))
        })

    }, [])

    const delItem = async (id, name, amount, products, inMenu) => {
        await updateDish(id, name, amount, products, inMenu)

        await fetchDish().then(data => { dish.setDishes(data) })
        setMenuList(dish.dishes.filter(el => el.inMenu === true))
        setDishList(dish.dishes.filter(el => el.inMenu === false))

    }

    const addItem = async (id, name, amount, products, inMenu) => {
        await updateDish(id, name, amount, products, inMenu)

        await fetchDish().then(data => { dish.setDishes(data) })
        setMenuList(dish.dishes.filter(el => el.inMenu === true))
        setDishList(dish.dishes.filter(el => el.inMenu === false))
    }

    return (

        <div className={s.main}>
            <div className={s.prodList}>
                <h2>Блюда</h2>
                {dishList.map(el => {
                    return (
                        <div key={el.id} className={s.itemDish}>
                            <h3>{el.name}<span>{`${el.amount} руб`}</span></h3>
                            <button
                                onClick={() => addItem(el.id, el.name, el.amount, el.products, true)}
                                className={s.addButton}>Добавить</button>
                        </div>
                    )
                })}
            </div>

            <div className={s.menu}>
                <h2>Меню</h2>
                {menuList.map(el => {
                    return (
                        <div key={el.id} className={s.itemDish}>
                            <h3>{el.name}<span>{`${el.amount} руб`}</span></h3>
                            <button
                                onClick={() => delItem(el.id, el.name, el.amount, el.products, false)}
                                className={s.delButton}>Удалить</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
})

export default CreateMenu;