import { styled, List as MuiList } from "@mui/material"

export const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: "center",
}))

export const List = styled(MuiList)(() => ({
   width: 300,
}))
