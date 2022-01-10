import store from "./store"
import { toggleIsDrawerOpen } from "./slices/uiSlice"
import { setIsAuthenticated, setUserInfo } from "./slices/userSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux"

// Infer the `RootState` and `AppDispatch` types from the redux itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store, toggleIsDrawerOpen, setIsAuthenticated, setUserInfo }
