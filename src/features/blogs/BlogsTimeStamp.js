import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

export function BlogsTimeStamp(props) {
  let timeAgo = ''

  if (props.timestamp) {
    const date = parseISO(props.timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={props.timestamp}>
      &nbsp;
      <i> {timeAgo} </i>
    </span>
  )
}
