import React from 'react';
import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import { RestrictedComponent } from '../restricted/restricted.component'

class Nav extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
        current: removeSlash(props.location.pathname),
     }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    this.props.history.push("/" + e.key)
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="search">
          <Icon type="search" />Search
        </Menu.Item>
        <Menu.Item key="history">
          History
        </Menu.Item>
        <RestrictedComponent shouldShow={this.props.userType === "admin"}>
          <Menu.Item key="admin">
            Admin
          </Menu.Item>
        </RestrictedComponent>
      </Menu>
    )
  }
}

function removeSlash(location) {
  return location.replace('/', '')
}

export const NavWithRouter = withRouter(Nav)
