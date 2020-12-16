const SET_LECTOR_PROFILE="LectorProfile/SET_LECTOR_PROFILE"

let InitialState={
  Profile:[],
  lpStatus:"201"
}
const LectorProfileReduser=(State=InitialState,action)=>{
    switch (action.type){
      case SET_LECTOR_PROFILE:{
        return{
          ...State,
          Profile:action.profile
        }
      }
    default: return State
    }
}
export let setLectorProfile=(profile)=>{
  return{
    type:SET_LECTOR_PROFILE,
    profile
  }
}
export default LectorProfileReduser