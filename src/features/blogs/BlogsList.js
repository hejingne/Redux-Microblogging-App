import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectAllBlogs } from './blogsSlice'
import { BlogsAuthor } from './BlogsAuthor'
import { BlogsTimeStamp } from './BlogsTimeStamp'
import { BlogsReactionBtn } from './BlogsReactionBtn'

export function BlogsList() {
  const blogs = useSelector(selectAllBlogs)
  const sortedBlogs = blogs.slice().reverse() // Sort blogs by uploaded time

  const blogsList = sortedBlogs.map(blog => (
    <article className="blog-excerpt"
             key={blog.id}>

      <h3> {blog.title} </h3>
      <BlogsAuthor userId={blog.userId}/>
      <BlogsTimeStamp date={blog.date}/>
      <p className="blog-content"> {blog.content} </p>
      <BlogsReactionBtn blog={blog} />

      <Link to={`/blogs/${blog.id}`} className="button muted-button">
         View Blog
      </Link>

      <Link to={`/editBlog/${blog.id}`} className="button muted-button">
         Edit Blog
      </Link>

    </article>
  ))

  return (
    <section className="blogs-list">
      <h2> Blogs </h2>
      {blogsList}
    </section>
  )
}
