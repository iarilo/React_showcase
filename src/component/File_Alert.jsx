import React,{useEffect } from 'react'

export const Fun_Alert = (props) => {
  
   const { displayName = '', closeAlert = Function.prototype } = props;
 useEffect(() => {
    const timer = setTimeout( closeAlert,  2000);
    return () => {
      clearTimeout(timer);
    };
    //eslint-disable-next-line
  },[displayName]);
  return (
    <div id='toast-container'>
      <div className="toast">
        {displayName}  добавлен в корзину
        </div>
      </div>
  ) 


}
