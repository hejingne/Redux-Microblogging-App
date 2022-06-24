import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../features/blogs/blogsSlice'
import usersReducer from '../features/blogs/usersSlice'

export default configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer
  },
})
