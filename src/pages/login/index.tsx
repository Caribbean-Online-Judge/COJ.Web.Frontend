import React from "react"
import {
   RootContainer,
   SignInCard,
   BoxContainer,
   TextField,
   LottieBoxContainer,
   Typography,
} from "./styles"
import Lottie from "react-lottie-player"
import coderBoyAnim from "../../assets/lottie/coder-boy-anim.json"
import { Button } from "@mui/material"
import Link from "next/link"

export default function Login(): JSX.Element {
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
               <Link href="/app">
                  <Button variant={"contained"} fullWidth>
                     LogIn
                  </Button>
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
