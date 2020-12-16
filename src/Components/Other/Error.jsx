import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';



const Error = (props) => {
  if (props.Auth) return <Redirect to="/home" />
  return (
    <div className="">

      <h1>Error</h1>
      <NavLink to="login">Login</NavLink>
    </div>
  )
}
export default Error