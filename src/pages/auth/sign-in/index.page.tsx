import React, { useEffect } from "react"
// import Lottie from "react-lottie-player"
// import coderBoyAnim from "@/assets/lottie/coder-boy-anim.json"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setIsAuthenticated } from "@/api/redux"
import {
   // BoxContainer,
   // LottieBoxContainer,
   // RootContainer,
   // SignInCard,
   TextField,
   // Typography,
   // TypographyLink,
} from "./styles"
//import { CircularProgress, Typography as MuiTypography } from "@mui/material"
import Link from "next/link"
import { useServerManager } from "@/api/server"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { RequestStatus } from "@/types"
import {
   Grid,
   Box,
   Avatar,
   Paper,
   FormControlLabel,
   Checkbox,
   Button,
   Typography,
   CircularProgress,
} from "@mui/material"
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material"

export default function Login(): JSX.Element {
   const router = useRouter()
   const dispatch = useDispatch()
   const serverManager = useServerManager()

   const [requestStatus, setRequestStatus] = useState<RequestStatus>("unrequested")

   const { handleSubmit, control, getValues } = useForm({
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

   useEffect(() => {
      serverManager.getAccountInfo().then((r) => {
         if (r.status === 200) router.replace("/")
      })
   }, [])

   return (
      <Grid container component="main" sx={{ height: "100vh" }}>
         <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
               backgroundImage: "url(https://source.unsplash.com/random)",
               backgroundRepeat: "no-repeat",
               backgroundColor: (t) =>
                  t.palette.mode === "light"
                     ? t.palette.grey[50]
                     : t.palette.grey[900],
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         />
         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
               sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign in
               </Typography>
               <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit(handleLogin)}
                  sx={{ mt: 1 }}
               >
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     autoComplete="email"
                     autoFocus
                     control={control}
                     fieldName="usernameOrEmail"
                     rules={{ required: "Title is requierd" }}
                     id="usernameOrEmail"
                     label="Username or Email"
                     variant="outlined"
                     type={"username"}
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     type="password"
                     autoComplete="current-password"
                     control={control}
                     fieldName="password"
                     rules={{ required: "Title is requierd" }}
                     id="password"
                     label="Password"
                     variant="outlined"
                  />
                  <FormControlLabel
                     control={<Checkbox value="remember" color="primary" />}
                     label="Remember me"
                  />
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                  >
                     {requestStatus === "progress" ? (
                        <CircularProgress size={24} color="inherit" />
                     ) : (
                        "Sign In"
                     )}
                  </Button>
                  {requestStatus === "error" && (
                     <Typography align="left" color={"error"}>
                        An unexpected error has occured
                     </Typography>
                  )}
                  <Grid container>
                     <Grid item xs>
                        <Link href="#">Forgot password?</Link>
                     </Grid>
                     <Grid item>
                        <Link href="#">{"Don't have an account? Sign Up"}</Link>
                     </Grid>
                  </Grid>
                  {/* <Copyright sx={{ mt: 5 }} /> */}
               </Box>
            </Box>
         </Grid>
      </Grid>
      // <RootContainer>
      //    <SignInCard>
      //       <BoxContainer>
      //          <Typography
      //             align={"center"}
      //             color={"primary"}
      //             variant="h5"
      //             sx={{ flexGrow: 1 }}
      //             fontWeight={500}
      //          >
      //             Carribean Online Judge
      //          </Typography>
      //          <TextField
      //             control={control}
      //             fieldName="usernameOrEmail"
      //             rules={{ required: "Title is requierd" }}
      //             id="usernameOrEmail"
      //             label="Username or Email"
      //             variant="outlined"
      //             type={"username"}
      //             fullWidth
      //             required
      //          />
      //          <TextField
      //             control={control}
      //             fieldName="password"
      //             rules={{ required: "Title is requierd" }}
      //             id="password"
      //             label="Password"
      //             variant="outlined"
      //             type={"password"}
      //             fullWidth
      //             required
      //          />
      //          <Button
      //             variant={"contained"}
      //             fullWidth
      //             onClick={handleSubmit(handleLogin)}
      //             disabled={!formState.isValid || requestStatus === "progress"}
      //          >
      //             {requestStatus === "progress" ? (
      //                <CircularProgress size={24} />
      //             ) : (
      //                "Sign In"
      //             )}
      //          </Button>
      //          {requestStatus === "error" && (
      //             <MuiTypography align="left" color={"error"}>
      //                An unexpected error has occured
      //             </MuiTypography>
      //          )}
      //          <Link href="/auth/sign-up">
      //             <TypographyLink
      //                align={"center"}
      //                color={"primary"}
      //                variant="body1"
      //                sx={{ flexGrow: 0.8 }}
      //                fontWeight={400}
      //             >
      //                Sign Up in COJ
      //             </TypographyLink>
      //          </Link>
      //       </BoxContainer>
      //       <LottieBoxContainer>
      //          <Lottie
      //             loop
      //             animationData={coderBoyAnim}
      //             play
      //             style={{ height: 400 }}
      //          />
      //       </LottieBoxContainer>
      //    </SignInCard>
      // </RootContainer>
   )
}
