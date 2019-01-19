import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './search/search-input.component'

function Hello(props) {
  return (
    <h1>Hello {props.name}</h1>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
      </div>
    );
  }
}

export default App;
