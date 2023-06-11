import React, { useEffect,useState,createContext} from 'react';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';

export const productContext = createContext();

const SingleProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/0f3de519-2fb6-48e5-afc4-04bd44953a2b'); 
        const jsonData = await response.json();
        setData(jsonData);
    
        const theProduct=jsonData.find(item => {
          return item.id === parseInt(productId);
        });   
        setProduct(theProduct);

      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, [productId]);

  

  return (
  <>
    <productContext.Provider value={product}>
      <ProductDetails />
    </productContext.Provider>
    <RelatedProducts product={product} data={data}/>
  </>
  );
}

export default SingleProduct;