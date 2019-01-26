import React from 'react'
import SearchInput from './search-input.component'
import SearchResults from './search-results.component'
import { get } from 'lodash'

export class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          results: []
        }
    }
    render() {
        return(
          <>
            <SearchInput populateResults={this.populateResults}/>
            <SearchResults r={this.resolveResults()}/>
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