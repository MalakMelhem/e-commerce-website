import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const SkeletonProduct = () => {
  const style={margin:'1.5em',}
  return (
  <>
    <Box style={style}>
      <Skeleton variant="rectangular" width={230} height={210} />
      <Skeleton width={200} />
      <Skeleton width={100} />
    </Box>
  </>
  );
}

export default SkeletonProduct;