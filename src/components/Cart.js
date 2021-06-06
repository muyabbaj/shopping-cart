import React from 'react';

const Cartitem = ({ id, title, price, removeCart, quantity }) => {
  return (
    <div className='cart-item'>
      <span className='remove-btn' onClick={() => removeCart(id)}>
        X
      </span>
      <span className='cart-title'>
        {title} X {quantity}
      </span>
      <h4 className='cart-price'>{price * quantity}tk</h4>
    </div>
  );
};

const Cart = ({ cartItems, removeCart, clear }) => {
  const total = cartItems.reduce((preveousState, currentState) => {
    return preveousState + currentState.price * currentState.quantity;
  }, 0);
  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <Cartitem {...item} removeCart={removeCart} clear={clear} />
      ))}
      {cartItems.length === 0 ? (
        <h4 className='cart-empty'>Cart is empty</h4>
      ) : (
        <>
          <div className='cart-item'>
            <h4 className='cart-title'>Total amount:</h4>
            <h4 className='cart-price'>{total}tk</h4>
          </div>

          <div className='cart-footer'>
            <button className='cancle' onClick={() => clear()}>
              Clear
            </button>
            <button className='checkout'>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
