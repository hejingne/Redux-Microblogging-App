import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice(
  {
    name: 'users',
    initialState: [
      {
        id: '0',
        name: 'Amy Chan'
      },
      {
        id: '1',
        name: 'Ben Horton'
      }
    ],
    reducers: {}
  }
)

export default usersSlice.reducer
