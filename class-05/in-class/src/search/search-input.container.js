import { connect } from "react-redux";
import { SearchInputWithRouter } from "./search-input.component";
import { submitSearchThunk } from "./search.actions";

export default connect(
  null,
  { submitSearch: submitSearchThunk }
)(SearchInputWithRouter);
