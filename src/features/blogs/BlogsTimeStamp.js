import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

export function BlogsTimeStamp(props) {
  let timeAgo = ''

  if (props.date) {
    const date = parseISO(props.date)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={props.date}>
      &nbsp;
      <i> {timeAgo} </i>
    </span>
  )
}
