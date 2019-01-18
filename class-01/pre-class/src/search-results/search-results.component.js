import React from 'react'
import { Icon } from 'antd'

export function SearchResults(props) {
  return (
    <ul> {props.results.map(searchResult)} </ul>
  )
}

function searchResult(result) {
  return (
    <li>
     {resolveIcon(result.type)} {result.title}: {result.description}
    </li>
  )
}

function resolveIcon(type) {
  switch(type) {
    case('article'): return <Icon type='read' />
    case('video'): return <Icon type='youtube' />
    default: return <Icon type='read' />
  }
}
