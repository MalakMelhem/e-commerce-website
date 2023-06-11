import React from 'react';
import useStyles from './CoreSmallBtnStyle';
import {Button} from '@material-ui/core';

const CoreSmallBtn = ({text,onClick}) => {
    const classes = useStyles();
  return (
    <Button className={classes.coreSmallBtn} onClick={onClick}>{text}</Button>
  );
}

export default CoreSmallBtn;