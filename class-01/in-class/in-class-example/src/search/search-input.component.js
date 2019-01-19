import React from 'react'
import SearchResults from '../results/search-results.component'

const sampleResults = [
  {title: "learn react", description: "article on learning react"},
  {title: "learn jsx", description: "article on learning jsx"},
  {title: "learn react router", description: "article on learning react router"}
]

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryString: '',
            searchSubmitted: false
        }
    }

    onSearchChange = (e) => {
        this.setState({ queryString: e.target.value })
    }

    buttonDisabled() {
      return this.state.queryString === ''
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.setState({ searchSubmitted: true })
      console.log("submitted")
      console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                  Search a topic: <input value={this.state.queryString} onChange={this.onSearchChange} />
                  <button disabled={this.buttonDisabled()} type="submit">
                    Submit Search
                  </button >
                </form>
                <h1>hello {this.state.queryString}</h1>
                {this.state.searchSubmitted && <SearchResults results={sampleResults} />}
            </div>
        )
    }
}