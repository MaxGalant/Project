import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import s from "./LectorProfile.module.css"
import user from "../../Img/user.png"
import Axios from 'axios';
import HeaderContainer from '../Header/HeaderContainer';
import LectorDescription from './LectorDescription';

const LectorProfile = (props) => {
  const [lector, setLector] = useState(props.Profile)
  const [des, setDes] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/lector/" + props.id).then(Response => {
      console.log(Response)
      setLector(Response.data[0])
      if (Response.data[0].Description != null) {
        setDes(Response.data[0].Description.split("."))
      }
    })
  }, []
  )
  let Des = des.map((d) => (
    <LectorDescription des={d} />

  ))
  console.log(Des)
  return (
    <div className={s.LectorProfile}>
      <HeaderContainer />
      <div className={s.LectorProfileBlock}>
        <div className={s.LectorInfo}>
          <img src={user} alt="" className={s.LectorImg} />
          <div className={s.LectorName}>{lector.FullName}</div>
          <div className={s.LectorCafedra}>Кафедра {lector.Cafedra}</div>
          {lector.email != null ?
            <div className={s.LectorEmail}> {lector.email}</div> : null}
          {lector.tel != null ?
            <div className={s.LectorPhone}> + {lector.tel}</div> : null}
        </div>
        <div className={s.LectorInterests}>

          <div className={s.LectorDescriptionTitle}>Відомості про викладача</div>
          {Des.length > 0 ?
            <div className="">{Des}</div> : <div className={s.LectorDescriptionErrr}>Oopps</div>}
        </div>
      </div>
    </div>)

}
export default LectorProfile