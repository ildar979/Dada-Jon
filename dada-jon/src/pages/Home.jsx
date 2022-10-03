import React from 'react';
import Categories from '../components/Categories';
import Pizzas from '../components/Pizzas';
import Sort from '../components/Sort';

const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <Pizzas />
        </div>
      </div>
    </div>
  );
};

export default Home;
