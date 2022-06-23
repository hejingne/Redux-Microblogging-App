import React from 'react'
import { useSelector } from 'react-redux'

export function BlogsList() {
  const blogs = useSelector(state => state.blogs)

  const blogsList = blogs.map(blog => (
    <article className="blog-excerpt"
             key={blog.id}>
      <h3> {blog.title} </h3>
      <p className="blog-content"> {blog.content} </p>
    </article>
  ))

  return (
    <section className="blogs-list">
      <h2> Blogs </h2>
      {blogsList}
    </section>
  )
}
