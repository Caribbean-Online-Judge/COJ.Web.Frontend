import { AppBar, styled } from "@mui/material"

export const GradientAppBar = styled(AppBar)(({ theme }) => ({
   background:
      "linear-gradient(to bottom right, " +
      theme.palette.primary.light +
      "," +
      theme.palette.primary.main +
      ")",
   zIndex: theme.zIndex.drawer,
}))
