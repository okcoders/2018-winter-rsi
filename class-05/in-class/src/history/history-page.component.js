import React from "react";
import { Switch } from "antd";

export class HistoryPage extends React.Component {
  render() {
    return (
      <>
        <h4>History!</h4>
        show star <Switch onChange={this.onChange} />
        <ul>{this.props.items.map(this.renderItem)}</ul>
      </>
    );
  }

  onChange = checked => {
    this.props.changeStarFilter(checked);
  };

  renderItem(item) {
    return (
      <>
        <li>{item.title}</li>
      </>
    );
  }
}
