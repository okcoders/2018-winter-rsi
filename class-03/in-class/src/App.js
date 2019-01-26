import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import SearchInput from './search/search-input.component'
import SearchResults from './search/search-results.component'
import { Layout } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { SearchPage } from './search/search-page.component'
import { HistoryPage } from './history/history-page.component'
import { Nav } from './nav/nav.component'
import { AdminPage } from './admin/admin.component'

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: "zach",
        type: "fjkdsal"
      }
    }

  }
  render() {
    return (
      <BrowserRouter >
        <Layout className="layout">
          <Header>
            <Nav user={this.state.user} />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Route path="/search" component={SearchPage} />
            <Route path="/history" component={HistoryPage} />
            <Route path="/admin" render={props => <AdminPage {...props} user={this.state.user} />} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          Footer!
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
