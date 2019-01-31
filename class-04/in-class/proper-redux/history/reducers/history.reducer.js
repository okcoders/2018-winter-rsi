const HistoryActions = require('../actions/history.actions')
const actions = HistoryActions.HistoryActions

const defaultState = {
  queryStrings: [],
}

function historyReducer(state = defaultState, action) {
  switch(action.type) {
    case actions.Add:
     return { queryStrings: [ ...state.queryStrings, action.payload.queryString ] }
    default:
      return state
  }
}

module.exports = {
  historyReducer
}