import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useStyles from './basicSelectStyle';
import { useState, useContext } from 'react';
import {dataContext} from '../ShoppingProducts/ShoppingProducts';


export default function BasicSelect() {

  const [sortingType, setSortingType] = useState('');
  const [data, setData] = useContext(dataContext);
  let sortedProducts =[...data];

  const MenuItemData=[{value:"rating-high-to-low",text:"Rating:High to Low"},{value:"rating-low-to-high",text:"Rating:Low to High"},{value:"price-low-to-high",text:"Price: Low to High"},{value:"price-high-to-low",text:"Price: High to Low"}];

  const handleChange = (event) => {
    setSortingType(event.target.value);
    if (event.target.value === 'price-low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (event.target.value === 'price-high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }else if(event.target.value ==='rating-high-to-low'){
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }else if(event.target.value ==='rating-low-to-high'){
      sortedProducts.sort((a, b) => a.rating - b.rating);
    }
    
    setData(sortedProducts);
    
  };
  const classes = useStyles();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Default</InputLabel>
        <Select
          className={classes.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortingType}
          onChange={handleChange}
        >
          {MenuItemData.map((item,index)=>(
            <MenuItem key={index} value={item.value}>{item.text}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}