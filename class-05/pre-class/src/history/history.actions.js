export const HistoryActions = {
  ADD_TO_HISTORY: "user want to add a result to history",
  STAR: "user wants to start a history item",
  SET_FILTER: "user wants to change shown history items"
};

export function addToHistory(item) {
  return {
    type: HistoryActions.ADD_TO_HISTORY,
    payload: {
      item
    }
  };
}

export function star(id) {
  return {
    type: HistoryActions.STAR,
    payload: {
      id
    }
  };
}

export function setFilter(filter) {
  return {
    type: HistoryActions.SET_FILTER,
    payload: {
      filter
    }
  };
}
