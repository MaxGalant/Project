import React, { useEffect, useState } from 'react';
import s from "./Lectors.module.css"
import Header from '../Header/Header';
import Lector from './Lector';
import Axios from 'axios';
import Preloader from '../Other/Preloader';
import HeaderContainer from '../Header/HeaderContainer';

const Lectors = (props) => {
  const [status, setStatus] = useState(props.Status)
  const [lectors, setLector] = useState([props.Lectors])
  useEffect(() => {
    Axios.get("http://localhost:3001/api").then(Response => {
      setLector(Response.data)
      console.log(Response)
      setStatus(Response.status)
      debugger
    })
  }, [])
  let Lec = lectors.map((p) => (
    <Lector key={p.ID} photo={p.Photo} name={p.FullName} cafedra={p.Cafedra} lectorId={p.ID} />

  ));
  return (
    <div className={s.Lectors}>
      {status != 200 ? <Preloader /> :
        <div>
          <HeaderContainer />
          <div className={s.LectorsContainer}>
            <div className={s.LectorsTitle}>Викладачі</div>
            <div className={s.LectorBlock}>{Lec}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
export default Lectors