import React from 'react';
import style from './FurnitureCard.module.css';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";


const FurnitureCard = ({id,name,price,items}) => {
  const navigate = useNavigate();
  return (
    <Box className={style.furnitureCard}>
      <Box className={style.imgContainer}>
        <img src={items[0]} alt={name}  onClick={()=>navigate(`/singleProduct/${id}`)}/>
      </Box>
      <Box className={style.description}>
        <Typography component="h4">{name}</Typography>
        <Typography component="h3">${price}</Typography>
      </Box>
    </Box>
  )
}

export default FurnitureCard;