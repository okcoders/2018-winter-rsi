import React from "react";
import { find } from "lodash";

export class SearchResults extends React.PureComponent {
  render() {
    console.log("called!");
    return (
      <div>
        <ul>{this.props.results.map(this.renderSearchResult)}</ul>
      </div>
    );
  }
  renderSearchResult = result => {
    return (
      <li
        onClick={e => this.handleClick(result.question_id)}
        key={result.question_id}
      >
        {result.title}: {result.tags.join(",")}
      </li>
    );
  };

  handleClick = id => {
    this.props.addToHistory(
      find(this.props.results, r => r.question_id === id)
    );
  };
}
