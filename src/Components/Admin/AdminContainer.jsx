import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/AuthReduser';
import { SetLectors } from '../../Redux/LectorsReduser';
import AdminTest from './AdminMiddleWare';
class AdminContainer extends React.Component {
  componentDidMount() {
    Axios.get("http://localhost:3001/login").then((Response) => {
      if (Response.data.loggedIn == true) {
        let { ID, userName, password, userRole, group, photo } = Response.data.user[0]
        this.props.setAuthUserData(ID, userName, password, userRole, group, photo)
      }
    })
  }
  render() {
    return <AdminTest {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  Users: state.UsersPage,
  Auth: state.AuthPage,
  Lectors: state.LectorsPage.Lectors
})
export default connect(mapStateToProps, { SetLectors, setAuthUserData })(AdminContainer)