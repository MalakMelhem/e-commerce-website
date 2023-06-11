import React,{useContext} from 'react';
import style from './CartAD.module.css';
import { Box, Typography } from '@mui/material';
import CoreBasicBtn from '../CoreBasicBtn/CoreBasicBtn';
import { CartContext } from '../CartContext/CartContext';

const CartAsideDetails = () => {
  const {cartItems, calculateTotal}=useContext(CartContext);

  return (
    <Box className={style.cartAsideDetails}>
        <Typography component="h2">Cart Totals</Typography>
        <Box className={style.container}>
            <Typography component="h3">Subtotal</Typography>
            <Typography component="h4" className={style.textSubtotal}>$ {cartItems.length && calculateTotal()}</Typography>
        </Box>
        <Box className={style.container}>
            <Typography component="h3">Total</Typography>
            <Typography component="h4" className={style.textTotal}>$ {cartItems.length && calculateTotal()}</Typography>
        </Box>
        <Box className={style.btnContainer}>
            <CoreBasicBtn name="Check Out"/>
        </Box>
    </Box>
  );
}

export default CartAsideDetails;

