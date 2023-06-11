import React,{useContext} from 'react';
import { Box } from '@mui/material';
import style from './CartMD.module.css';
import CartedRowData from '../CartedRowData/CartedRowData';
import { CartContext } from '../CartContext/CartContext';


const CartMainDetails = () => {
  const { cartItems, calculateTotal } = useContext(CartContext);

  return (
    <Box className={style.cartMainDetails}>
        <Box className={style.header}>
            <HeaderFields />
        </Box>
        <Box>
          
        {cartItems.length ? cartItems.map((item,index)=> 
          <CartedRowData key={index} product={item}/>)
        :
          null
        } 
        </Box>
    </Box>
  );
}

export default CartMainDetails;

const HeaderFields = () => {
    return (
            <ul className={style.headerFields}>
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
            </ul>
       
    );
  }