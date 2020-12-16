import React, { useState } from "react";
import s from "../Admin.module.css";
import user from "../../../Img/user.png";
const DbUsers = (props) => {
  return (
    <div className={s.Db}>
      {props.photo != null ?
        <img className={s.DbImg} src={`data:image/png;base64,${props.photo}`} alt="" /> : <img className={s.DbImg} src={user} alt="" />}
      <div className={s.DbTitle}>
        {props.name}
      </div>
      <div className={s.DbCafedra}>
        <div className="">{props.role}</div>
        <div className="">{props.group}</div>
      </div>
      <div className={s.DelButton}></div>
    </div>
  );
};
export default DbUsers;


