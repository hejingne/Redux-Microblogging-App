import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addBlog } from './blogsSlice'

export function AddForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector(state => state.users)
  const usersList = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const dispatch = useDispatch()

  const canSave = title && content && userId

  function handleBtnSubmit(e) {
    e.preventDefault()
    if (canSave) {
      dispatch(addBlog(title, content, userId))
      setTitle('')
      setContent('')
      setUserId('')
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

        <label htmlFor="blogAuthor"> Author: </label>
        <select id="blogAuthor"
                value={userId}
                onChange={e => setUserId(e.target.value)}>
            <option key="blankOption"
                    value=""></option>
            {usersList}
        </select>

        <label htmlFor="blogContent"> Blog Content: </label>
        <input type="text"
               id="blogContent"
               name="blogContent"
               value={content}
               onChange={e => setContent(e.target.value)} />

        <button type="submit"
                onClick={handleBtnSubmit}
                disabled={!canSave}>
          Add Blog
        </button>

      </form>
    </section>
  )
}
