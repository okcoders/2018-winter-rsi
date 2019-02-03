import { connect } from "react-redux";
import { HistoryPage } from "./history-page.component";
import { changeFilter } from "./history.actions";
import { itemsBasedOnFilter } from "./history.selector";

export default connect(
  state => ({ items: itemsBasedOnFilter(state) }),
  { changeStarFilter: changeFilter }
)(HistoryPage);
