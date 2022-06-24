import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { BlogsAuthor } from './BlogsAuthor'

export function SingleBlogPage({ match }) {
  const { blogId } = match.params
  const foundBlog = useSelector( state => state.blogs.find(blog => blog.id === blogId) )

  return (
    <section>
      <article className="blog">
        <h2>
            {foundBlog ? `${foundBlog.title}` : `Blog Not Found!`}
        </h2>
        <BlogsAuthor userId={foundBlog.userId}/>
        <p className="blog-content">
            {foundBlog ? `${foundBlog.content}` : ``}
        </p>
        <Link to={`/editBlog/${foundBlog.id}`} className="button">
           Edit Blog
        </Link>
      </article>
    </section>
  )
}
