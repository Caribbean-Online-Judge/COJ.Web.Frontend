import {
   Card as MuiCard,
   styled,
   Box,
   Typography as MuiTypography,
   Button as MuiButton,
} from "@mui/material"
import { TextField as CustomTextField } from "@/components/inputs"

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

export const Card = styled(MuiCard)(() => ({
   display: "flex",
   flexDirection: "column",
   width: "50%",
}))

export const TextField = styled(CustomTextField)(() => ({
   margin: "0.5em 3em 1em 3em",
   width: "80%",
}))

export const Typography = styled(MuiTypography)(() => ({
   margin: "0.7em 0 0 0",
}))

export const Button = styled(MuiButton)(() => ({
   margin: "0.5em 3em 1em 3.5em",
   width: "80%",
}))
