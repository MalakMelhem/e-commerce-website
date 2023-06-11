import React from 'react';
import ProductTopNav from '../ProductTopNav/ProductTopNav';
import MainDetails from '../MainDetails/MainDetails';
import MoreDetails from '../MoreDetails/MoreDetails';
import { Box } from '@mui/material';

const ProductDetails = () => {
  return (
    <Box>
        <ProductTopNav />
        <MainDetails />
        <MoreDetails />
    </Box>
  );
}

export default ProductDetails;