import * as React from 'react'
import { useState, useContext } from 'react';
import {Button, Divider } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import useStyles from './FilterMenuStyle';
import {dataContext} from '../ShoppingProducts/ShoppingProducts';

const availableCategories = ['chair', 'armchair', 'table','pouffe','nightstand','ottoman','sofa','sideboard'];
const availableTags = ['trend','wood','brown','office','straw','red','yellow','handmade','storage','rattan','new','white','birch','tallmyra','gray','outdoor','livingroom','gunnared','beige','knisa','cover','katorp','natural','walnut','veneer','blue','glass','green','bench'];

export default function FilterMenu({setFilteredData,products}) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [data, setData] = useContext(dataContext);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTagChange = (event) => {
    setSelectedTags(event.target.value);
    const { value } = event.target;
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter(tag => tag !== value));
    } else {
      setSelectedTags([...selectedTags, value]);
    }
  };

  const handleFilter = () => {
    // Perform filtering logic based on selectedCategory and selectedTags
     // Filtering logic
     const filteredProducts = products.filter(product => {
      // Check if the selected category matches
      const isCategoryMatch = selectedCategory === '' || product.category === selectedCategory;
      // Check if at least one selected tag matches
      const isTagMatch = selectedTags.length === 0 || selectedTags.some(tag => product.tags.includes(tag));
      return isCategoryMatch && isTagMatch;
    });
    
    // Process the filtered products as needed
    setData(filteredProducts);
    setFilteredData(filteredProducts);
  };
  
  const classes = useStyles();
  return (
    <Box className={classes.filterMenu}>

      <FormControl className={classes.selectfilterMenu}>
      <InputLabel shrink={selectedCategory !== ''}>Filter by Category</InputLabel>
      <Select className={classes.select} value={selectedCategory} onChange={handleCategoryChange}>
        {availableCategories.map((category) => (
          <MenuItem key={category} value={category}>{category}</MenuItem>))}
      </Select>
      </FormControl>

      <Divider />

      <Box className={classes.tagesContainer}>
      {availableTags.map((tag) => (
        <FormControlLabel
        className={classes.checkbox}
          key={tag}
          control={
            <Checkbox
              checked={selectedTags.includes(tag)}
              onChange={handleTagChange}
              value={tag}
            />
          }
          label={tag}
        />
      ))}
      </Box> 

      <Button variant="contained" onClick={handleFilter} className={classes.filterBtn}>
        Apply
      </Button>
    </Box>
  );
}

