import React, { useState, useEffect } from "react"
import {
   Toolbar,
   IconButton,
   Typography,
   Menu,
   MenuItem,
   Tooltip,
   CircularProgress,
} from "@mui/material"
import {
   Menu as MenuIcon,
   AccountCircle as AccountCircleIcon,
   Login as LoginIcon,
   Close as CloseIcon,
} from "@mui/icons-material"
import {
   toggleIsDrawerOpen,
   useAppSelector,
   setUserInfo,
   setIsAuthenticated,
} from "@/api/redux"
import { useDispatch } from "react-redux"
import Link from "next/link"
import { GradientAppBar } from "./styles"
import { RequestStatus } from "@/types"
import { useServerManager } from "@/api/server"

export default function Header(): JSX.Element {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const [requestStatus, setRequestStatus] = useState<RequestStatus>("progress")
   const isMenuOpen = Boolean(anchorEl)
   const dispatch = useDispatch()
   const serverManager = useServerManager()
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

   useEffect(() => {
      serverManager
         .getAccountInfo()
         .then((r) => {
            console.log(r.data)
            dispatch(setUserInfo(r.data))
            dispatch(setIsAuthenticated(true))
         })
         .catch(() => {
            dispatch(setIsAuthenticated(false))
         })
         .finally(() => setRequestStatus("successfull"))
   }, [])

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
            {requestStatus === "progress" ? (
               <CircularProgress color={"inherit"} />
            ) : isAuthenticated ? (
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
