import { connect } from "react-redux";
import { SearchResults } from "./search-results.component";
import { get } from "lodash";
import { addToHistory } from "../history/history.actions";

export default connect(
  state => ({
    results: get(state.search.results, "items", [])
  }),
  { addToHistory }
)(SearchResults);
