interface UserInfo {
   username: string
   firstName: string
   lastName: string
   sex: number
   email: string
   emailConfirmed: boolean
   birthday: string
   language: {
      name: string
      key: string
      enabled: boolean
      description: string
      extension: string
      aid: number
      prority: number
      id: number
   }
   country: {
      name: string
      isoCode: string
      enabled: boolean
      id: number
   }
   institution: {
      name: string
      countryId: number
      country: {
         name: string
         isoCode: string
         enabled: boolean
         id: number
      }
      enabled: boolean
      id: number
   }
   locale: {
      description: string
      code: string
      id: number
   }
   permissions: []
   settings: {
      showEmail: boolean
      showBirthday: boolean
      seeSolutions: boolean
      enabledAdvancedEditor: boolean
      contestNotifications: boolean
      entriesNotifications: boolean
      submitionNotification: boolean
      id: number
   }
}

export default UserInfo
