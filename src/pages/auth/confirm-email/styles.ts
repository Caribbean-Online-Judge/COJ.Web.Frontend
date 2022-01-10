import {
   styled,
   Box,
   Card,
   Typography as MuiTypography,
   Button as MuiButton,
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
   minHeight: "60%",
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "60%",
   },
}))

export const Typography = styled(MuiTypography)(() => ({
   margin: "2em 0 2em 0",
}))

export const Button = styled(MuiButton)(() => ({
   margin: "2em 0 2em 0",
   width: "60%",
}))
