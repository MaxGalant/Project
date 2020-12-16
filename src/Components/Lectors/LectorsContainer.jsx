import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SetLectors } from '../../Redux/LectorsReduser';
import Lectors from './Lectors';




let mapStateToProps = (state) => {
  return {
    Lectors: state.LectorsPage.Lectors,
    Status: state.LectorsPage.lpStatus
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setLectors: (lectors) => {
      dispatch(SetLectors(lectors))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lectors)