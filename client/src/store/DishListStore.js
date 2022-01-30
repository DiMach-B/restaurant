import {makeAutoObservable} from 'mobx'

export class DishListStore {

    constructor () {
        this._dishes = []
        makeAutoObservable(this)
    }

    setDishes (dishes) {
        this._dishes = dishes
    }

    get dishes (){
        return this._dishes
    }

}