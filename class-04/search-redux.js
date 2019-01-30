const redux = require('redux')

const fakeResults = [
  {title: 'why use redux', tags: ['redux', 'flux']},
  {title: 'integrating redux with react', tags: ['redux', 'react']}
]

const fakeResults2 = [
  {title: 'when not to use redux', tags: ['redux', 'boilerplate']}
]

function submitSearch(queryString) {
  return {
    type: 'SUBMIT_SEARCH',
    payload: queryString
  }
}

function populateResults(results) {
  return {
    type: 'POPULATE_RESULTS',
    payload: results
  }
}

const defaultSearchState = {
  queryString: '',
  results: []
}
function searchReducer(state = defaultSearchState, action) {
  switch (action.type) {
    case 'SUBMIT_SEARCH':
      return { ...state, queryString: action.payload }
    case 'POPULATE_RESULTS':
      return { ...state, results: action.payload }
    default:
      return state
  }
}

function addHistory(queryString) {
  return {
    type: 'ADD_HISTORY',
    payload: queryString
  }
}

const defaultHistoryState = {
  queryStrings: []
}
function historyReducer(state = defaultHistoryState, action) {
  switch(action.type) {
    case 'ADD_HISTORY':
      return { ...state, queryStrings: [...state.queryStrings, action.payload] }
    default:
      return state
  }
}

const combinedReducers = redux.combineReducers({
  history: historyReducer,
  search: searchReducer
})

const store = redux.createStore(combinedReducers)

store.subscribe(() => console.log(store.getState()))

store.dispatch(submitSearch('reactjs'))
store.dispatch(populateResults(fakeResults))
store.dispatch(addHistory('reactjs'))
store.dispatch(submitSearch('redux'))
store.dispatch(populateResults(fakeResults2))
store.dispatch(addHistory('redux'))
