import React from 'react';
import ProductImages from '../ProductImages/ProductImages';
import AsideDesc from '../AsideDesc/AsideDesc';
import style from './MainDetails.module.css';
import { Box } from '@mui/material';

const MainDetails = () => {
  return (
    <Box className={style.mainDetails}>
        <ProductImages />
        <AsideDesc />
    </Box>
  );
}

export default MainDetails;