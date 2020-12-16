const SET_LECTORS = "Lectors/SET_LECTORS";


let InitialState={
  Lectors:[],
  lpStatus:"201"
}
const LectorsReduser=(State=InitialState,action)=>{
    switch (action.type){
      case SET_LECTORS:{
        return{
          ...State,
          Lectors: action.lectors
        }
      
      }
    default: return State
    }
}
export let SetLectors=(lectors)=>{
  return{
    type:SET_LECTORS,
    lectors
  }
}
export default LectorsReduser