import React from 'react';
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import { showAdmin } from '../restricted/selectors'

class NavWithoutRouter extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            current: this.parsePath()
        }
    }

    parsePath = () => {
        const withoutSlash = this.props.location.pathname.replace("/", "")
        return withoutSlash ? withoutSlash: "search"
    }

    handleClick = (e) => {
        this.setState({
        current: e.key,
        });
        this.props.history.push(e.key)
    }
    
    render() {
        return (
            <Menu
              theme="dark"
              mode="horizontal"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="search">Search</Menu.Item>
              <Menu.Item key="history">History</Menu.Item>
              {showAdmin(this.props.user) && <Menu.Item key="admin">Admin</Menu.Item>}
            </Menu>
        )
    }
}

export const Nav = withRouter(NavWithoutRouter)