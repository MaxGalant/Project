import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import LectorProfile from './LectorProfile';
import { setLectorProfile } from '../../Redux/LectorProfileReducer';
import { withRouter } from 'react-router-dom';

const LectorProfileContainer = (props) => {
  let id = props.match.params.lectorId
  return (
    <div >
      <LectorProfile id={id} Profile={props.Profile} />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    Auth: state.AuthPage.AuthStatus,
    Profile: state.LectorProfilePage.Profile,
  }
}
let WR = withRouter(LectorProfileContainer)

export default connect(mapStateToProps, { setLectorProfile })(WR)