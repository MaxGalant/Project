import React, { useState } from "react";
import s from "./Lectors.module.css";
import user from "../../Img/user.png";
import { NavLink } from "react-router-dom";

const Lector = (props) => {
  return (
    <div className={s.Lector}>
      {props.photo != null ?
        <img className={s.LectorImg} src={`data:image/png;base64,${props.photo}`} alt="" /> : <img className={s.LectorImg} src={user} alt="" />}
      <div className={s.LectorTitle}>
        <NavLink to={"/lector/" + props.lectorId}>{props.name}</NavLink>
      </div>
      <div className={s.LectorCafedra}>  <NavLink to="/lector">Кафедра {props.cafedra}</NavLink>
      </div>
    </div>
  );
};
export default Lector;
