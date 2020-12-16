
import React, { useEffect, useState } from 'react';
import s from "./Home.module.css"
import Schedule from "../../Img/schedule.png"
import Shop from "../../Img/shopping.png"
import Stud from "../../Img/hat.png"
import Logo from "../../Img/Logo.png"
import { NavLink } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';

function Check() {
   let c = document.getElementById("But")
   let input = document.getElementById("switch")
   if (input.checked === true) {
      setTimeout(() => {
         c.style.display = "flex"
      }, 650)
   }
   else {
      c.style.display = "none"
   }
}
function Hover(e) {
   e.currentTarget.parentElement.children[1].style.display = "flex"
   e.currentTarget.parentElement.style.width = "210px"
   e.currentTarget.parentElement.style.gridTemplateColumns = "1fr 0.6fr"
}
function HoverEnd(e) {
   let a = e.currentTarget
   setTimeout(() => {
      a.style.gridTemplateColumns = " 0.6fr 1fr"
      a.children[1].style.display = "none"
      a.style.width = "90px"
   }, 200)
}
const Home = (props) => {
   return (
      <div className={s.Home}>  <HeaderContainer />
         <div className={s.Introdaction}>
            <div className={s.IntroText}>SA124</div>
            <div className={s.IntroLine}></div>
            <div className={s.IntroSubText}>Сайт для студентів системного аналізу ЛНУ</div>
         </div>
         <div className={s.HomeBlock} >
            <div className={s.HomeNav}>
               <div className={s.Schedule} onMouseLeave={HoverEnd}>
                  <img className={s.ScheduleImg} src={Schedule} alt="" id="Hov" onClick={Hover} />
                  <div className={s.ScheduleText} >
                     <NavLink to="schedule">Розклад</NavLink>
                  </div>
               </div>
               <div className={s.Shop} onMouseLeave={HoverEnd}>
                  <img className={s.ShopImg} src={Shop} alt="" onClick={Hover} />
                  <div className={s.ShopText} ><NavLink to="/close">Store</NavLink> </div>
               </div>
               <div className={s.Stud} onMouseLeave={HoverEnd}>
                  <img className={s.StudImg} src={Stud} alt="" onClick={Hover} />
                  <div className={s.StudText} > <a href="https://students.lnu.edu.ua/self-government/">Студ Рада</a> </div>
               </div>
            </div>
            <div className={s.HomeLNU}>
               <img src={Logo} alt="" className={s.LnuImg} />
               <div className={s.LnuText}>
                  Львівський національний університет імені Івана Франка</div>
            </div>
         </div>
         <div className={s.Button}>
            <div className={s.ButtonBlock}> <input type="checkbox" id="switch" onClick={Check} />
               <label for="switch">Toggle</label>
               <div className={s.ButText} id="But">Це сайт створений студентами <br></br> для студентів.Тут ви зможете<br></br>  подивитися свій розклад,<br></br>  інформацію про викладачів<br></br>  та про інші групи з нашої<br></br> прекрасної спеціальності.</div>
            </div>
         </div>
      </div>
   );
}
export default Home;
