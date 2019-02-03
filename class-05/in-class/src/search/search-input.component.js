import React from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const StyledForm = styled(Form)`
  width: 50%;
  margin: auto !important;
`;

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      queryString: resolveQueryString(this.props.location.search),
      searchSubmitted: false
    };
  }

  componentDidMount() {
    if (this.state.queryString) {
      this.props.submitSearch(this.state.queryString);
    }
  }

  onSearchChange = e => {
    this.setState({ queryString: e.target.value });
  };

  buttonDisabled() {
    return this.state.queryString === "";
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.submitSearch(this.state.queryString);
    this.setState({ searchSubmitted: true });
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.onSubmit}>
          <Form.Item>
            <Input
              value={this.state.queryString}
              onChange={this.onSearchChange}
              placeholder="search a topic"
            />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={this.buttonDisabled()}
              type="primary"
              htmlType="submit"
            >
              Submit Search
            </Button>
          </Form.Item>
        </StyledForm>
      </div>
    );
  }
}

function resolveQueryString(search) {
  const searchItems = search.split("=");
  return searchItems[1] || "";
}

export const SearchInputWithRouter = withRouter(SearchInput);
