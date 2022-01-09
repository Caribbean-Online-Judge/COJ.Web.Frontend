import {
   styled,
   Box,
   Card,
   Typography as MuiTypography,
   TextField as MuiTextField,
   FormControlLabel as MuiFormControlLabel,
   Button as MuiButton,
} from "@mui/material"

export const RootContainer = styled(Box)(({ theme }) => ({
   background:
      "linear-gradient(to bottom right, " +
      theme.palette.primary.light +
      "," +
      theme.palette.primary.main +
      ")",
   minHeight: "100vh",
   // width: "100vw",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   overflowX: "hidden",
}))

export const RegisterCard = styled(Card)(({ theme }) => ({
   width: "50%",
   minHeight: "60%",
   maxHeight: "80%",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "60%",
   },
   margin: "2em 0 2em 0",
   paddingBottom: "0.5em",
   overflowX: "hidden",
}))

export const Typography = styled(MuiTypography)(() => ({
   margin: "1.5em 0 1em 0",
   // "&:hover": {
   //    cursor: "pointer",
   // },
}))

export const TextField = styled(MuiTextField)(() => ({
   margin: "0.5em 3em 0.5em 3em",
   width: "80%",
}))

export const FormControlLabel = styled(MuiFormControlLabel)(() => ({
   width: "80%",
}))

export const Button = styled(MuiButton)(() => ({
   width: "80%",
   margin: "0.5em 3em 0.5em 3em",
}))
