import { createSlice } from '@reduxjs/toolkit'

const blogsSlice = createSlice(
  {
    name: 'blogs',
    initialState: [
      {
        id: 1,
        title: 'Redux Overview and Concepts',
        content: 'Learn key Redux terms'
      },
      {
        id: 2,
        title: 'Redux Essentials: Basic Redux Data Flow',
        content: 'Learn how to add "slices" of reducer logic to Redux store'
      }
    ],
    reducers: {
      addPost: (state, action) => {
        state.push(action.payload)
      }
    }
  }
)

export const { addPost } = blogsSlice.actions
export default blogsSlice.reducer
