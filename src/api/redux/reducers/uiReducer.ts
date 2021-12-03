import { createSlice } from "@reduxjs/toolkit"

interface UiSlice {
   isDeawerOpen: boolean
}

const initialState: UiSlice = {
   isDeawerOpen: false,
}

const UiSlice = createSlice({
   initialState,
   name: "UiSlice",
   reducers: {
      closeDrawer: (state) => {
         state.isDeawerOpen = false
      },
      openDrawer: (state) => {
         state.isDeawerOpen = true
      },
   },
})

export const { closeDrawer, openDrawer } = UiSlice.actions
export default UiSlice.reducer
