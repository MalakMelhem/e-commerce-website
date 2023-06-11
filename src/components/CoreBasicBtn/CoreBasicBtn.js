import React from 'react';
import style from './CoreBasicBtn.module.css';

const CoreBasicBtn = ({onClick,name}) => {
  return (
    <button className={style.coreBasicBtn} onClick={onClick}>{name}</button>
  );
}

export default CoreBasicBtn;