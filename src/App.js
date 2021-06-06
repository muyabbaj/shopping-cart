import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import data from './data';

function App() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([...data]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const results = data.filter((product) =>
      product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setProducts(results);
  }, [search]);

  const addCartItem = (id) => {
    const item = products.find((product) => {
      return product.id === id;
    });
    setCartItems((items) => {
      const findIndex = items.findIndex((currentItem) => currentItem.id === id);
      if (findIndex === -1) {
        return [...items, { ...item, quantity: 1 }];
      } else {
        return items.map((existingItem) =>
          existingItem.id === id
            ? {
                ...existingItem,
                quantity: parseInt(existingItem.quantity) + 1,
              }
            : existingItem
        );
      }
    });
  };
  const removeCart = (id) => {
    const withOutRemoveItem = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(withOutRemoveItem);
  };

  const clear = () => {
    const confirm = window.confirm('Are you sure you want to clear cart?');
    if (confirm) {
      setCartItems([]);
    }
  };
  return (
    <div className='App'>
      <NavBar setSearch={setSearch} />
      <ProductList products={products} addCartItem={addCartItem} />
      <Cart cartItems={cartItems} removeCart={removeCart} clear={clear} />
    </div>
  );
}

export default App;
