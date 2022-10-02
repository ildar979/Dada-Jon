import React, { useEffect, useState } from 'react';
import Pizza from './Pizza';

const Pizzas = () => {
  const URL = 'https://633980e0383946bc7ff42d80.mockapi.io/items';

  const [listPizza, setListPizza] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setListPizza(data));
  }, []);

  return (
    <>
      {listPizza?.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.id} />
      ))}
    </>
  );
};

export default Pizzas;
