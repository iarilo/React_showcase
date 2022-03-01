import React from 'react';
import {FanCardElement} from './Card-element';

export const FanCardList = (props) => {
  const { order = [], 
    handleBascetShow = Function.prototype, 
    removeBasket = Function.prototype} = props;
  //console.log('props => ', props)
  const totalPrice = order.reduce((sum,el) => {
    return (sum + el.regularPrice * el.quantity);
  },0);
  return (
    <ul className="collection basket-list ">
      <li  className="collection-item active">Корзина</li>
      {order.length 
      ? order.map(item => (
        <FanCardElement
         key={item.mainId}
                 {...item} 
          removeBasket={removeBasket}
      />)) 
        : <li className="collection-item acyive">Корзина пуста</li>   
    }
      <li className="collection-item active">Общая стоимость: {totalPrice} руб</li>
      <i className='material-icons bascet-close'
       onClick={handleBascetShow }>
         close
      </i>
    </ul>
  )
}
