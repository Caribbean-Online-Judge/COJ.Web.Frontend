import { styled } from "@mui/system"
import { AppBar } from "@mui/material"

export const GradientAppBar = styled(AppBar)(({ theme }) => ({
   background:
      "linear-gradient(to bottom right, " +
      theme.palette.primary.light +
      "," +
      theme.palette.primary.main +
      ")",
}))
