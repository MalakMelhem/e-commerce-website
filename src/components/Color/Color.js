import React from 'react';
import style from './Color.module.css';

const Color = ({paint}) => {
  return (
    <button className={style.colorBtn} style={{backgroundColor:paint}}></button>
  );
}

export default Color;