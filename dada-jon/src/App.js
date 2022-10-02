import '../src/scss/app.scss';
import Categories from './components/Categories';
import Header from './components/Header';
import Pizzas from './components/Pizzas';
import Sort from './components/Sort';

function App() {
  return (
    <div className="wrapper">
      <Header />
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
    </div>
  );
}

export default App;
