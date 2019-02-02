import { connect } from "react-redux";
import { SearchInputWithRouter } from "./search-input.component";
import { submitSearchThunk } from "./search.actions";

function mapStateToProps(state) {
  return {
    queryString: state.search.queryString
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitSearch: queryString => dispatch(submitSearchThunk(queryString))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInputWithRouter);
