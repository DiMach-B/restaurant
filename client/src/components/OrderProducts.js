import { useState } from 'react';
import s from '../styles/OrderProductsStyle.module.css'

const OrderProducts = () => {

    const [products, setProducts] = useState([])
    const [quantity, setQuantity] = useState('')
    const [name, setName] = useState('')

    const addProduct = () => {
        setProducts([...products, { name: '', quantity: '', number: Date.now() }])
    }

    const delProduct = (number) => {
        setProducts(products.filter(el => {
            return el.number !== number
        })
        )
    }

    const orderProduct = () => {
        setQuantity('')
        setName('')
        setProducts([])
    }

    return (
        <div className={s.main}>
            <div className={s.input}>
                <h4 className={s.title}>Заказ продуктов</h4>
                <div>
                    <input value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Введите название продукта'></input>
                    <input value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        placeholder='Введите коли-во кг/ед продукта'></input>
                </div>
                {products.map(el => {
                    return (
                        <div key={el.number}>
                            <input placeholder='Введите название продукта'></input>
                            <input placeholder='Введите коли-во кг/ед продукта'></input>
                            <button
                                onClick={() => delProduct(el.number)}
                                className={s.delButton}>Удалить</button>
                        </div>
                    )
                })}
                <div className={s.buttons}>
                    <div> <button
                        onClick={addProduct}
                        className={s.addButton}>Добавить</button>
                    </div>
                    <div> <button className={s.orderButton}
                        onClick={orderProduct}
                    >Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderProducts;