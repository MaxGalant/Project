import React from 'react';
import Admin from './Admin';

const AdminTest = (props) => {

  return (
    <div>
      {props.Auth.role === "admin" &&
        <Admin Auth={props.Auth} />}
    </div>
  )

}
export default AdminTest
//browserslist