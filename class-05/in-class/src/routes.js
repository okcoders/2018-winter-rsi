import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd';
import { SearchPage } from './search/search-page.component'
import { HistoryPage } from './history/history-page.component'
import { AdminPage } from './admin/admin-page.component'
import { NavWithRouter } from './nav/nav.component'

const {
  Header, Footer, Content,
} = Layout;


export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header><NavWithRouter userType={this.props.userType}/></Header>
          <Content>
            <Route path="/search" component={SearchPage} />
            <Route path="/history" component={HistoryPage} />
            <Route path="/admin" render={props => <AdminPage {...props} userType={this.props.userType} />} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    )
  }
}
