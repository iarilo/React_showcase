import React, { useState, useEffect } from 'react'
import { FanShowcaselist } from '../component/file_showcase_list';
import { API_KEY, API_URL } from '../config';
import { FanPreloader } from '../component/preloader';
import { Cart } from '../component/Cart';
import { FanCardList } from '../component/Card-list';

export const FanShop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBascetShow] = useState(false);
 

  const addToBasket = (item) => {
    //console.log('item => ', item)
    const itemIndex = order.findIndex(
      orderItem => orderItem.mainId === item.mainId
      );

     console.log('itemIndex => ', itemIndex)//itemIndex =>  0
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder(order => [...order, newItem]);
      //console.log('newItem => ', newItem)//quantity: 1 

    } else {
      const newOrder = order.map((orderItem, index) => {
        // console.log('orderItem => ', orderItem)//quantity: 3
        // console.log('index => ', index)//index =>  0
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
     // console.log('newOrder => ', newOrder)// {mainId: 'Glider_ID_228_CelestialFemale', displayName: 'Астрономия', regularPrice: 800, quantity: 4}
      setOrder(newOrder);
    }
  };

  const handleBascetShow = () => {
    setBascetShow(!isBasketShow);
  };

  const removeBasket = (itemId) => {
    //console.log('itemId =>', itemId)
    const removeId = order.filter(el => el.mainId !== itemId);
    setOrder(removeId)
  };

  // 7:30

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY, }, })
      .then(respons => respons.json())
      .then(data => { data.shop && setGoods(data.shop) });
    setLoading(false);

  }, []);

  return (
    <main className="conteiner_main">
      <Cart quantity={order.length}
        handleBascetShow={handleBascetShow}
      />

      {/*  <FanShowcaselist content={goods} />  */}
      {/* <FanPreloader />  */}

      {loading
        ? (<FanPreloader />)
        : (<FanShowcaselist goods={goods} addToBasket={addToBasket}

        />)}

      {isBasketShow && <FanCardList
        order={order}
        handleBascetShow={handleBascetShow}
        removeBasket={removeBasket} />}

    </main>
  )
}

