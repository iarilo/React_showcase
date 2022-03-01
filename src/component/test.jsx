

import React from "react";

export const FanTest = () => {
  return(
    <div>

    </div>
  )
}

/* const [goods, setGoods] = useState([]);
const [loading, setLoading] = useState(true);
const [order, setOrder] = useState([]);
const [isBasketShow, setBasketSow] = useState(false);
const [alertName, setAlertName] = useState('');

const addToBasket = (item) => {
  const itemIndex = order.findIndex(
    (orderItem) => orderItem.id === item.id
  );

  if (itemIndex < 0) {
    const newItem = {
      ...item,
      quantity: 1,
    };
    setOrder([...order, newItem]);
  } else {
    const newOrder = order.map((orderItem, index) => {
      if (index === itemIndex) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });

    setOrder(newOrder);
  }
 
}; */

