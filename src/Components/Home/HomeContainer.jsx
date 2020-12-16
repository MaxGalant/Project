import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthUserData } from '../../Redux/AuthReduser';
import Home from './Home';
class HomeContainer extends React.Component {


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
    return <Home {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  AuthStatus: state.AuthPage.AuthStatus,
})
export default connect(mapStateToProps, { setAuthUserData })(HomeContainer)