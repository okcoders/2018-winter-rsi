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

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <Layout className="layout">
          <Header>
            <Nav />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Route path="/search" component={SearchPage} />
            <Route path="/history" component={HistoryPage} />
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
