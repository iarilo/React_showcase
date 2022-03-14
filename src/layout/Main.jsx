import React, { useState, useEffect } from 'react';
import { FanShowcaselist } from '../component/file_showcase_list';
import { API_KEY, API_URL } from '../config';
import { FanPreloader } from '../component/preloader';
import { Cart } from '../component/Cart';
import { FanBaskedList } from '../component/Baskrd-list';
import { FunAlert } from '../component/File_Alert';

export const FanShop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  //состояние иконки корзины
  const [isBasketShow, setBascetShow] = useState(false);
  //alert
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    // получаю индекс эллемента массива
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );
    // проверка на наличие товара
    if (itemIndex < 0) {
      // создаю новый объект с полем  quantity: 1,
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]); //Добавление нового объекта
      // Если индекс = 0
    } else {
      // нахожу соответствующий элемент и меняю значение поле quantity
      const newOrder = order.map((orderItem, index) => {
        //console.log(orderItem)
        // если индекс элл. равен индексу элл. массива
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder); // отправляю новый массив в стэйт
    }
    setAlertName(item.displayName);
  };
  // состояние показа иконки корзины
  const handleBascetShow = () => {
    setBascetShow(!isBasketShow);
  };
  const removeBasket = (itemId) => {
    //console.log('itemId =>', itemId)
    const removeId = order.filter((el) => el.mainId !== itemId);
    setOrder(removeId);
  };

  //=========================================================
  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
 };
  const decQuantity = (itemId) => {


     const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
              const newQuantity = el.quantity - 1;
              return {
                ...el,
                quantity: newQuantity >= 0 ? newQuantity : 0,
              };
            } else {
              return el;
            }
          });
          setOrder(newOrder);  
  };

  //========================================================
  //fun. alert
  const closeAlert = () => {
    setAlertName('');
  };
  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((respons) => respons.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
      });
    setLoading(false);
  }, []);

  return (
    <main className="conteiner_main">
      <Cart quantity={order.length} handleBascetShow={handleBascetShow} />
      {loading ? (
        <FanPreloader />
      ) : (
        <FanShowcaselist goods={goods} addToBasket={addToBasket} />
      )}
      {/* появдение и исчезание корзины */}
      {isBasketShow && (
        <FanBaskedList
          order={order}
          handleBascetShow={handleBascetShow}
          removeBasket={removeBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && (
        <FunAlert displayName={alertName} closeAlert={closeAlert} />
      )}
    </main>
  );
};
