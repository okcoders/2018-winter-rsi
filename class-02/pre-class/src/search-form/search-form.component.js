import React from 'react'
import { SearchResults } from '../search-results/search-results.component'
import { get } from 'lodash'

const buttonStyle = {
  backgroundColor: 'blue'
}

export class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queryString: '',
      searchSubmitted: false,
      response: undefined,
      showResults: false
    }
  }

  // static getDerivedStateFromProps(prevProps, prevState) {
  //   console.log("getDerivedstateFromProps")
  // }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true
  }

  render() {
    console.log("render")
    return (
      <div>
        <form onSubmit={this.submitSearch}>
        Search a topic:
        <input value={this.state.queryString} onChange={this.onChangeCallback} />
        <button type="submit" style={buttonStyle} disabled={this.submitDisabled()}>
          Submit
        </button>
      </form>
      <button onClick={_=> this.setState(state => ({ showResults: !state.showResults}))}>
        show/hide results
      </button>
      {this.state.showResults && <SearchResults results={this.resolveResults()} />}
      </div>
    )
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://reqres.in/api/books')
      .then(res => res.json())
      .then(payload => this.setState({ response: payload }))
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  resolveResults() {
    return get(this.state.response, 'data', [])
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
