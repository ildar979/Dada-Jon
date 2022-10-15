import React, { useContext, useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import PizzaSkeleton from '../components/PizzaSkeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';

const Home = () => {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;
  const dispatch = useDispatch();

  const [listPizza, setListPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);

  const order = sortType.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  const handleChangeCategory = (i) => {
    dispatch(setCategoryId(i));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://633980e0383946bc7ff42d80.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setListPizza(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeleton = [...new Array(4)].map((index) => <PizzaSkeleton key={index} />);
  const item = listPizza?.map((pizza) => <Pizza pizza={pizza} key={pizza.id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={handleChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : item}</div>
      <Pagination />
    </div>
  );
};

export default Home;
