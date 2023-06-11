import React from 'react';
import style from './ContactBanner.module.css';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
const ContactBanner = () => {
  return (
    <Box className={style.contactBanner}>
        <Box className={style.content}>
            <Typography component="h2">Our Instagram</Typography>
            <Typography component="p">Follow our store on Instagram</Typography>
        </Box>
        <button>Follow Us</button>
    </Box>
  )
}

export default ContactBanner;