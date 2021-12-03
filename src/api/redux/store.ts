import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import uiSlice from "./slices/uiSlice"
import userSlice from "./slices/userSlice"

const store = configureStore({
   reducer: {
      ui: uiSlice,
      user: userSlice,
   },
   middleware: [thunk],
   devTools: process.env.NODE_ENV === "development",
})

export default store
