import { createSlice } from '@reduxjs/toolkit'

const blogsSlice = createSlice(
  {
    name: 'blogs',
    initialState: [
      {
        id: '1',
        title: 'Redux Overview and Concepts',
        content: 'Learn key Redux terms'
      },
      {
        id: '2',
        title: 'Redux Essentials: Basic Redux Data Flow',
        content: 'Learn how to add "slices" of reducer logic to Redux store'
      }
    ],
    reducers: {
      addBlog: (state, action) => {
        state.push(action.payload)
      },
      editBlog: (state, action) => {
        const { id, title, content } = action.payload
        const foundBlog = state.find(blog => blog.id === id)
        if (foundBlog) {
          foundBlog.title = title
          foundBlog.content = content
        }
      }
    }
  }
)

export const { addBlog, editBlog } = blogsSlice.actions
export default blogsSlice.reducer
