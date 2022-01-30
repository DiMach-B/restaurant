import s from '../styles/ChefStyle.module.css'
import { createDish } from '../http/dishApi';
import { fetchProduct } from '../http/productApi';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';


const Chef = observer(() => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { prododuct } = useContext(Context)

    useEffect(() => {
        fetchProduct().then((data) => prododuct.setProducts(data))

    }, [])

    useEffect(() => {

    }, [prododuct.addproducts])


    const create = ( name, amount, products) => {
        createDish( name, amount, products, false).then(() => {
            setAmount('')
            setName('')
            prododuct.setAddproducts([])
        })
    }

    const addProduct = (id, name, quantity) => {
        prododuct.setAddproducts([...prododuct.addproducts, { id, name, quantity}])
        console.log(prododuct)
    }

    const delProduct = (id) => {
        prododuct.setAddproducts(prododuct.addproducts.filter(el => {
            return el.id !== id
        })
        )
    }

    return (
        <div className={s.main}>
            <div className={s.input}>
                <h4 className={s.title}>Добавление блюд</h4>
                <div className={s.createDish}>
                    <div className={s.dish}>
                        <h2>Создание</h2>
                        <div>
                            <input value={name} placeholder="Название" onChange={e => setName(e.target.value)} />
                            <input value={amount} placeholder="Цена" onChange={e => setAmount(e.target.value)} />
                        </div>
                        <h2>Ингредиенты</h2>
                        {prododuct.addproducts.map(el => {
                            return (
                                <div key={el.number} className={s.itemProductadd}>
                                <h3>{el.name}</h3>
                                <button
                                onClick={() => delProduct (el.id)}
                                    className={s.delButton}>
                                    Удалить</button>
                            </div>
                            )
                        })
                        }

                        <button className={s.createButton} onClick={() => create(name, amount, prododuct.addproducts)}>Создать</button>
                    </div>
                    <div className={s.products}>
                        <h2 style={{ marginLeft: '30px' }}>Добавление продуктов</h2>
                        {prododuct.products.map(el => {
                            return (
                                <div key={el.id} className={s.itemProduct}>
                                    <h3>{el.name}</h3>
                                    <button
                                        onClick={() => addProduct(el.id, el.name, el.quantity)}
                                        className={s.addButton}>
                                        Добавить</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Chef;