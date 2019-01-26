import React from 'react'
import {
    Form, Input, Button,
  } from 'antd';

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryString: '',
        }
    }

    fetchBooks = () => {
        // fetch(`${resourceUri}api/books`)
        //   .then(res => res.json())
        //   .then(json => this.props.populateResults(json))
    }

    onSearchChange = (e) => {
        this.setState({ queryString: e.target.value })
    }

    buttonDisabled() {
      return this.state.queryString === ''
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.fetchBooks()
    }

    render() {
        return (
            <>
            <Form layout="inline" onSubmit={this.onSubmit}>
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
            </Form>
            </>
        )
    }
}