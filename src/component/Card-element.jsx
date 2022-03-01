import React from 'react';

export const  FanCardElement = (props) => {

  const { mainId, displayName, regularPrice, 
    quantity, removeBasket = Function.prototype  } = props;
  //console.log('props => ', props)

  return (
    <li className="collection-item acyive">
      {displayName} * {quantity} = {regularPrice * quantity} руб
      <span className="secondary-content" 
        onClick={() => removeBasket(mainId)}>
        <i className="material-icons">close</i>
      </span>
    </li>
  )
}
