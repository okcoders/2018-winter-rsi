import React from "react";

export class SearchResults extends React.PureComponent {
  render() {
    return (
      <div>
        <ul>{this.props.results.map(this.renderSearchResult)}</ul>
      </div>
    );
  }

  renderSearchResult = result => {
    return (
      <li onClick={() => this.onClick(result)} key={result.questionId}>
        {result.title}: {result.tags.join(",")}
      </li>
    );
  };

  onClick = item => {
    this.props.addToHistory(item);
  };
}
