import { SearchActions } from "./search.actions";

const defaultState = {
  queryString: "",
  results: [],
  error: false
};

export function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case SearchActions.SUBMIT_SEARCH:
      return { ...state, queryString: action.payload.queryString };
    case SearchActions.POPULATE_RESULTS:
      return { ...state, results: action.payload.results };
    case SearchActions.POPULATE_RESULTS_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
}
