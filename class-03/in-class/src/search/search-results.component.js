import React from 'react'

export default class SearchResults extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.r.map(renderSearchResult)}
                </ul>
            </div>
        )
    }
}

function renderSearchResult(result) {
    return (
        <li key={result.question_id}>{result.title}: {result.tags.join(", ")}</li>
    )
}