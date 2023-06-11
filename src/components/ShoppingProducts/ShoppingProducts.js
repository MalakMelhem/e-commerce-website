import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import PaginationRounded from '../PaginationRounded/PaginationRounded';
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import style from './ShoppingProducts.module.css';
import { useState ,useEffect, createContext} from 'react';
import { Box } from '@mui/material';
import SkeletonProduct from '../SkeletonProduct/SkeletonProduct';


export const dataContext = createContext();
export const viewContext = createContext();

const ShoppingProducts = () => {
  const [data, setData] = useState([]);
  const [products,setProducts]=useState([]);
  const [page, setPage] = useState(1); // Current page
  const itemsPerPage = 12; // Number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [isViewSolo,setIsViewSolo]=useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  // Calculate start and end index for current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get data for current page
  const paginatedData = data.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/bbe6ae4e-7fdb-49bd-8318-f6f4be02de2c'); 
        const jsonData = await response.json();
        setData(jsonData);
        setProducts(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
       <dataContext.Provider value={[data, setData]}>
        <viewContext.Provider value={[isViewSolo,setIsViewSolo]}>
        <FilterBar products={products}/>
        </viewContext.Provider>
        </dataContext.Provider>
        <ProductsContainer paginatedData={paginatedData} isViewSolo={isViewSolo} isLoading={isLoading}/>
        <PaginationRounded count={totalPages} page={page} onChange={handlePageChange} />
    </Box>
  );
}
export default ShoppingProducts;
 
const ProductsContainer =({paginatedData,isViewSolo,isLoading})=>{
  return(
    <Box className={`${style.productsContainer} ${isViewSolo? style.viewSoloProduct: ''}`}>
      {isLoading? 
      Array.from({ length: 12 }, (index) => (
      <SkeletonProduct key={index} />))
      :
     paginatedData.map((product)=><FurnitureCard key={product.id} {...product}/>)}
    </Box>

  );
}