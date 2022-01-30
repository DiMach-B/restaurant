import {makeAutoObservable} from 'mobx'

export class ProductsListStore {

    constructor () {
        this._products = []
        this._addproducts = []
        makeAutoObservable(this)
    }

    setProducts (products) {
        this._products = products
    }

    get products () {
        return this._products;
    }

    setAddproducts (addproducts) {
        this._addproducts = addproducts
    }

    get addproducts () {
        return this._addproducts;
    }
}