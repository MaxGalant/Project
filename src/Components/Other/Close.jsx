import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import s from "./Other.module.css"



const Close = (props) => {
  return (
    <div className={s.Close}>
      <Header />
    </div>
  )
}
export default Close