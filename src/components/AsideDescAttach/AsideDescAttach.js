import React,{useContext} from 'react';
import style from './AsideDescAttach.module.css';
import img1 from './adImg/VectorFacebook.png';
import img2 from './adImg/Vector.png';
import img3 from './adImg/VectorTwitter.png';
import { Box } from '@mui/material';
import { productContext } from '../../pages/SingleProduct';
import Skeleton from '@mui/material/Skeleton';

const AsideDescAttach = () => {

  const product=useContext(productContext);
  if(product){
    const {SKU,category,tags}=product;
  return (
    <Box className={style.asideDescAttach}>
        <Attachments title="SKU" desc={SKU} key='sku'/>
        <Attachments title="Category" desc={category} key='category'/>
        <Attachments title="Tags" desc={tags.map((tag)=>`${tag},`)} key='tags'/>
        <Attachments title="Share" desc={<><img src={img1}/><img src={img2}/><img src={img3}/></>} key='share'/>
    </Box>
  );
}else{
    return (
      Array.from({ length: 4 }, (index) => ( <TextSkeleton  key={index} />)) 
    );
  }
  
}
  
export default AsideDescAttach;

const Attachments = ({title,desc}) => {
    return (
    <Box className={style.attachments}>
        <p className={style.title}>{title}</p><p>:</p><p className={style.desc}>{desc}</p>
    </Box>
    );
  }

  const TextSkeleton = () => {
    return(
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    );
  }