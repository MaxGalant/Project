import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import Preloader from '../Other/Preloader';
import Group from './Group';
import s from "./Groups.module.css"
const Groups = (props) => {
  const [groups, setGroups] = useState(props.Groups.Groups)
  const [status, setStatus] = useState(props.Groups.gStatus)

  useEffect(() => {
    Axios.get("http://localhost:3001/groups").then((Response) => {
      setGroups(Response.data)
      setStatus(Response.status)
      debugger
    })
  }, [])

  let Gro = groups.map((g) => (
    <Group name={g.name} leader={g.leader} tel={g.tel} email={g.email} num={g.number} />
  ))
  debugger

  return (
    <div className={s.Groups}>
      {status != 200 ? <Preloader /> :
        <div>
          <HeaderContainer />
          <div className={s.GroupContainer}>{Gro}</div>
        </div>}
    </div>
  )

}
export default Groups