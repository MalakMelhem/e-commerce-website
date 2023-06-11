import { Box, Typography } from '@material-ui/core';
import React from 'react';
import img from './nfImg/Granite-square-side-table1.png';
import style from './NotFound.module.css';
import CoreBasicBtn from '../CoreBasicBtn/CoreBasicBtn';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate();
  return (
    <Box  className={style.notFound}>
        <Box className={style.desc}>
            <Typography component='h3'>ERROR PAGE</Typography>
            <Typography component='h2'>404</Typography>
            <Typography component='p'>The page you are looking for doesn't exist. It may have been moved or removed altogether. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</Typography>
            <CoreBasicBtn name="Back To Home" onClick={()=>navigate('/')}/>
        </Box>
        <Box className={style.img}>
            <img src={img} alt='not found image'/>
        </Box>
    </Box>
  );
}

export default NotFound;