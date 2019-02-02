import { connect } from "react-redux";
import { SearchResults } from "./search-results.component";
import { addToHistory } from "../history/history.actions";
import { resolveResults } from "./search.selectors";

export default connect(
  state => {
    return {
      results: resolveResults(state)
    };
  },
  { addToHistory }
)(SearchResults);
