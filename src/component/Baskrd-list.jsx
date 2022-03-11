import React from 'react';
import { FanBaskedElement } from './Basket-element';

export const FanBaskedList = (props) => {
 const { order = [], 
      handleBascetShow = Function.prototype, 
      removeBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
    } = props;

  
    const totalPrice = order.reduce((sum,el) => {
    return (sum + el.regularPrice * el.quantity);  
    },0);
    
    
    return (
      <ul className="collection basket-list ">
        <li  className="collection-item active">Корзина</li>
        {order.length  ? order.map(item => (
          <FanBaskedElement key={item.mainId} {...item} 
            removeBasket={removeBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
        />)) 
          : <li className="collection-item acyive">Корзина пуста</li>   
      }
        <li className="collection-item active">Общая стоимость: {totalPrice} руб
       
        </li>

        <i className='material-icons bascet-close'
         onClick={handleBascetShow }>
           close
        </i>
      </ul>
    ) 

}
