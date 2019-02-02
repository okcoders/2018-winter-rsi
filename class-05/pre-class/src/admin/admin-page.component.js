import React from 'react';
import { RestrictedComponent } from '../restricted/restricted.component'
import { RestrictedHoc } from '../restricted/restricted-hoc.component'
import { NoAccess } from '../restricted/no-access.component'
import { Card } from 'antd';

export class AdminPage extends React.Component {
  render() {
    const SuperRestricted = RestrictedHoc(true, SuperAdmin)
    return (
      <>
        <RestrictedComponent
          render={NoAccess}
          shouldShow={this.props.userType === "admin"}>
            <h4> You are an Admin! </h4>
        </RestrictedComponent>
        <h3>-------</h3>
        <SuperRestricted />
      </>
    )
  }
}

const SuperAdmin = () => {
  return (
    <Card title="you are an admin">
      <h4> big time </h4>
    </Card>
  )
}
