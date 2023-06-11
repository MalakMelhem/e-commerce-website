import { Box } from '@mui/material';
import React from 'react';
import CartMainDetails from '../CartMainDetails/CartMainDetails';
import CartAsideDetails from '../CartAsideDetails/CartAsideDetails';
import style from './CartDetails.module.css';

const CartDetails = () => {
  return (
    <Box className={style.cartDetails}>
        <CartMainDetails />
        <CartAsideDetails />
    </Box>
  );
}

export default CartDetails;