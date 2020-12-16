import React, { useState } from 'react';
import Axios from 'axios';
import s from "./Registration.module.css"
import { NavLink } from 'react-router-dom';

const Registration = (props) => {
  const [userNameReg, setNameReg] = useState("")
  const [userGroupReg, setGroupReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [passwordReg1, setPasswordReg1] = useState("")
  const [message, setMessage] = useState("")

  Axios.defaults.withCredentials = true
  function Register() {
    if (passwordReg == passwordReg1 && passwordReg1.length > 6 && passwordReg1.length < 32 && userNameReg > 0 && userGroupReg > 0) {

      Axios.post("http://localhost:3001/api/register", { userName: userNameReg, password: passwordReg, group: userGroupReg }).then(() => {
      }
      )

    }
    else if (userNameReg <= 0) {
      setMessage("Введіть ім'я")
    }
    else if (userGroupReg <= 0) {
      setMessage("Введіть групу")
    }
    else if (passwordReg1.length < 6) {
      setMessage("Пароль повинен бути більше 6 символів")
    }
    else if (passwordReg1.length > 32) {
      setMessage("Пароль повинен бути більше 6 символів і менший 32 символів")
    }
    else if (passwordReg !== passwordReg1) {
      setMessage("Пароль не збігається")
    }
  }
  function UserNameReg(e) {
    setNameReg(e.target.value)
  }
  function UserGroupNameReg(e) {
    setGroupReg(e.target.value)
  }
  function PasswordNameReg(e) {
    setPasswordReg1(e.target.value)
  }
  function PasswordTestReg(e) {
    setPasswordReg(e.target.value)
  }


  return (
    <div className="">
      <div className={s.Registration}>
        <div className={s.RegistrationBlock}>
          <div className={s.RegTitle}>SA124</div>
          <div className={s.Email}>
            <input type="text" placeholder="Username" onChange={UserNameReg} /></div>
          <div className={s.Group}>
            <input type="text" placeholder="Your Group" onChange={UserGroupNameReg} /></div>
          <div className={s.Password}>

            <input type="password" placeholder="Password" onChange={PasswordNameReg} />
          </div>
          <div className={s.PasswordReg}>
            <input type="password" placeholder="Enter password one more time" onChange={PasswordTestReg} />
          </div>
          <div className={s.Message}>{message}</div>
          <button className={s.RegBut} onClick={Register}>Register</button>
          <div className={s.Line}></div>
          <div className={s.Text}>Already have an account?<NavLink to="/login"> Login</NavLink></div>
        </div></div>
    </div >

  )

}

export default Registration
//browserslist