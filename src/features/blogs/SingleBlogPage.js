import React from 'react'
import { useSelector } from 'react-redux'

export function SingleBlogPage({ match }) {
  const { blogId } = match.params

  const matchedBlog = useSelector( state => state.blogs.find(blog => blog.id === Number(blogId)) )

  return (
    <section>
      <article className="blog">
        <h2>
            {matchedBlog ? `${matchedBlog.title}` : `Blog Not Found!`}
        </h2>
        <p className="blog-content">
            {matchedBlog ? `${matchedBlog.content}` : ``}
        </p>
      </article>
    </section>
  )
}
