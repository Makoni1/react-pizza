import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
// import pizzas from './assets/pizzas.json';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:2323/pizzas')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  
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
            {items.map((obj) => (
              <PizzaBlock
                // title={obj.title}
                // price={obj.price}
                // imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
