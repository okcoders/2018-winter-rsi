import { HistoryPage } from "./history-page.component";
import { star, setFilter } from "./history.actions";
import { connect } from "react-redux";
import { visibleHistory, slowVisibleHistory } from "./history.selectors";

export default connect(
  state => {
    console.log("mapStateToProps called");
    return { items: slowVisibleHistory(state) };
  },
  { star, setFilter }
)(HistoryPage);
