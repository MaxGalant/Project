import React, { useEffect, useState } from "react";
import s from "./Admin.module.css";
import user from "../../Img/user.png";
import HeaderContainer from '../Header/HeaderContainer';
import Axios from "axios";
import DbLector from "./DataBase/DbLectors";
import DbUsers from "./DataBase/DbUsers";
import DbGroup from "./DataBase/DbGroup";
import Preloader from "../Other/Preloader";

const Admin = (props) => {
  const [name, setName] = useState("")
  const [cafedra, setcafedra] = useState("")


  const Submit = () => {
    Axios.post("http://localhost:3001/api/insert", { FullName: name, Cafedra: cafedra }).then(() => {
      alert("Successful")
    })
  }
  const [statusLec, setStatusL] = useState(props.Status)
  const [lectors, setLector] = useState([props.Lectors])
  Axios.get("http://localhost:3001/api/").then(Response => {
    setLector(Response.data)
    setStatusL(Response.status)
  })
  var Lec
  if (lectors[0] != undefined) {
    Lec = lectors.map((p) => (
      <DbLector key={p.ID} photo={p.Photo} name={p.FullName} cafedra={p.Cafedra} lectorId={p.ID} />
    ));
  }
  const [statusUser, setStatusU] = useState(props.Status)
  const [users, setUsers] = useState([props.Users])
  useEffect(() => {
    Axios.get("http://localhost:3001/users").then(Response => {
      setUsers(Response.data)
      setStatusU(Response.status)
    })
  }, [])
  var User
  if (users[0] != undefined) {
    User = users.map((p) => (
      <DbUsers key={p.ID} photo={p.photo} name={p.userName} role={p.userRole} group={p.group} />

    ));
  }
  const [statusGroups, setStatusG] = useState(props.Status)
  const [groups, setGroups] = useState([props.Users])
  Axios.get("http://localhost:3001/groups").then(Response => {
    setGroups(Response.data)
    setStatusG(Response.status)
  })
  var Group
  if (groups[0] != undefined) {
    Group = groups.map((g) => (
      <DbGroup name={g.name} leader={g.leader} tel={g.tel} email={g.email} num={g.number} />
    ));
  }


  return (
    <div className={s.Profile}>
      <HeaderContainer />
      <div className={s.ProfileBlock}>
        <div className={s.AdminInfo}>
          {props.Auth.photo != null ?
            <img src src={`data:image/png;base64,${props.Auth.photo}`} className={s.ProfileImg}></img> : <img src={user} className={s.ProfileImg} />}
          <div className={s.ProfileInfo}>
            <div className={s.ProfileName}>{props.Auth.name}</div>
            <div className={s.ProfileGroup}>{props.Auth.group}</div>
          </div>
        </div>
      </div>
      <div className={s.DbBlock}>
        <div className={s.DbLectors}>
          <div className={s.DbLectorsTitle}>Викладачі</div>
          {statusLec != 200 ? <Preloader /> :
            <div>

              <div className={s.LectorBlock}>{Lec}</div>
            </div>}</div>
        <div className={s.DbUsers}>
          <div className={s.DbLectorsTitle}>Користувачі</div>
          {statusLec != 200 ? <Preloader /> :
            <div className="">
              {<div className={s.UsersBlock}>
                {User}</div>}</div>}
        </div>
        <div className={s.DbGroups}>
          <div className={s.DbLectorsTitle}>Групи</div>
          {statusLec != 200 ? <Preloader /> :
            <div className=""> {Group}</div>}
        </div>

      </div>
    </div>
  );
};
export default Admin;
