const redux = require('redux')
const history = require('./history/reducers/history.reducer')
const search = require('./search/reducers/search.reducer')

const searchActions = require('./search/actions/search.actions')

const reducer = redux.combineReducers({
  search: search.searchReducer,
  history: history.historyReducer
})

const store = redux.createStore(reducer)

store.dispatch(searchActions.submitSearch('redux!'))
console.log(store.getState())

