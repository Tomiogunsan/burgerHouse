import Header from './component/Layout/Header'
import './App.css';
import AvailableBurger from './component/Meals/AvailableBurger';

import Cart from './component/Cart/Cart'



import CartProvider from './store/CartProvider';
import { useState } from 'react';

function App() {
  const[cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  
  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Header onShowCart={showCartHandler}/>
      <AvailableBurger />
       
      
      
   </CartProvider>
  );
}

export default App;
