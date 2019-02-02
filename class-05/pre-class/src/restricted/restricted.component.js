import React from 'react'

export class RestrictedComponent extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, { ...this.props, eventKey: "admin" })
    });
    return (
      <>
        {this.props.shouldShow && childrenWithProps}
        {!this.props.shouldShow && this.props.render && this.props.render("we passed something in!")}
      </>
    )
  }
}
