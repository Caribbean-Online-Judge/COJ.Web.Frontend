import React, { useState } from "react"
import {
   Toolbar,
   IconButton,
   Typography,
   Menu,
   MenuItem,
   Tooltip,
} from "@mui/material"
import {
   Menu as MenuIcon,
   AccountCircle as AccountCircleIcon,
   Login as LoginIcon,
   Close as CloseIcon,
} from "@mui/icons-material"
import { toggleIsDrawerOpen, useAppSelector } from "../../api/redux"
import { useDispatch } from "react-redux"
import Link from "next/link"
import { GradientAppBar } from "./styles"
export default function Header(): JSX.Element {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const isMenuOpen = Boolean(anchorEl)
   const dispatch = useDispatch()
   const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
   const isDrawerOpen = useAppSelector((state) => state.ui.isDeawerOpen)

   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleMenuClose = () => {
      setAnchorEl(null)
   }

   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
         }}
         id={"primary-search-account-menu"}
         keepMounted
         transformOrigin={{
            vertical: "top",
            horizontal: "right",
         }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
   )

   return (
      <GradientAppBar position={"relative"}>
         <Toolbar>
            <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="open drawer"
               sx={{ mr: 2 }}
               onClick={() => dispatch(toggleIsDrawerOpen())}
            >
               {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
               variant="h4"
               sx={{ flexGrow: 1 }}
               //color={'primary'}
               fontWeight={500}
            >
               Caribbean Online Judge
            </Typography>
            {isAuthenticated ? (
               <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleProfileMenuOpen}
               >
                  <AccountCircleIcon />
               </IconButton>
            ) : (
               <Link href="/auth/sign-in">
                  <Tooltip title={"Login"} arrow>
                     <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                     >
                        <LoginIcon />
                     </IconButton>
                  </Tooltip>
               </Link>
            )}
         </Toolbar>
         {renderMenu}
      </GradientAppBar>
   )
}
