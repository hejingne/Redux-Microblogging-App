import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { editBlog } from './blogsSlice'

export function EditBlogPage({ match }) {
  const { blogId } = match.params
  const foundBlog = useSelector(state =>
                                  state.blogs.find(blog =>
                                      blog.id === blogId))
  const [title, setTitle] = useState(foundBlog.title)
  const [content, setContent] = useState(foundBlog.content)

  const dispatch = useDispatch()
  const history = useHistory()

  function handleBtnSubmit(e) {
    e.preventDefault()
    if (title === '') {
      alert("Please enter a title")
    } else if (content === '') {
      alert("Please add content")
    } else {
      dispatch(editBlog(blogId, title, content))
      // Switch over to the single blog page to show the updated blog alone
      history.push(`/blogs/${blogId}`)
    }
  }

  return (
    <section>
      <h2> Edit Blog </h2>
      <form>
      <label htmlFor="blogTitle"> Blog Title: </label>
      <input type="text"
             id="blogTitle"
             name="blogTitle"
             placeholder="What's the new title?"
             value={title}
             onChange={e => setTitle(e.target.value)} />

      <label htmlFor="blogContent"> Blog Content: </label>
      <input type="text"
             id="blogContent"
             name="blogContent"
             placeholder="What's the new content?"
             value={content}
             onChange={e => setContent(e.target.value)} />

      <button type="submit"
              onClick={handleBtnSubmit}>
        Save Edit
      </button>
      </form>
    </section>
  )
}
