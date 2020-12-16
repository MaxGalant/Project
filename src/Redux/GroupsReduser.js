const SET_GROUPS = "Groups/SET_GROUPS";
const SET_STATUS = "Groups/SET_STATUS";



let InitialState={
  
  Groups:[],
  gStatus:"201"
}
const GroupsReduser=(State=InitialState,action)=>{
    switch (action.type){
      case SET_GROUPS:{
        debugger
        return{
          ...State,
          Groups: action.groups
        }
      
      }
      case SET_STATUS:{
        return{
          ...State,
          gStatus:action.status
        }
      }
    default: return State
    }
}
export let setGroupsStatus=(status)=>{
  return{
    type:SET_STATUS,
    status
  }
}
export let SetGroups=(groups)=>{
  return{
    type:SET_GROUPS,
    groups
  }
}
export default GroupsReduser