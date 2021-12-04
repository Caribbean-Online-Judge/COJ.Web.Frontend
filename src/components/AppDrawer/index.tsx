import { ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material"
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
import { List, Box, Backdrop, Paper } from "./styles"
import { useAppSelector, toggleIsDrawerOpen } from "../../api/redux"
import { useDispatch } from "react-redux"
import Link from "next/link"
export default function AppDrawer(): JSX.Element {
   const [open, setOpen] = React.useState(false)
   const dispatch = useDispatch()
   const isDrawerOpen = useAppSelector((state) => state.ui.isDeawerOpen)

   const handleClick = () => {
      setOpen(!open)
   }

   return (
      <>
         <Backdrop
            open={isDrawerOpen}
            onClick={() => dispatch(toggleIsDrawerOpen())}
         />
         <Box>
            <Collapse
               orientation="horizontal"
               in={isDrawerOpen}
               style={{ height: "100%" }}
            >
               <Paper sx={{ m: 1 }} elevation={4}>
                  <List>
                     <Link href="/24h">
                        <ListItemButton>
                           <ListItemIcon>
                              <ViewListIcon />
                           </ListItemIcon>
                           <ListItemText primary={"Problems"} />
                        </ListItemButton>
                     </Link>
                     <Link href="/24h/judgments">
                        <ListItemButton>
                           <ListItemIcon>
                              <GavelIcon />
                           </ListItemIcon>
                           <ListItemText primary={"Judgments"} />
                        </ListItemButton>
                     </Link>
                     <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                           <SortIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Standings"} />
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                     </ListItemButton>
                     <Collapse in={open} timeout="auto" unmountOnExit>
                        <List disablePadding>
                           <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <PersonIcon />
                              </ListItemIcon>
                              <ListItemText primary={"Users"} />
                           </ListItemButton>
                           <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <DomainIcon />
                              </ListItemIcon>
                              <ListItemText primary={"Institutions"} />
                           </ListItemButton>
                           <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <PublicIcon />
                              </ListItemIcon>
                              <ListItemText primary={"Countries"} />
                           </ListItemButton>
                        </List>
                     </Collapse>
                     <ListItemButton>
                        <ListItemIcon>
                           <CachedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Compare Users"} />
                     </ListItemButton>
                     <ListItemButton>
                        <ListItemIcon>
                           <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Statistics"} />
                     </ListItemButton>
                  </List>
               </Paper>
            </Collapse>
         </Box>
      </>
   )
}
