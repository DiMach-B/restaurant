import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UserStore} from './store/UserStore'
import {DishListStore} from './store/DishListStore'
import {ProductsListStore} from './store/ProductsListStore'
import {OrderStore} from './store/OrderStore'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    prododuct: new ProductsListStore(),
    dish: new DishListStore(),
    order: new OrderStore()

  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


