import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const blogsSlice = createSlice(
  {
    name: 'blogs',
    initialState: [
      {
        id: '1',
        title: 'Redux Overview and Concepts',
        content: 'Learn key Redux terms',
        userId: '0',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactionsCount: {
          happy: 1,
          lol: 0,
          angry: 0,
          confused: 1
        }
      },
      {
        id: '2',
        title: 'Redux Essentials: Basic Redux Data Flow',
        content: 'Learn how to add "slices" of reducer logic to Redux store',
        userId: '1',
        date: sub(new Date(), { minutes: 1 }).toISOString(),
        reactionsCount: {
          happy: 2,
          lol: 2,
          angry: 2,
          confused: 2
        }
      }
    ],
    reducers: {

      addBlog: {
        prepare: (title, content, userId) => {  // the 'prepare callback' functionality of createSlice()
          return {  // returns an object with the payload field
            payload: {
                id: nanoid(),
                title: title,
                content: content,
                userId: userId,
                date: new Date().toISOString(),
                reactionsCount: {
                  happy: 0,
                  lol: 0,
                  angry: 0,
                  confused: 0
                }
            }
          }
        },
        reducer: (state, action) => {
          state.push(action.payload)
        }
      },

      editBlog: {
        prepare: (id, title, content) => {
          return {
            payload: {
              id: id,
              title: title,
              content: content
            }
          }
        },
        reducer: (state, action) => {
          const { id, title, content } = action.payload
          const foundBlog = state.find(blog => blog.id === id)
          if (foundBlog) {
            foundBlog.title = title
            foundBlog.content = content
          }
        }
      },

      reactToBlog: {
        prepare: (id, reaction) => {
          return {
            payload: {
              id: id,
              reaction: reaction
            }
          }
        },
        reducer: (state, action) => {
          const { id, reaction } = action.payload
          const foundBlog = state.find(blog => blog.id === id)
          if (foundBlog) {
            foundBlog.reactionsCount[reaction]++
          }
        }
      }
    }
  }
)

export const { addBlog, editBlog, reactToBlog } = blogsSlice.actions
export default blogsSlice.reducer

export const selectAllBlogs = state => state.blogs
export const selectBlogById = (state, id) => state.blogs.find(blog => blog.id === id)
