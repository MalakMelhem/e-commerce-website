import React from 'react';
import style from './Counter.module.css';

const Counter = ({quantity,setQuantity}) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  }
  
  const handleDecrement = () => {
    quantity? setQuantity(quantity - 1): setQuantity(0);
  }
  return (
    <div className={style.counter}>
        <button className={style.counterLeft} onClick={handleDecrement}>-</button>
        <button className={style.counterMiddle}>{quantity}</button>
        <button className={style.counterRight} onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;