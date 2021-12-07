import React from "react"
import Lottie from "react-lottie-player"
import coderBoyAnim from "../../../assets/lottie/coder-boy-anim.json"
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setIsAuthenticated } from "../../../api/redux"
import {
   BoxContainer,
   LottieBoxContainer,
   RootContainer,
   SignInCard,
   TextField,
   Typography,
} from "./styles"

export default function Login(): JSX.Element {
   const router = useRouter()
   const dispatch = useDispatch()

   const handleLogin = () => {
      dispatch(setIsAuthenticated())
      router.replace("/")
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
                  id="username"
                  label="Username"
                  variant="outlined"
                  type={"username"}
                  fullWidth
               />
               <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type={"password"}
                  fullWidth
               />
               <Button variant={"contained"} fullWidth onClick={handleLogin}>
                  LogIn
               </Button>
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
