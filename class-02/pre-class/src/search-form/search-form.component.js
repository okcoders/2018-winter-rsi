import React from 'react'
import { SearchResults } from '../search-results/search-results.component'

const results = [
  {title: 'learn react', type: 'article', description: 'read this article to learn react'},
  {title: 'jsx in react', type: 'video', description: 'watch this to learn more about jsx'}
]

export class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queryString: '',
      searchSubmitted: false
    }
  }

  static getDerivedStateFromProps(prevProps, preState) {
    console.log("getDerivedstateFromProps")
  }

  buttonStyle = {
    backgroundColor: 'blue'
  }

  componentDidMount() {
    console.log("componentDidMount")
    https://reqres.in/api/books

  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
  }

  render() {
    console.log("render")
    return (
      <div>
        <form onSubmit={this.submitSearch}>
        Search a topic:
        <input value={this.state.queryString} onChange={this.onChangeCallback} />
        <button type="submit" style={this.buttonStyle} disabled={this.submitDisabled()}>
          Submit
        </button>
      </form>
      {this.state.searchSubmitted && <SearchResults results={results} />}
      </div>
    )
  }

  submitDisabled = () => {
    return this.state.queryString === ''
  }

  onChangeCallback = (e) => {
    this.setState({ searchSubmitted: false, queryString: e.target.value })
  }

  submitSearch = (e) => {
    e.preventDefault()
    this.setState({ searchSubmitted: true })
    console.log('submitted!')
  }
}
