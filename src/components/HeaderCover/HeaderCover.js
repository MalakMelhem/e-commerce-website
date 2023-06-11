import React from 'react';
import style from './HeaderCover.module.css';
import logo from './hcImg/Meubel House_Logos-05.png';
import BreadCrumbLink from '../BreadCrumbLink/BreadCrumbLink';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
const HeaderCover = ({currentPage}) => {
  return (
    <Box className={style.headerCover}>
        <Box className={style.content}>
          <Box className={style.logo}>
            <img src={logo} alt="header cover"/>
          </Box>
          <Typography component="h2" className={style.title}>{currentPage}</Typography>
          <Box>
            <BreadCrumbLink currentPage={currentPage}/>
          </Box>
        </Box>
    </Box>
  )
}

export default HeaderCover;