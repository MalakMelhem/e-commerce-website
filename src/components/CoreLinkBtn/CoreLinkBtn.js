import React from 'react';
import { Link } from "react-router-dom";
import style from './CoreLinkBtn.module.css';


const CoreLinkBtn = ({to,text,onClick}) => {
  return (
     <Link className={style.coreLinkBtn} to={to} onClick={onClick}>{text}</Link>
  );
}

export default CoreLinkBtn;