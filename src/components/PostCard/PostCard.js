import React from 'react'
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import style from './PostCard.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const PostCard = ({coverImg,date,time,title}) => {
  return (
    <Box className={style.postCard}>
      <Box className={style.postImg}><img src={coverImg} /></Box>
      <Box className={style.content}>
        <Typography component="h3" className={style.title}>{title}</Typography>
        <Box className={style.link}><CoreLinkBtn to="/" text="Read More" /></Box>
        <Box className={style.timeAndDate}>
          <ul>
            <li><AccessTimeIcon />{time}</li>
            <li><CalendarTodayIcon />{date}</li>
          </ul>
        </Box>
      </Box>
    </Box>
  )
}

export default PostCard;