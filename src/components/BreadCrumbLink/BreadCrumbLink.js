import React from 'react';
import {Link} from 'react-router-dom';
import style from './BreadCrumbLink.module.css';
import { Box } from '@mui/material';

const BreadCrumbLink = ({currentPage}) => {
  return (
    <Box className={style.breadCrumbLink}>
        <Link to="/">Home</Link><p> <span> &gt; </span>{currentPage}</p>
    </Box>
  );
}

export default BreadCrumbLink;