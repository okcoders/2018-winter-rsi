import React from 'react'
import { showAdmin } from '../restricted/selectors'
import Restricted from '../restricted/restricted.component'

export class AdminPage extends React.Component {
    render() {
        return(
            <Restricted shouldShow={showAdmin(this.props.user)}>
                <h4>Admin!</h4>
            </Restricted>
        )
    }
}