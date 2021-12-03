import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import UiSlice from "./reducers/uiReducer"

const store = configureStore({
   reducer: {
      ui: UiSlice,
   },
   middleware: [thunk],
   devTools: process.env.NODE_ENV === "development",
})

export default store
