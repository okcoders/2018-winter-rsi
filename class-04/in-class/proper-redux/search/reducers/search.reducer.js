const SearchActions = require('../actions/search.actions')
const actions = SearchActions.SearchActions

const defaultState = {
  queryString: '',
  results: []
}

function searchReducer(state = defaultState, action) {
  switch(action.type) {
    case actions.Submit:
     return { ...state, queryString: action.payload.queryString }
    case actions.PopulateResults:
     return { ...state, results: action.payload.results }
    default:
      return state
  }
}

module.exports = {
  searchReducer
}