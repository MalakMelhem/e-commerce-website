import React,{useContext,useState,useEffect} from 'react';
import style from './ProductImages.module.css';
import { productContext } from '../../pages/SingleProduct';
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const ProductImages = () => {
  const product=useContext(productContext);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if(product)
      setCurrentImage(product.items[0]);
  }, [product]);
  
  return (
    <Box className={style.productImages}>
        <Box className={style.asideImages}>
            {product ? 
            product.items.map((item,index)=><AsideImage key={index} img={item} onClick={() => setCurrentImage(item)}/>) 
            : 
           
            Array.from({ length: 4 }, (index) => ( <AsideImageSkeleton key={index} />)) 
            
            } 
        </Box>
        {currentImage ? 
          <MainImage img={currentImage}/> 
          : 
          <MainImageSkeleton />
          } 
    </Box>
  );
}
export default ProductImages;

const MainImage = ({img}) => {

    return (
      <Box className={style.mainImage}>
         <img src={img} alt="main product image"/>
      </Box>
    );
  }

  const AsideImage = ({img,onClick}) => {
    return (
      <Box className={style.asideImage}>
         <img src={img} alt="aside product image" onClick={onClick}/>
      </Box>
    );
  }


  const MainImageSkeleton = () => {
    return (
      <Box className={style.mainImage}>
         <Skeleton className={style.mainImageSkeleton} variant="rectangular" height={450} width={420}/>
      </Box>
    );
  }
  const AsideImageSkeleton = () => {
    return (
      <Box className={style.asideImage}>
         <Skeleton className={style.asideImageSkeleton} variant="rectangular" width='76px' height='80px' />
      </Box>
    );
  }