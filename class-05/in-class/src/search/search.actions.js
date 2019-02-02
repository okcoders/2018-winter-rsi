import { Api } from "./api.resource";

export const SearchActions = {
  SUBMIT_SEARCH: "[user], submitted query string for search",
  POPULATE_RESULTS: "got back a response from our api fetch",
  POPULATE_RESULTS_ERROR: "sorry, something went wrong fetching from the api"
};

export function submitSearch(queryString) {
  return {
    type: SearchActions.SUBMIT_SEARCH,
    payload: {
      queryString
    }
  };
}

export function populateResults(response) {
  return {
    type: SearchActions.POPULATE_RESULTS,
    payload: {
      response
    }
  };
}

export const submitSearchThunk = queryString => dispatch => {
  dispatch(submitSearch(queryString));

  Api.stackOverflowFetch(queryString).then(results =>
    dispatch(populateResults(results))
  );
};
