import {
   styled,
   List as MuiList,
   Box as MuiBox,
   Backdrop as MuiBackdrop,
   Paper as MuiPaper,
} from "@mui/material"

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

export const Box = styled(MuiBox)(({ theme }) => ({
   position: "fixed",
   zIndex: theme.zIndex.drawer,
   height: "-webkit-fill-available",
   marginBottom: "80px",
}))

export const Backdrop = styled(MuiBackdrop)(({ theme }) => ({
   color: theme.palette.common.white,
   zIndex: theme.zIndex.drawer - 1,
}))

export const Paper = styled(MuiPaper)(() => ({
   height: "100%",
}))
