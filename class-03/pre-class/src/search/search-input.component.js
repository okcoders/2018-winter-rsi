import React from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  width: 50%;
  margin: auto !important;
`

export class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryString: '',
            searchSubmitted: false,
        }
    }

    fetchPosts = () => {
        fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=votes&tagged=${this.state.queryString}&site=stackoverflow`)
          .then(res => res.json())
          .then(json => this.props.populateResults(json))
    }

    onSearchChange = (e) => {
        this.setState({ queryString: e.target.value })
    }

    buttonDisabled() {
      return this.state.queryString === ''
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.fetchPosts()
      this.setState({ searchSubmitted: true })
    }

    render() {
        return (
            <div>
              <StyledForm onSubmit={this.onSubmit}>
                <Form.Item>
                  <Input value={this.state.queryString} onChange={this.onSearchChange} placeholder="search a topic" />
                </Form.Item>
                <Form.Item>
                <Button disabled={this.buttonDisabled()} type="primary" htmlType="submit">
                  Submit Search
                </Button >
                </Form.Item>
              </StyledForm>
            </div>
        )
    }
}
