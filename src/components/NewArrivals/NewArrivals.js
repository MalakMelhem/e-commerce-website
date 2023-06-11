import React from 'react';
import style from './NewArrivals.module.css';
import img from './naImg/Asgaard-sofa1.png'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
const NewArrivals = () => {
  return (
    <Box className={style.newArrivals}>
        <Box className={style.imgContainer}>
            <img  src={img} alt="a furniture image"/>
        </Box>
        <Box className={style.content}>
            <Typography component="h3">New Arrivals</Typography>
            <Typography component="h2">Asgaard sofa</Typography>
            <button>Order Now</button>
        </Box>
    </Box>
  )
}
export default NewArrivals;