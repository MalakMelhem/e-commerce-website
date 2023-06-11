import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import style from './Blogs.module.css';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import PostCard from '../PostCard/PostCard';
import { useState } from 'react';
import blogsData from './blogsData';
import { Box } from '@mui/material';

const ThreeBlogs = blogsData.slice(0, 3);
const Blogs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Box className={style.blogs}>
        <Box>
            <SectionHeading title="Our Blogs" desc="Find a bright ideal to suit your taste with our great selection" />
        </Box>
        <Box className={style.content}>
        {isExpanded ? (
          <>
            {blogsData.map((blog)=>(<PostCard key={blog.id} {...blog}/>))}
          </>
        ) : (
          <>
            {ThreeBlogs.map((blog)=>(<PostCard  key={blog.id} {...blog}/>))}
          </>
        )}
            
        </Box>
        <Box className={style.tail}>
            <CoreLinkBtn to="/" text={isExpanded ? 'View Less' : 'View All Post'} onClick={toggleExpand}/>
        </Box>
    </Box>
  )
}

export default Blogs;