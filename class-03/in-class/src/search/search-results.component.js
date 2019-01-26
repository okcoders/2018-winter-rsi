import React from 'react'

export default class SearchResults extends React.PureComponent {
    constructor(props) {
        console.log("constructor")
        super(props)
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    render() {
        console.log("render")
        return (
            <div>
                <ul>
                    {this.props.r.map(renderSearchResult)}
                </ul>
            </div>
        )
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}

function renderSearchResult(result) {
    return (
        <li key={result.name}>{result.name}: {result.year}</li>
    )
}