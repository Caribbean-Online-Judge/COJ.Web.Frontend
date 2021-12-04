// import "../styles/globals.css"
// import "../styles/blueimp-gallery-indicator.css"
// import "../styles/globals.css"
// import "../styles/main.css"
// import "../styles/blueimp-gallery-video.css"
// import "../styles/confirm-message.css"
// import "../styles/custom.bootstrap.tooltip.css"
// import "../styles/datatable.css"
// import "../styles/demo.css"
// import "../styles/docs.css"
// import "../styles/plagicoj.css"
// import "../styles/spectrum.css"
// import "../styles/statistics.css"
// import "../styles/style.css"
// import "../styles/TimeCircles.css"
// import "../styles/Home.module.css"
// import "../styles/wboard.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.css"
// import "../node_modules/bootstrap/dist/css/bootstrap-reboot.css"
// import "../node_modules/bootstrap/dist/css/bootstrap-utilities.css"
import React from "react"
import type { AppProps } from "next/app"
import Header from "../components/Header"
import AppDrawer from "../components/AppDrawer"
import { Provider } from "react-redux"
import { store } from "../api/redux"
import { ThemeProvider } from "@mui/material"
import theme from "../config/theme"
import Head from "next/head"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
   const router = useRouter()
   return (
      <>
         <Head>
            <title>Caribbean Online Judge</title>
         </Head>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               {router.pathname.startsWith("/account") ? (
                  <Component {...pageProps} />
               ) : (
                  <>
                     <Header />
                     <AppDrawer />
                     <Component {...pageProps} />
                  </>
               )}
            </ThemeProvider>
         </Provider>
      </>
   )
}

export default MyApp
