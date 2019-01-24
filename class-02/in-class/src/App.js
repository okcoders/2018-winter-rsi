import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './search/search-input.component'
import SearchResults from './results/search-results.component'
import { get } from 'lodash'

function Hello(props) {
  return (
    <h1>Hello {props.name}</h1>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  render() {
    return (
      <div>
        <SearchInput populateResults={this.populateResults}/>
        <SearchResults results={this.resolveResults()} />
      </div>
    );
  }

  populateResults = (results) => {
    this.setState({results: results})
  }

  resolveResults() {
      return get(this.state.results, 'data', [])
  }

}

export default App;
