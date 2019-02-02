import { connect } from "react-redux";
import { SearchResults } from "./search-results.component";
import { get } from "lodash";

export default connect(state => ({
  results: get(state.search.results, "items", [])
}))(SearchResults);
