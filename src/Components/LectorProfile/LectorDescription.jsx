import React, { useState } from "react";
import s from "./LectorProfile.module.css";

const LectorDescription = (props) => {
  debugger
  return (
    <div className={s.Lector}>
      <div className={s.LectorDescriptionEL}>-{props.des}</div>

    </div >
  );
};
export default LectorDescription;
