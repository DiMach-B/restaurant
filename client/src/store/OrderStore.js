import {makeAutoObservable} from 'mobx'

export class OrderStore {

    constructor () {
        this._orders = []
        this._ordersCreate = []
        this._ordersDone = []
        this._ordersSend = []
        this._ordersDishes = []
        makeAutoObservable(this)
    }

    setOrders (orders) {
        this._orders = orders
    }

    get orders (){
        return this._orders
    }
    
    setOrdersCreate (ordersCreate) {
        this._ordersCreate = ordersCreate
    }

    get ordersCreate (){
        return this._ordersCreate
    }

    setOrdersDone (ordersDone) {
        this._ordersDone = ordersDone
    }

    get ordersDone (){
        return this._ordersDone
    }

    setOrdersSend (ordersSend) {
        this._ordersSend = ordersSend
    }

    get ordersSend (){
        return this._ordersSend
    }
    
    setOrdersDishes (ordersDishes) {
        this._ordersDishes = ordersDishes
    }

    get ordersDishes (){
        return this._ordersDishes
    }

}