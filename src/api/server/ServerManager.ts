import axios, { AxiosInstance, AxiosResponse } from "axios"

class ServerManager {
   private apiAxios: AxiosInstance

   constructor() {
      this.apiAxios = axios.create({
         baseURL: process.env.NEXT_PUBLIC_API_URL,
      })
   }

   refreshInstance(): void {
      this.apiAxios = axios.create({
         baseURL: process.env.NEXT_PUBLIC_API_URL,
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

   getProblems(): Promise<AxiosResponse> {
      return this.apiAxios.get("/problem")
   }
}

export default ServerManager
