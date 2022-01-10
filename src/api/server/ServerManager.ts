import { UserInfo } from "@/types"
import AccountDTO from "@/types/AccountDTO"
import axios, {
   AxiosInstance,
   AxiosResponse,
   AxiosRequestConfig,
   AxiosError,
} from "axios"

class ServerManager {
   /** 
      In the requests made in the "getInitialProps" and "getServerSideProps"
      localApiAxios is used, in the other requests apiAxios is used 
   */

   private apiAxios: AxiosInstance
   private localApiAxios: AxiosInstance

   private readonly REMOTE_URL = process.env.NEXT_PUBLIC_API_URL
   private readonly LOCAL_URL = process.env.NEXT_PUBLIC_API_URL //"localhost:3000"

   constructor() {
      this.apiAxios = axios.create({
         baseURL: `${this.REMOTE_URL}/api/v1`,
      })
      this.apiAxios.interceptors.request.use(this.headerInterceptors)
      this.apiAxios.interceptors.response.use(
         (response: AxiosResponse) => response,
         this.refreshTokenInterceptors
      )
      this.localApiAxios = axios.create({
         baseURL: `${this.LOCAL_URL}/api/v1`,
      })
      this.apiAxios.interceptors.request.use(this.headerInterceptors)
      this.apiAxios.interceptors.response.use(
         (response: AxiosResponse) => response,
         this.refreshTokenInterceptors
      )
      this.localApiAxios = axios.create({
         baseURL: `${this.LOCAL_URL}/api/v1`,
      })
      //this.localApiAxios.interceptors.request.use(this.headerInterceptors)
      this.localApiAxios.interceptors.response.use(
         (response: AxiosResponse) => response,
         this.refreshTokenInterceptors
      )
   }

   private headerInterceptors(config: AxiosRequestConfig) {
      const token = localStorage.getItem("token")

      return {
         ...config,
         headers: {
            Authorization: "Bearer " + token,
         },
      }
   }

   private refreshTokenInterceptors(error: AxiosError) {
      if (
         error.request &&
         error.request.status === 401 &&
         error.request.responseURL.includes("/api/v1/account")
      )
         axios
            .post("https://staging.caribbeanonlinejudge.org/api/v1/auth/refresh", {
               refreshToken: localStorage.getItem("refreshToken"),
            })
            .then(() => {
               return error
            })
            .catch(() => {
               error.code = "403"
               error.message = "Refresh token is invalid"
               return error
            })

      throw error
   }

   refreshInstance(token: string): void {
      this.apiAxios = axios.create({
         baseURL: `${this.REMOTE_URL}/api/v1`,
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      this.localApiAxios = axios.create({
         baseURL: `${this.LOCAL_URL}/api/v1`,
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
   }

   signIn({
      usernameOrEmail,
      password,
   }: {
      usernameOrEmail: string
      password: string
   }): Promise<AxiosResponse> {
      return this.apiAxios.post("/auth/sign-in", {
         usernameOrEmail,
         password,
      })
   }

   signUp(data: AccountDTO): Promise<AxiosResponse> {
      console.log(data)
      return this.apiAxios.post("/auth/sign-up", data)
   }

   refreshToken(): Promise<AxiosResponse> {
      return this.apiAxios.post("/auth/refresh", {
         refreshToken: localStorage.getItem("refreshToken"),
      })
   }

   confirmEmail(email: string, token: string): Promise<AxiosResponse> {
      return this.localApiAxios.get(`/account/confirm?email=${email}&token=${token}`)
   }

   getAccountInfo(): Promise<AxiosResponse<UserInfo>> {
      return this.apiAxios.get("/account")
   }

   recoverPassword(data: {
      email: string
      password: string
      token: string
   }): Promise<AxiosResponse> {
      return this.apiAxios.post("/auth/reset-password", data)
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
