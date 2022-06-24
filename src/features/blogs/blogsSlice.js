import { createSlice, nanoid } from '@reduxjs/toolkit'

const blogsSlice = createSlice(
  {
    name: 'blogs',
    initialState: [
      {
        id: '1',
        title: 'Redux Overview and Concepts',
        content: 'Learn key Redux terms',
        userId: '0'
      },
      {
        id: '2',
        title: 'Redux Essentials: Basic Redux Data Flow',
        content: 'Learn how to add "slices" of reducer logic to Redux store',
        userId: '1'
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
                userId: userId
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
      }
    }
  }
)

export const { addBlog, editBlog } = blogsSlice.actions
export default blogsSlice.reducer
