import {
   styled,
   TextField as MuiTextField,
   Box as MuiBox,
   Paper as MuiPaper,
   Stack as MuiStack,
   Typography as MuiTypography,
   Card as MuiCard,
} from "@mui/material"

export const TitleTextField = styled(MuiTextField)(() => ({
   margin: "1em 0 0.5em 0",
   width: "60%",
}))

export const DescriptionTextField = styled(MuiTextField)(() => ({
   margin: "0.5em 0 1em 0",
   width: "100%",
}))

export const TextField = styled(MuiTextField)(() => ({
   margin: "0.5em 0 0.5em 0",
}))

export const Box = styled(MuiBox)(() => ({
   display: "flex",
   flexDirection: "column",
   margin: "0 2em 0 2em",
   paddingBottom: "1em",
}))

export const HorizaontalBox = styled(Box)(() => ({
   flexDirection: "row",
   justifyContent: "space-between",
   margin: "2em 0 2em 0",
}))

export const Item = styled(MuiPaper)(({ theme }) => ({
   //...theme.typography.body2,
   //textAlign: "center",
   margin: "1em 0 1em 0",
   color: theme.palette.text.primary,
}))

export const Stack = styled(MuiStack)(() => ({
   margin: "2em 2em 0 2em",
   width: "10%",
}))

export const Typography = styled(MuiTypography)(() => ({
   margin: "0.125em 0 0.125em 0",
}))

export const Card = styled(MuiCard)(() => ({
   width: "49%",
   minHeight: "12em",
}))
