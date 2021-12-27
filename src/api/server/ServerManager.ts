import axios, { AxiosInstance, AxiosResponse } from "axios"

const API_URL = process.env.REACT_APP_API_URL

class ServerManager {
   private apiAxios: AxiosInstance

   constructor() {
      this.apiAxios = axios.create({
         baseURL: API_URL,
      })
   }

   refreshInstance(): void {
      this.apiAxios = axios.create({
         baseURL: API_URL,
         headers: {},
      })
   }

   signIn(): Promise<AxiosResponse> {
      return this.apiAxios.get("")
   }

   createProblem(data: FormData): Promise<AxiosResponse> {
      return this.apiAxios.post("/problems/add", data, {
         headers: { "Content-Type": "multipart/form-data" },
      })
   }
}

export default ServerManager
