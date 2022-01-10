import React from "react"
import Lottie from "react-lottie-player"
import coderBoyAnim from "@/assets/lottie/coder-boy-anim.json"
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setIsAuthenticated } from "@/api/redux"
import {
   BoxContainer,
   LottieBoxContainer,
   RootContainer,
   SignInCard,
   TextField,
   Typography,
   TypographyLink,
} from "./styles"
import { CircularProgress, Typography as MuiTypography } from "@mui/material"
import Link from "next/link"
import { useServerManager } from "@/api/server"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { RequestStatus } from "@/types"

export default function Login(): JSX.Element {
   const router = useRouter()
   const dispatch = useDispatch()
   const serverManager = useServerManager()

   const [requestStatus, setRequestStatus] = useState<RequestStatus>("unrequested")

   const { handleSubmit, control, getValues, formState } = useForm({
      defaultValues: {
         usernameOrEmail: "",
         password: "",
      },
      mode: "onChange",
   })

   const handleLogin = () => {
      setRequestStatus("progress")
      serverManager
         .signIn({
            usernameOrEmail: getValues("usernameOrEmail"),
            password: getValues("password"),
         })
         .then((r) => {
            serverManager.refreshInstance(r.data.token)
            localStorage.setItem("token", r.data.token)
            localStorage.setItem("refreshToken", r.data.refreshToken)
            dispatch(setIsAuthenticated(true))
            setRequestStatus("successfull")
            router.replace("/")
         })
         .catch(() => setRequestStatus("error"))
   }

   return (
      <RootContainer>
         <SignInCard>
            <BoxContainer>
               <Typography
                  align={"center"}
                  color={"primary"}
                  variant="h5"
                  sx={{ flexGrow: 1 }}
                  fontWeight={500}
               >
                  Carribean Online Judge
               </Typography>
               <TextField
                  control={control}
                  fieldName="usernameOrEmail"
                  rules={{ required: "Title is requierd" }}
                  id="usernameOrEmail"
                  label="Username or Email"
                  variant="outlined"
                  type={"username"}
                  fullWidth
                  required
               />
               <TextField
                  control={control}
                  fieldName="password"
                  rules={{ required: "Title is requierd" }}
                  id="password"
                  label="Password"
                  variant="outlined"
                  type={"password"}
                  fullWidth
                  required
               />
               <Button
                  variant={"contained"}
                  fullWidth
                  onClick={handleSubmit(handleLogin)}
                  disabled={!formState.isValid || requestStatus === "progress"}
               >
                  {requestStatus === "progress" ? (
                     <CircularProgress size={24} />
                  ) : (
                     "Sign In"
                  )}
               </Button>
               {requestStatus === "error" && (
                  <MuiTypography align="left" color={"error"}>
                     An unexpected error has occured
                  </MuiTypography>
               )}
               <Link href="/auth/sign-up">
                  <TypographyLink
                     align={"center"}
                     color={"primary"}
                     variant="body1"
                     sx={{ flexGrow: 0.8 }}
                     fontWeight={400}
                  >
                     Sign Up in COJ
                  </TypographyLink>
               </Link>
            </BoxContainer>
            <LottieBoxContainer>
               <Lottie
                  loop
                  animationData={coderBoyAnim}
                  play
                  style={{ height: 400 }}
               />
            </LottieBoxContainer>
         </SignInCard>
      </RootContainer>
   )
}
