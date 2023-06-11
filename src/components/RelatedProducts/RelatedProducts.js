import React,{useState,useEffect} from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import style from './RelatedProducts.module.css';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import { Box} from '@mui/material';
import SkeletonProduct from '../SkeletonProduct/SkeletonProduct';

const RelatedProducts = ({product,data}) => {
  const [productRelated, setProductRelated] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const theProductRelated=data.filter((item) =>item.category === product.category);
    setProductRelated(theProductRelated);
  }, [product]);

  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Box className={style.relatedProducts}>
        <SectionHeading title="Related Products"/>
        <Box className={style.container}>

        {productRelated.length===0?
        Array.from({ length: 4 }, (index) => ( <SkeletonProduct key={index} />))

        : 
          
          isExpanded ? 
          (productRelated.map((product)=>
          <FurnitureCard key={product.id} {...product}/>))
            :
            (productRelated.slice(0, 4).map((product)=>
          <FurnitureCard key={product.id} {...product}/>))
           

        }
        </Box>
        <Box className={style.tail}>
            <CoreLinkBtn to="/" text={isExpanded ? 'View Less' : 'View More'} onClick={toggleExpand}/>
        </Box>
        
    </Box>
  );
}

export default RelatedProducts;