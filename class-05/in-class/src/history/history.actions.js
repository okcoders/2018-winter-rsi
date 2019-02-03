export const HistoryActions = {
  ADD: "[user] wants to add a result to history",
  CHANGE_FILTER: "user wants to see different stuff"
};

export function addToHistory(item) {
  return {
    type: HistoryActions.ADD,
    payload: {
      item
    }
  };
}

export function changeFilter(checked) {
  return {
    type: HistoryActions.CHANGE_FILTER,
    payload: {
      checked
    }
  };
}
