const SET_USERS = "Lectors/SET_USERS";
let InitialState={
  Users:[],
  upStatus:"201"
}
const UsersReduser=(State=InitialState,action)=>{
    switch (action.type){
      case SET_USERS:{
        return{
          ...State,
          Users: action.users
        }
      }
    default: return State
    }
}
export let SetUsers=(users)=>{
  return{
    type:SET_USERS,
    users
  }
}
export default UsersReduser