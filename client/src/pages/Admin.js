import s from '../styles/AdminStyle.module.css'
import { createProduct } from '../http/productApi';
import { useState } from 'react';

const Admin = () => {

const [type, setType] = useState('')
const [name, setName] = useState('')
let quantity = 5
const create = (name, quantity) => {
    createProduct(name, quantity).then( () => {
        setType('')
        setName('')
    })
}

    return (
        <div className={s.main}>
            <div className={s.input}>
                <h4 className={s.title}>Добавление продуктов</h4>
                <div>
                    <input value={type} placeholder="Тип продукта" onChange={e => setType(e.target.value)}/>
                    <input value={name} placeholder="Название продукта" onChange={e => setName(e.target.value)}/>
                </div>
                <button onClick={() => create(name, quantity) }>Добавить</button>
            </div>
        </div>
    )

}

export default Admin;