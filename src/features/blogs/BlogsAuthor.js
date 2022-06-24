import React from 'react'
import { useSelector } from 'react-redux'

export function BlogsAuthor(props) {
  const foundAuthor = useSelector(state =>
                                    state.users.find(user =>
                                        user.id === props.userId))

  return (
    <span> by {foundAuthor ? foundAuthor.name : `Unknown Author`} </span>
  )
}
