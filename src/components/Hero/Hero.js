import React from 'react';
import style from './Hero.module.css';
import heroImg from './HeroImg/Rocket-single-seater1.png';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


const Hero = () => {
  return (
    <Box className={style.hero}>
        <Box className={style.headerContainer}>
          <Box className={style.contentContainer}>
            <Box className={style.content}>
                <Typography component="h1" className={style.mainTitle}>Rocket single seater</Typography>
               <Box className={style.mainLink}><CoreLinkBtn to="/" text="View More" /></Box> 
            </Box>
          </Box>
            <Box className={style.imgContainer}>
                <img src={heroImg} alt="hero cover"/>
            </Box>
        </Box>
    </Box>
  )
}

export default Hero;