import { searchResource } from "./search.resource";
export const SearchActions = {
  SUBMIT_SEARCH: "[user]: submitting search per user request",
  POPULATE_RESULTS: "got back some results",
  POPULATE_RESULTS_FAILURE: "fetching results failed"
};

const submitSearch = queryString => {
  return {
    type: SearchActions.SUBMIT_SEARCH,
    payload: {
      queryString
    }
  };
};

const populateResults = results => {
  return {
    type: SearchActions.POPULATE_RESULTS,
    payload: {
      results
    }
  };
};

export const populateResultsError = error => {
  return {
    type: SearchActions.POPULATE_RESULTS_ERROR,
    payload: {
      error
    }
  };
};

export const submitSearchThunk = queryString => dispatch => {
  dispatch(submitSearch(queryString));
  return searchResource
    .fetchStackOverflow(queryString)
    .then(json => dispatch(populateResults(json)));
};
