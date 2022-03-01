import React from 'react';
//import { FanCardList } from '../component/Card-list';

export const Cart = (props) => {

  const { quantity, handleBascetShow = Function.prototype } = props;
 // console.log('quantity => ', quantity)
    return(
    <div className='style-cart-quantity blue darken-4 white-text' 
        onClick={handleBascetShow}
    >
      <i className="material-icons">shopping_cart</i> 
      {quantity
        ? <span className='cart-quantity'>{quantity}</span> 
       : null}

    
    </div>
  )
}
