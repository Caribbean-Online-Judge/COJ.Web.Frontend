import React from "react"
import Lottie from "react-lottie-player"
import coderBoyAnim from "../../../assets/lottie/coder-boy-anim.json"
import {
   Button,
   Box,
   Card,
   TextField as MuiTextField,
   styled,
   Typography as MuiTypography,
} from "@mui/material"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setIsAuthenticated } from "../../../api/redux"

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

const RootContainer = styled(Box)(({ theme }) => ({
   background:
      "linear-gradient(to bottom right, " +
      theme.palette.primary.light +
      "," +
      theme.palette.primary.main +
      ")",
   height: "100vh",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
}))

const SignInCard = styled(Card)(({ theme }) => ({
   width: "60%",
   height: "60%",
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "60%",
   },
}))

const BoxContainer = styled(Box)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   flexDirection: "column",
   justifyContent: "center",
   margin: "0 2em 0 2em",
   width: "50%",
   [theme.breakpoints.down("sm")]: {
      width: "100%",
   },
}))

const LottieBoxContainer = styled(BoxContainer)(({ theme }) => ({
   [theme.breakpoints.down("sm")]: {
      display: "none",
   },
}))

const TextField = styled(MuiTextField)(() => ({
   margin: "0 0 2em 0",
}))

const Typography = styled(MuiTypography)(() => ({
   margin: "0 0 2em 0",
}))
