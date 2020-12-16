import React from 'react';
import s from "../Admin.module.css";

const DbGroup = (props) => {
  debugger
  return (
    <div className={s.GroupsBlock}>
      <div className={s.GroupTitle}>{props.name}</div>
      <div className={s.GroupInfo}>
        <div className={s.GroupLead}>Староста: {props.leader}</div>
        <div className={s.GroupContact}>
          {props.tel != null ?
            <div className={s.GroupTel}>+{props.tel}</div> : <div ></div>}
          {props.email != null ? <div className={s.GroupEmail}>{props.email}</div> : <div ></div>}
        </div>
        <div className={s.GroupNumber}>Кількість студентів у групі:{props.num}</div>
      </div>
    </div>)
}
export default DbGroup