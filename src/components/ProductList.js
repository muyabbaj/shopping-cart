import React from 'react';

const Product = ({ id, title, category, img, price, addCartItem }) => {
  return (
    <div className='card'>
      <img src={img} alt='title' />
      <div className='card-details'>
        <h5 className='title'>{title}</h5>
        <p className='category'>{category}</p>
      </div>
      <div className='card-footer'>
        <p className='price'>{price}</p>
        <button className='btn' onClick={() => addCartItem(id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

const ProductList = ({ products, addCartItem }) => {
  return (
    <div className='product-list'>
      {products.length === 0
        ? 'Search item is not available'
        : products.map((product) => (
            <Product {...product} addCartItem={addCartItem} key={product.id} />
          ))}
    </div>
  );
};

export default ProductList;
