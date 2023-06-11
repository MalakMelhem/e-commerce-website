import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import useStyles from './RatingBoxStyle';

const RatingBox = ({rating}) => {
  const classes = useStyles();
  return (
    <div className={classes.ratingBox}>
        <BasicRating rating={rating}/>
        <Typography component="p" className={classes.review}>5 Customer Review</Typography>
    </div>
  );
}
export default RatingBox;

function BasicRating({rating}) {
    const [value, setValue] = useState(rating);
    const classes = useStyles();
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          className={classes.ratingBasic}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
  }