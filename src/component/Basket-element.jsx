import React from 'react';

export const FanBaskedElement = (props) => {
  
 
   const { mainId, displayName, regularPrice,
    quantity, removeBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
    return (
    <li className="collection-item acyive">
   <div className="name">
        {displayName} x {quantity} =  {regularPrice * quantity} руб
     </div>
    <div className="container_icon">
        <i className='material-icons basket-qantity'
          onClick={() => decQuantity(mainId)}
        >remove
        </i>
        <i className='material-icons basket-qantity'
          onClick={() => incQuantity(mainId)}
        >add
        </i>
      </div>
      <span className="secondary-content"
        onClick={() => removeBasket(mainId)}>
        <i className="material-icons">close</i>
      </span>
    </li>
  ) 

}

