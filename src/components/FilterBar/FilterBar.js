import React, { useEffect } from 'react';
import style from './FilterBar.module.css';
import TuneIcon from '@mui/icons-material/Tune';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import BasicSelect from '../BasicSelect/BasicSelect';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import useStyles from './filterBarStyle';
import Menu from '@mui/material/Menu';
import FilterMenu from '../FilterMenu/FilterMenu';
import { useState,useContext} from 'react';
import {dataContext,viewContext} from '../ShoppingProducts/ShoppingProducts';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const FilterBar = ({products}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [data, setData] = useContext(dataContext);
  const [filteredData,setFilteredData]=useState([]);
  const [limit,setLimit]=useState(30);
  const [isViewSolo,setIsViewSolo]=useContext(viewContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setLimit(event.target.value);
  };
  
const handleLimiting=(event)=>{
  setData(filteredData.slice(0, event.target.value));
}

const handleToggle = (value) => {
  setIsViewSolo(value);
};


useEffect(() => {
 setFilteredData([...products]);
}, [products]);


  const classes = useStyles();
  return (
    <Box className={style.filterBar}>
        <Box className={style.leftSide}>
          <Box className={style.iconsBtn}> 
            <IconButton onClick={handleClick}><TuneIcon className={style.icon}/><h4>Filter</h4></IconButton>
            <Menu id="basic-menu" className={classes.menu} anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button', }}>
              <FilterMenu setFilteredData={setFilteredData} products={products}/>
            </Menu>
            <Tooltip title="View grid"><IconButton onClick={()=>handleToggle(false)}><GridViewRoundedIcon className={style.icon}/></IconButton></Tooltip>
            <Tooltip title="View List"><IconButton onClick={()=>handleToggle(true)}><ViewDayOutlinedIcon className={style.icon}/></IconButton></Tooltip>
          </Box>
          <Box className={style.resultDesc}>
           {data.length? <p>Showing 1–{data.length} of 30 results</p>: <p>No results</p>}
          </Box>
        </Box>
        <Box className={style.rightSide}>
          <Box className={style.selectNum}>
            <Typography component="h3">Show</Typography>
            <TextField id="outlined-number" value={limit} onChange={handleChange} onBlur={handleLimiting} className={classes.numOfProducts}  type="number"  InputLabelProps={{shrink: true,}}/>
          </Box>
          <Box className={style.selectType}>
            <Typography component="h3">Sort by</Typography>
            <BasicSelect />
          </Box>
        </Box>
    </Box>
  )
}

export default FilterBar;



