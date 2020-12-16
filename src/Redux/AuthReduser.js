const SET_USERS_DATA="Auth/SET_USERS_DATA"
const SET_STATUS="Auth/SET_STATUS"
let InitialState={
  userId:null,
  name:null,
  password:null,
  role:null,
  group:null,
  photo:null,
  AuthStatus: false,
  status:0
}
const AuthReduser=(State=InitialState,action)=>{
    switch (action.type){
      case SET_USERS_DATA:{
        return{
          ...State,
          ...action.data,
          AuthStatus:true 
        }
      }
      case SET_STATUS:{
        return{
          ...State,
          status:1
        }
      }
    default: return State
    }
}
export let setAuthUserData=(userId,name,password,role,group,photo)=>{
  return{
    type:SET_USERS_DATA,
    data: {userId,name,password,role,group,photo}  }
}
export let setStatus=(status)=>{
  return{
    type:SET_STATUS,
    status
  }
}
export default AuthReduser