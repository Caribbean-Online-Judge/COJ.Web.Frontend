import React from "react"
import "../styles/globals.css"
import "../styles/blueimp-gallery-indicator.css"
import "../styles/globals.css"
import "../styles/main.css"
import "../styles/blueimp-gallery-video.css"
import "../styles/confirm-message.css"
import "../styles/custom.bootstrap.tooltip.css"
import "../styles/datatable.css"
import "../styles/demo.css"
import "../styles/docs.css"
import "../styles/plagicoj.css"
import "../styles/spectrum.css"
import "../styles/statistics.css"
import "../styles/style.css"
import "../styles/TimeCircles.css"
import "../styles/Home.module.css"
import "../styles/wboard.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.css"
import "../node_modules/bootstrap/dist/css/bootstrap-utilities.css"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
   return <Component {...pageProps} />
}
export default MyApp
