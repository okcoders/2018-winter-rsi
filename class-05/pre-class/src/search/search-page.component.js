import React from "react";
import SearchInput from "./search-input.container";
import SearchResults from "./search-results.container";
import { get } from "lodash";

export class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <>
        <SearchInput />
        <SearchResults />
      </>
    );
  }
}
