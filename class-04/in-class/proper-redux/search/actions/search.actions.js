const SearchActions = {
  Submit: '[User]: submitted search for tech topics',
  PopulateResults: 'got back results from the api for tech topics'
}

function submitSearch(queryString) {
  return {
    type: SearchActions.Submit,
    payload: {
      queryString
    }
  }
}

function populateResults(results) {
  return {
    type: SearchActions.PopulateResults,
    payload: {
      results
    }
  }
}

module.exports = {
  SearchActions,
  submitSearch,
  populateResults
}