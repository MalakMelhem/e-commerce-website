import React from 'react';
import style from './RandomProducts.module.css';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import img1 from './rpImg/Granite-square-side-table1.png';
import img2 from './rpImg/Cloud-sofa-three-seater-ottoman_31.png';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


const RandomProducts = () => {
  return (
    <Box className={style.rpContainer}>
        <ProductCard img={img1} title="Side table" to="/" text="View More"/>
        <ProductCard img={img2} title="Side table" to="/" text="View More"/>
    </Box>
  )
}

export default RandomProducts;


const ProductCard = ({img,title,to,text}) => {
  return (
    <Box className={style.productCard}>
        <Box className={style.imgContainer}>
            <img src={img} alt="product image"/>
        </Box>
        <Box className={style.content}>
            <Typography component="h2">{title}</Typography>
            <CoreLinkBtn to={to} text={text}/>
        </Box>
    </Box>
  );
}
