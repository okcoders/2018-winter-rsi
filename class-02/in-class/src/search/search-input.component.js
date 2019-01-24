import React from 'react'
import SearchResults from '../results/search-results.component'

const resourceUri = 'https://reqres.in/'

const buttonStyle = {
    backgroundColor: 'blue'
}

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryString: '',
            searchSubmitted: false,
            showResults: false,
            searchResults: null
        }
    }

    fetchBooks = () => {
        fetch(`${resourceUri}api/books`)
          .then(res => res.json())
          .then(json => this.props.populateResults(json))
    }

    onSearchChange = (e) => {
        this.setState({ queryString: e.target.value })
    }

    buttonDisabled() {
      return this.state.queryString === ''
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.fetchBooks()
      this.setState({ searchSubmitted: true })
    }

    render() {
        console.log(this.state.searchResults)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                  Search a topic: <input value={this.state.queryString} onChange={this.onSearchChange} />
                  <button style={buttonStyle} disabled={this.buttonDisabled()} type="submit">
                    Submit Search
                  </button >
                </form>
                <button onClick={this.flipResults}> flip results </button>
            </div>
        )
    }

    flipResults = () => {
        this.setState((state) => ({ showResults: !state.showResults}))
    }
}