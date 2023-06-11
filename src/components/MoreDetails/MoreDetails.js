import React,{useContext} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import img1 from './mdImg/ottoman_21.png';
import img2 from './mdImg/ottoman_11.png';
import style from './MoreDetails.module.css';
import useStyles from './MoreDetailsStyle';
import Reviews from '../Reviews/Reviews';
import { productContext } from '../../pages/SingleProduct';
import Skeleton from '@mui/material/Skeleton';

const MoreDetails = () => {
  return (
    <Box className={style.moreDetails}>
        <LabTabs />
    </Box>
  );
}
export default MoreDetails;


 function LabTabs() {
  const product=useContext(productContext);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Box sx={{ typography: 'body1' }} className={style.tabContainer}>
      <TabContext value={value} className={classes.tabContext}>
          <TabList onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile className={classes.tabList}>
            <Tab label="Description" value="1"/>
            <Tab label="Additional Information" value="2"/>
            <Tab label="Reviews [5]" value="3" />
          </TabList>
        
        <TabPanel value="1">
          {product? <p className={style.description}>{product.desc}</p>: <TextSkeleton />}
            <Box className={style.tabImg}>
                <Box className={style.imgContainer}><img src={img1}/></Box>
                <Box className={style.imgContainer}><img src={img2}/></Box>
            </Box>
        </TabPanel>
        <TabPanel value="2">
            <Box className={style.moreInfo}>
                <Box className={style.moreInfoContainer}>
                    <h4>WEIGHT</h4>
                    {product? <p>{product.weight}</p>: <TextSkeleton />}
                </Box>
                <Box className={style.moreInfoContainer}>
                    <h4>DIMENSIONS</h4>
                    {product? <p>{product.dimensions}</p> : <TextSkeleton />}
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value="3">
            <Box><Reviews /></Box>
        </TabPanel>

      </TabContext>
    </Box>
  );
}

const TextSkeleton = () => {
  return(
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
  );
}