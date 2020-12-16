import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import LectorsReduser from "./LectorsReduser";
import LectorProfileReduser from "./LectorProfileReducer"
import AuthReduser from "./AuthReduser";
import GroupsReduser from "./GroupsReduser";
import UsersReduser from "./UserReduser";
let Redusers= combineReducers({
  LectorsPage:  LectorsReduser,
  GroupsPage:  GroupsReduser,
  UsersPage:UsersReduser,
  LectorProfilePage:LectorProfileReduser,
  AuthPage:AuthReduser
})
const store =createStore(
  Redusers
)
window.store = store;
export default store