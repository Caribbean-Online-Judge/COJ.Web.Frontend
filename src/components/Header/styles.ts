import { AppBar, styled } from "@mui/material"

export const GradientAppBar = styled(AppBar)(({ theme }) => ({
   background: theme.palette.primary.main,
   zIndex: theme.zIndex.drawer,
}))
