import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart,setShowCart] = useState(false);
  function showCartHandler(){
    setShowCart(true)
  }
  function hideCartHandler(){
    setShowCart(false);
  }
  
  return (
    <CartProvider>
    {showCart && <Cart onClose={hideCartHandler}></Cart>} 
      <Header onClickCartButton={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
