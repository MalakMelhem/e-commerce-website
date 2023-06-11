import React,{useContext,useState} from 'react';
import AsideDescAttach from '../AsideDescAttach/AsideDescAttach';
import style from './AsideDesc.module.css';
import RatingBox from '../RatingBox/RatingBox';
import Counter from '../Counter/Counter';
import Color from '../Color/Color';
import AddToCart from '../AddToCart/AddToCart';
import { productContext } from '../../pages/SingleProduct';
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


const AsideDesc = () => {
  const product=useContext(productContext);
  const [quantity, setQuantity] = useState(1);

   
  return (
    <Box className={style.asideDesc}>
        <h2 className={style.title}>{product? product.name: <TextSkeleton />}</h2>
        {product? <h3 className={style.price}>$ {product.price }</h3> :<TextSkeleton />}
        {product? <RatingBox rating={product.rating} />:<TextSkeleton />}
        {product? <p className={style.desc}>{product.desc}</p> :<><TextSkeleton /><TextSkeleton /></>}
        <Box>
          <h4>size</h4>
          {product? <button className={style.sizeBtn}>{product.size}</button>: <SizeBtnSkeleton />}
        </Box>
        <Box className={style.colorBox}>
          <h4>colors</h4>
            <Box className={style.colors}>
            {product ? product.colors.map((color,index)=><Color key={index} paint={color}/>) : <ColorBtnSkeleton />}
            </Box>
        </Box>
        <Box className={style.btns}>
          <Counter quantity={quantity} setQuantity={setQuantity}/> 
          {product ? <AddToCart product={product} quantity={quantity} setQuantity={setQuantity}/>:<BtnSkeleton />}
        </Box>
        <AsideDescAttach />
    </Box>
  );
}

export default AsideDesc;

const TextSkeleton = () => {
  return(
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
  );
}
const SizeBtnSkeleton = () => {
  return(
    <Skeleton className={style.sizeBtnSkeleton} variant="rectangular" />
  );
}

const ColorBtnSkeleton = () => {
  return(
    <Skeleton variant="circular" width={40} height={40} />
  );
}

const BtnSkeleton = () => {
  return(
    <Skeleton className={style.btnSkeleton} variant="rectangular" width={150} height={40} />
  );
}