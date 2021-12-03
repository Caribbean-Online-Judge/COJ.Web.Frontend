import {
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Collapse,
   Typography,
   Drawer,
} from "@mui/material"
import React from "react"
import {
   ViewList as ViewListIcon,
   Gavel as GavelIcon,
   Sort as SortIcon,
   Cached as CachedIcon,
   BarChart as BarChartIcon,
   Person as PersonIcon,
   Domain as DomainIcon,
   Public as PublicIcon,
   ExpandLess as ExpandLessIcon,
   ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material"
import { DrawerHeader, List } from "./styles"
import { useAppSelector, closeDrawer } from "../../api/redux"
import { useDispatch } from "react-redux"

export default function AppDrawer(): JSX.Element {
   const [open, setOpen] = React.useState(false)
   const dispatch = useDispatch()
   const isDrawerOpen = useAppSelector((state) => state.ui.isDeawerOpen)

   const handleClick = () => {
      setOpen(!open)
   }

   return (
      <Drawer open={isDrawerOpen} onBackdropClick={() => dispatch(closeDrawer())}>
         <DrawerHeader>
            <Typography
               align={"center"}
               color={"primary"}
               variant="h4"
               sx={{ flexGrow: 1 }}
               fontWeight={700}
            >
               COJ
            </Typography>
         </DrawerHeader>
         <List>
            <ListItemButton>
               <ListItemIcon>
                  <ViewListIcon />
               </ListItemIcon>
               <ListItemText
                  sx={{ my: 0 }}
                  primaryTypographyProps={{
                     fontSize: 20,
                     fontWeight: "medium",
                     letterSpacing: 0,
                  }}
                  primary={"Problems"}
               />
            </ListItemButton>
            <ListItemButton>
               <ListItemIcon>
                  <GavelIcon />
               </ListItemIcon>
               <ListItemText
                  sx={{ my: 0 }}
                  primaryTypographyProps={{
                     fontSize: 20,
                     fontWeight: "medium",
                     letterSpacing: 0,
                  }}
                  primary={"Judgments"}
               />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
               <ListItemIcon>
                  <SortIcon />
               </ListItemIcon>
               <ListItemText
                  sx={{ my: 0 }}
                  primaryTypographyProps={{
                     fontSize: 20,
                     fontWeight: "medium",
                     letterSpacing: 0,
                  }}
                  primary={"Standings"}
               />
               {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                     <ListItemIcon>
                        <PersonIcon />
                     </ListItemIcon>
                     <ListItemText
                        sx={{ my: 0 }}
                        primaryTypographyProps={{
                           fontSize: 20,
                           fontWeight: "medium",
                           letterSpacing: 0,
                        }}
                        primary={"Users"}
                     />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                     <ListItemIcon>
                        <DomainIcon />
                     </ListItemIcon>
                     <ListItemText
                        sx={{ my: 0 }}
                        primaryTypographyProps={{
                           fontSize: 20,
                           fontWeight: "medium",
                           letterSpacing: 0,
                        }}
                        primary={"Institutions"}
                     />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                     <ListItemIcon>
                        <PublicIcon />
                     </ListItemIcon>
                     <ListItemText
                        sx={{ my: 0 }}
                        primaryTypographyProps={{
                           fontSize: 20,
                           fontWeight: "medium",
                           letterSpacing: 0,
                        }}
                        primary={"Countries"}
                     />
                  </ListItemButton>
               </List>
            </Collapse>
            <ListItemButton>
               <ListItemIcon>
                  <CachedIcon />
               </ListItemIcon>
               <ListItemText
                  sx={{ my: 0 }}
                  primaryTypographyProps={{
                     fontSize: 20,
                     fontWeight: "medium",
                     letterSpacing: 0,
                  }}
                  primary={"Compare Users"}
               />
            </ListItemButton>
            <ListItemButton>
               <ListItemIcon>
                  <BarChartIcon />
               </ListItemIcon>
               <ListItemText
                  sx={{ my: 0 }}
                  primaryTypographyProps={{
                     fontSize: 20,
                     fontWeight: "medium",
                     letterSpacing: 0,
                  }}
                  primary={"Statistics"}
               />
            </ListItemButton>
         </List>
      </Drawer>
   )
}
