import React from 'react'

export class SearchResults extends React.PureComponent {
    render() {
        return (
            <div>
                <ul>
                    {this.props.results.map(renderSearchResult)}
                </ul>
            </div>
        )
    }
}

function renderSearchResult(result) {
    return (
        <li key={result.questionId}>{result.title}: {result.tags.join(",")}</li>
    )
}
