import React from 'react';
import style from './PurchasingBanner.module.css';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const PurchasingBannerData=[{title:"Free Delivery",desc:"For all oders over $50, consectetur adipim scing elit."},{title:"90 Days Return" ,desc:"If goods have problems, consectetur adipim scing elit."},{title:"Secure Payment", desc:"100% secure payment, consectetur adipim scing elit."}];

const PurchasingBanner = () => {
  return (
    <Box className={style.purchasingBanner}>
      {PurchasingBannerData.map((data,index)=>(<PurchasingContainer key={index} title={data.title} desc={data.desc}/>)) }
    </Box>
  );
}

export default PurchasingBanner;

const PurchasingContainer=({title,desc})=>{
    return(
        <Box className={style.content}>
            <Typography component="h3">{title}</Typography>
            <Typography component="p">{desc}</Typography>
        </Box>
    );
}