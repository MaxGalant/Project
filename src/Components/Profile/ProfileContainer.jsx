import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/AuthReduser';
import Profile from './Profile';
class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get("http://localhost:3001/login").then((Response) => {
      console.log(Response)
      if (Response.data.loggedIn == true) {
        let { ID, userName, password, userRole, group, photo } = Response.data.user[0]
        this.props.setAuthUserData(ID, userName, password, userRole, group, photo)
      }
    })
  }
  render() {
    return <Profile {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  Auth: state.AuthPage,
})
export default connect(mapStateToProps, { setAuthUserData })(ProfileContainer)