const HistoryActions = {
  Add: 'new item was queried, add to history',
}

function add(queryString) {
  return {
    type: HistoryActions.Add,
    payload: {
      queryString
    }
  }
}

module.exports = {
  HistoryActions,
  add
}