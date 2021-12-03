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
      toggleIsDrawerOpen: (state) => {
         state.isDeawerOpen = !state.isDeawerOpen
      },
   },
})

export const { toggleIsDrawerOpen } = UiSlice.actions
export default UiSlice.reducer
