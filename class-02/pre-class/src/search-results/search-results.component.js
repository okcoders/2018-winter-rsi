import React from 'react'
import { Icon } from 'antd'

export class SearchResults extends React.PureComponent {
  render() {
    return (
      <ul> {this.props.results.map(searchResult)} </ul>
    )
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
}

function searchResult(result) {
  return (
    <li>
     {result.name}: {result.year}
    </li>
  )
}

// function resolveIcon(type) {
//   switch(type) {
//     case('article'): return <Icon type='read' />
//     case('video'): return <Icon type='youtube' />
//     default: return <Icon type='read' />
//   }
// }
