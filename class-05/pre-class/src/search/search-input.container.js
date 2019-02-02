import { connect } from "react-redux";
import { SearchInputWithRouter } from "./search-input.component";
import { submitSearchThunk } from "./search.actions";

export default connect(
  state => ({
    queryString: state.search.queryString,
    results: state.search.results
  }),
  {
    submitSearch: submitSearchThunk
  }
)(SearchInputWithRouter);
