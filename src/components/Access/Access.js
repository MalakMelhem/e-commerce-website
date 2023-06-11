import { Box } from '@mui/material';
import React from 'react';
import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';
import style from './Access.module.css';

const Access = () => {
  return (
    <Box className={style.access}>
        <LogIn />
        <Register />
    </Box>
  );
}

export default Access;