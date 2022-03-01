import React from 'react';
import {FanElement} from './file_showcase_element';

export const FanShowcaselist = (props) => {
  const { goods = [], addToBasket  = Function.prototype } = props;
 
 /*  if (!content.length) {
    return( <h4>Ошибка</h4>)
  } */

  return (
   <div className='conteiner_list'>
      {goods.map(list =>{return <FanElement 
         key={list.mainId} {...list} addToBasket={addToBasket }
      />})}  
    </div>
  )
}
