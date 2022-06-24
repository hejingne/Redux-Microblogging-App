import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { addBlog } from './blogsSlice'

export function AddForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  function handleBtnSubmit(e) {
    e.preventDefault()
    if (title === '') {
      alert("Please enter a title")
    } else if (content === '') {
      alert("Please add content")
    } else {
      dispatch(
        addBlog( {
            id: nanoid(),
            title,
            content
          }
        )
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2> Add a new Blog </h2>
      <form>
        <label htmlFor="blogTitle"> Blog Title: </label>
        <input type="text"
               id="blogTitle"
               name="blogTitle"
               value={title}
               onChange={e => setTitle(e.target.value)} />

        <label htmlFor="blogContent"> Blog Content: </label>
        <input type="text"
               id="blogContent"
               name="blogContent"
               value={content}
               onChange={e => setContent(e.target.value)} />

        <button type="submit"
                onClick={handleBtnSubmit}>
          Add Blog
        </button>
      </form>
    </section>
  )
}
