import React from "react";
import { map } from "lodash";
import { Switch } from "antd";

export class HistoryPage extends React.Component {
  render() {
    console.log("history page render called");
    return (
      <>
        <Switch defaultChecked onChange={this.onChange} />
        <ul>{map(this.props.items, this.displayItems)}</ul>
      </>
    );
  }

  onChange = checked => {
    console.log(`switch to ${checked}`);
    this.props.setFilter(checked ? "star" : "all");
  };

  displayItems(item) {
    return <li>{item.title}</li>;
  }
}
