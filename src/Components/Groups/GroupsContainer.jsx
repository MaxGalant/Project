import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { SetGroups, setGroupsStatus } from '../../Redux/GroupsReduser';
import Groups from './Groups';
class GroupsContainer extends React.Component {



  render() {
    return <Groups {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  Groups: state.GroupsPage
})
export default connect(mapStateToProps, { SetGroups, setGroupsStatus })(GroupsContainer)