import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
        // Update quantity of existing item in the cart
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
      }else{
         // Add new item to the cart
        const order={...product, quantity};
        setCartItems((prevCartItems) => [...prevCartItems, order]);
      }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId,quantity)=>{
    setCartItems((prevCartItems)=>
    prevCartItems.map(item=>{
    if(item.id===productId)return{...item,quantity}
    return item;
  })

  );

}
  // Calculate subtotal for each item
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };
  
  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += calculateSubtotal(item);
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, calculateTotal,calculateSubtotal,updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
