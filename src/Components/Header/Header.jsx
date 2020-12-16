import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css"
import Axios from 'axios';

const Header = (props) => {
  function LogOut() {

  }
  function Popup(el) {
    el.currentTarget.children[0].style.display = "block"
  }
  function PopupEnd(el) {

    el.currentTarget.style.display = "none"
  }


  return (
    <div className={s.Header}>
      <div className={s.Main}>
        <div className={s.Home}>

          <NavLink to="/home" activeClassName={s.active}>Головна</NavLink>
        </div>
        <div className={s.Contact}>

          <NavLink to="/close" activeClassName={s.active}>Контакти</NavLink>
        </div>
        <div className={s.About}>
          <NavLink to="/close" activeClassName={s.active}>Про Нас</NavLink></div>
        <div alt="" className={s.Menu} onClick={Popup} >☰
          <div className={s.PopupBlock} id="popup" onMouseLeave={PopupEnd}>
            <div className={s.PopupEl}>
              <NavLink to="/profile">Profile</NavLink> </div>
            <div className={s.PopupEl}><NavLink to="/lectors">Lectors</NavLink> </div>
            <div className={s.PopupEl}> <NavLink to="/groups" >Groups</NavLink></div>
            <div className={s.PopupEl}>
              {props.role == "admin" && <div ><NavLink to="/adminmiddleware">Admin</NavLink> </div>}
            </div> {props.AuthStatus ?
              <NavLink to="/login" onClick={LogOut} className={s.logout}>LogOut</NavLink> : null}


          </div>
        </div>
      </div>

    </div>
  )
}
export default Header