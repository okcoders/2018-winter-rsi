import { HistoryActions } from "./history.actions";

const defaultState = {
  items: [],
  showAll: true
};

export function historyReducer(state = defaultState, action) {
  switch (action.type) {
    case HistoryActions.ADD:
      return { ...state, items: [...state.items, action.payload.item] };
    case HistoryActions.CHANGE_FILTER:
      return { ...state, showAll: !action.payload.checked };
    default:
      return state;
  }
}
