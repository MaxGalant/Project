import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../Redux/AuthReduser'
class HeaderContainer extends React.Component {
  componentDidMount() {


    Axios.get("http://localhost:3001/login").then((Response) => {
      if (Response.data.loggedIn == true) {
        let { ID, userName, password, userRole } = Response.data.user[0]
        this.props.setAuthUserData(ID, userName, password, userRole)
      }
    })

  }






  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({

  AuthStatus: state.AuthPage.AuthStatus,
  role: state.AuthPage.role
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)