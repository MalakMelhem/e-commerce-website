import React from 'react';
import { Box } from '@mui/material';
import HeaderCover from '../components/HeaderCover/HeaderCover';
import PurchasingBanner from '../components/PurchasingBanner/PurchasingBanner';
import CartDetails from '../components/CartDetails/CartDetails';

const Cart = () => {
  return (
    <Box>
       <HeaderCover currentPage="Cart" />
       <CartDetails />
       <PurchasingBanner />
    </Box>
  );
}

export default Cart;