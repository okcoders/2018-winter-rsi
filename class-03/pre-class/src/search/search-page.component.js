import React from 'react';
import { SearchInputWithRouter } from './search-input.component'
import { SearchResults } from './search-results.component'
import { get } from 'lodash'

export class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  render() {
    return (
      <>
        <SearchInputWithRouter populateResults={this.populateResults} />
        <SearchResults results={this.resolveResults()} />
      </>
    )
  }

  populateResults = (results) => {
    this.setState({results: results})
  }

  resolveResults() {
      return get(this.state.results, 'items', [])
  }

}
