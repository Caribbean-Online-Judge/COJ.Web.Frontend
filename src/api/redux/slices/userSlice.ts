import { UserInfo } from "@/types"
import { createSlice } from "@reduxjs/toolkit"

interface UserSlice {
   isAuthenticated: boolean
   userInfo: UserInfo
}

const initialState: UserSlice = {
   isAuthenticated: false,
   userInfo: {
      username: "",
      firstName: "",
      lastName: "",
      sex: 0,
      email: "",
      emailConfirmed: true,
      birthday: "",
      language: {
         name: "",
         key: "",
         enabled: false,
         description: "",
         extension: "",
         aid: 0,
         prority: 0,
         id: 0,
      },
      country: {
         name: "",
         isoCode: "",
         enabled: false,
         id: 0,
      },
      institution: {
         name: "",
         countryId: 0,
         country: {
            name: "",
            isoCode: "",
            enabled: false,
            id: 0,
         },
         enabled: false,
         id: 0,
      },
      locale: {
         description: "",
         code: "",
         id: 0,
      },
      permissions: [],
      settings: {
         showEmail: false,
         showBirthday: false,
         seeSolutions: false,
         enabledAdvancedEditor: false,
         contestNotifications: false,
         entriesNotifications: false,
         submitionNotification: false,
         id: 0,
      },
   },
}

const UserSlice = createSlice({
   initialState,
   name: "UserSlice",
   reducers: {
      setIsAuthenticated: (state, { payload }: { payload: boolean }) => {
         state.isAuthenticated = payload
      },
      setUserInfo: (state, { payload }: { payload: UserInfo }) => {
         state.userInfo = payload
      },
   },
})

export const { setIsAuthenticated, setUserInfo } = UserSlice.actions
export default UserSlice.reducer
