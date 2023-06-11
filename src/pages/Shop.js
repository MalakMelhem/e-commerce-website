import React from 'react';
import HeaderCover from '../components/HeaderCover/HeaderCover';
import ShoppingProducts from '../components/ShoppingProducts/ShoppingProducts';
import PurchasingBanner from '../components/PurchasingBanner/PurchasingBanner';
import { Box } from '@mui/material';

const Shop = () => {
  return (
    <Box>
        <HeaderCover currentPage="Shop" />
        <ShoppingProducts />
        <PurchasingBanner />
    </Box>
  );
}

export default Shop;