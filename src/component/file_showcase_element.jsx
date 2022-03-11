import React from 'react';

export const FanElement = (props) => {

 const { mainId, displayName, displayDescription, price, displayAssets, addToBasket  = Function.prototype } = props;
 
  const { full_background } = displayAssets[0];
  const { regularPrice } = price;
    return (
  <div className="card" >
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>

      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p> {displayDescription}</p>
      </div>

    <div className="card-action">
         <button className="btn" onClick={() => 
           addToBasket({ mainId, displayName, regularPrice})
     } >Купить</button>
         <span className="right">Price:{regularPrice}</span>
    </div>
    
    </div>
  ); 

};
