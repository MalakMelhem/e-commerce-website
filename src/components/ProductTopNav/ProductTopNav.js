import React ,{useContext} from 'react';
import {Link} from 'react-router-dom';
import style from './ProductTopNav.module.css';
import { productContext } from '../../pages/SingleProduct';
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const ProductTopNav = () => {
  const product=useContext(productContext);
  return (
    <Box className={style.productTopNav}><Link to="/">Home</Link><span> &gt; </span><Link to="/shop">Shop</Link><span> &gt; </span><p>{product? product.name:<TopNavSkeleton />}</p></Box>
  );
}
export default ProductTopNav;

const TopNavSkeleton = () => {
  return (
    <Skeleton variant="text" sx={{ fontSize: '1rem',width:'200px' }} />
  );
}