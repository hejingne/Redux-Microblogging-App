import React from 'react'
import { useDispatch } from 'react-redux'

import { reactToBlog } from './blogsSlice'

const EMOJI_MAP = {
  happy: '😊',
  lol: '😂',
  angry: '😡',
  confused: '🤔'
}

export function BlogsReactionBtn(props) {
  const dispatch = useDispatch()

  const reactionBtns = Object.entries(EMOJI_MAP).map(([name, emoji]) => {
    return (
      <button key={name}
              type="button"
              className="muted-button reaction-button"
              onClick={() => dispatch(reactToBlog(props.blog.id, name))}>
         {emoji} {props.blog.reactionsCount[name]}
      </button>
    )
  })

  return (
    <div> {reactionBtns} </div>
  )
}
