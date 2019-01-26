import React from 'react'
import {
    Form, Input, Button,
  } from 'antd';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  width: 40%
  margin: auto !important
`

class SearchInputComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryString: this.parseQueryString(),
        }
    }

    parseQueryString() {
        const split = this.props.location.search.split("=")
        return split[1] ? split[1]: ''
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        const url = `https://api.stackexchange.com/2.2/search?order=desc&sort=votes&tagged=${this.state.queryString}&site=stackoverflow`
        fetch(url)
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
      this.props.history.push(`/search?query=${this.state.queryString}`)
    }

    render() {
        return (
            <>
            <StyledForm onSubmit={this.onSubmit}>
                <Form.Item>
                    <Input 
                        value={this.state.queryString} 
                        onChange={this.onSearchChange}
                        placeholder="Please enter a topic" />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={this.buttonDisabled()}
                    >
                   Submit 
                </Button>
                </Form.Item>
            </StyledForm>
            </>
        )
    }
}

export default withRouter(SearchInputComponent)