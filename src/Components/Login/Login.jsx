import React, { useState } from 'react';
import Axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import s from "./Login.module.css"

const Login = (props) => {
  const [userNameLog, setNameLog] = useState("")
  const [passwordLog, setPasswordLog] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  Axios.defaults.withCredentials = true
  function Login(e) {
    Axios.post("http://localhost:3001/api/login", { userName: userNameLog, password: passwordLog }).then((Response) => {
      if (Response.data.message) {
        setMessage(Response.data.message)
      }
      else {
        console.log(Response)
        setStatus(Response.data.status)
      }
    }
    )
  }
  if (status == 1) return <Redirect to='/home' />
  return (
    <div className={s.Login}>
      <div className={s.LoginBlock}>
        <div className={s.LogTitle}>SA124</div>
        <div className={s.Email}>
          <input type="text" placeholder="Username" onChange={(e) => { setNameLog(e.target.value) }} /></div>
        <div className={s.Email}>
          <input type="password" placeholder="Password" onChange={(e) => { setPasswordLog(e.target.value) }} /></div>
        <div className={s.Message}>{message}</div>
        <button className={s.LogBut} onClick={Login}>Login</button>
        <div className={s.Line}></div>
        <div className={s.Text}>Or create an account:<NavLink to="/registration"> Register</NavLink></div>
      </div>
    </div >

  )

}

export default Login
//browserslist