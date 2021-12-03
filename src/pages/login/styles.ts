import {
   Box,
   Card,
   TextField as MuiTextField,
   styled,
   Typography as MuiTypography,
} from "@mui/material"

export const RootContainer = styled(Box)(({ theme }) => ({
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

export const SignInCard = styled(Card)(({ theme }) => ({
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

export const BoxContainer = styled(Box)(({ theme }) => ({
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

export const LottieBoxContainer = styled(BoxContainer)(({ theme }) => ({
   [theme.breakpoints.down("sm")]: {
      display: "none",
   },
}))

export const TextField = styled(MuiTextField)(() => ({
   margin: "0 0 2em 0",
}))

export const Typography = styled(MuiTypography)(() => ({
   margin: "0 0 2em 0",
}))
