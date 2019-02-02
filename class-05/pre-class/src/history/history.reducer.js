import { HistoryActions } from "./history.actions";

const defaultState = {
  items: {},
  filter: "all"
};

let itemId = 1;
export function historyReducer(state = defaultState, action) {
  switch (action.type) {
    case HistoryActions.ADD_TO_HISTORY:
      return {
        ...state,
        items: { ...state.items, [itemId++]: action.payload.item }
      };
    case HistoryActions.STAR:
      const id = action.payload.id;
      const lookup = state.items[id];
      return {
        ...state,
        items: { ...state.items, [id]: { ...lookup, star: true } }
      };
    case HistoryActions.SET_FILTER:
      return { ...state, filter: action.payload.filter };
    default:
      return state;
  }
}
