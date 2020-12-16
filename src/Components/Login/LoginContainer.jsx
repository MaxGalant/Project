import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setLectorProfile } from '../../Redux/LectorProfileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import Login from './Login';


class LoginContainer extends React.Component {


  componentDidMount() {




  }
  render() {
    if (this.props.status === 1) return <Redirect to={"/login"} />
    return <Login {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  status: state.AuthPage.status,
  AuthStatus: state.AuthPage.AuthStatus,
})
export default connect(mapStateToProps,)(LoginContainer)












