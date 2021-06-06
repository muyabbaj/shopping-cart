import React from 'react';

const NavBar = ({ setSearch }) => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>Shopping Cart</div>
        <input
          type='text'
          placeholder='Search Product'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default NavBar;
