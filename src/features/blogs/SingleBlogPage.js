import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectBlogById } from './blogsSlice'
import { BlogsAuthor } from './BlogsAuthor'
import { BlogsTimeStamp } from './BlogsTimeStamp'
import { BlogsReactionBtn } from './BlogsReactionBtn'

export function SingleBlogPage({ match }) {
  const { blogId } = match.params
  const foundBlog = useSelector(selectBlogById)

  return (
    <section>
      <article className="blog">
        <h2>
            {foundBlog ? `${foundBlog.title}` : `Blog Not Found!`}
        </h2>
        <BlogsAuthor userId={foundBlog.userId}/>
        <BlogsTimeStamp timestamp={foundBlog.date}/>
        <p className="blog-content">
            {foundBlog ? `${foundBlog.content}` : ``}
        </p>
        <BlogsReactionBtn blog={foundBlog} />
        <Link to={`/editBlog/${foundBlog.id}`} className="button">
           Edit Blog
        </Link>
      </article>
    </section>
  )
}
