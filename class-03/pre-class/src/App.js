import React from 'react';
import { Routes } from './routes'
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userType: "not admin" }
  }

  render() {
    return (
      <Routes userType={this.state.userType}/>
    );
  }

}

export default App;
