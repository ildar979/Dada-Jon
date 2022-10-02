import React, { useEffect, useState } from 'react';
import Pizza from './Pizza';
import PizzaSkeleton from './PizzaSkeleton';

const Pizzas = () => {
  const URL = 'https://633980e0383946bc7ff42d80.mockapi.io/items';

  const [listPizza, setListPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setListPizza(data), setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading
        ? [...new Array(10)].map((index) => <PizzaSkeleton key={index} />)
        : listPizza?.map((pizza) => <Pizza pizza={pizza} key={pizza.id} />)}
    </>
  );
};

export default Pizzas;
