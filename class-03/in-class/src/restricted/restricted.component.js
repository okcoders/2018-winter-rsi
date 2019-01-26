import React from 'react'
import NotAllowed from './not-allowed.component'

export default class Restricted extends React.Component {
    render() {
      return (
      <>
        {this.props.shouldShow && this.props.children}
        {!this.props.shouldShow &&
           !this.props.noDefault &&
            <NotAllowed/>}
      </>
      )
    }
}