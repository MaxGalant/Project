import React, { useState } from "react";
import s from "./Profile.module.css";
import user from "../../Img/user.png";
import { NavLink } from "react-router-dom";
import HeaderContainer from '../Header/HeaderContainer';

const Profile = (props) => {
  debugger

  return (
    <div className={s.Profile}>
      <HeaderContainer />
      <div className={s.ProfileBlock}>
        {props.Auth.photo != null ?
          <img src src={`data:image/png;base64,${props.Auth.photo}`} className={s.ProfileImg}></img> : <img src={user} className={s.ProfileImg} />}
        <div className={s.ProfileInfo}>
          <div className={s.ProfileName}>{props.Auth.name}</div>
          <div className={s.ProfileGroup}>{props.Auth.group}</div>
          {props.Auth.role != "admin" ?
            <div className={s.ProfileRole}>{props.Auth.role}</div> :
            <NavLink className={s.ProfileRoleA} to="/adminmiddleware">{props.Auth.role}</NavLink>
          }
        </div>
      </div>
    </div>
  );
};
export default Profile;
