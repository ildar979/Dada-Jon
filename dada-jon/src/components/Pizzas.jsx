import listPizza from '../assets/pizzas.json';
import Pizza from './Pizza';

const Pizzas = () => {
  return (
    <>
      {listPizza.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.id} />
      ))}
    </>
  );
};

export default Pizzas;
