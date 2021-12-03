import { createSlice } from "@reduxjs/toolkit"

interface UserSlice {
   isAuthenticated: boolean
}

const initialState: UserSlice = {
   isAuthenticated: false,
}

const UserSlice = createSlice({
   initialState,
   name: "UserSlice",
   reducers: {
      setIsAuthenticated: (state) => {
         state.isAuthenticated = true
      },
   },
})

export const { setIsAuthenticated } = UserSlice.actions
export default UserSlice.reducer
