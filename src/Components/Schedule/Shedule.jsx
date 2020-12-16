import React, { useState } from 'react';
import Header from '../Header/Header';
import s from "./Shedule.module.css"

const Shedule = (props) => {
  return (
    <div className={s.Shedule}>
      <Header />
      <div className={s.SheduleBlock}>
        <div className={s.DaysL}>
          <div className={s.Monday}>fdfd</div>
          <div className={s.Wednesday}>dfd</div>
          <div className={s.Friday}>fdf</div>
        </div>
        <div className={s.DaysR}>
          <div className={s.Tuesday}>fdfd</div>
          <div className={s.Thursday}>dfd</div>
          <div className={s.Saturday}>fdf</div>
        </div>
      </div>
    </div>
  )

}
export default Shedule