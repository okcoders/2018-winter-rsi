import React from 'react'
import { NoAccess } from './no-access.component'

export const RestrictedHoc = (shouldShow, comp, backup = NoAccess) => {
  return class extends React.Component {
    Resolved = shouldShow ? comp: backup
    render() {
      return <this.Resolved />
    }
  }
}
