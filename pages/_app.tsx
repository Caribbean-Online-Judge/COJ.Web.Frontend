import React from "react"
import "../styles/globals.css"
import "../styles/blueimp-gallery-indicator.css"
import "../styles/globals.css"
import "../styles/main.css"
import "../styles/blueimp-gallery-video.css"
import "../styles/bootstrap-dialog.min.css"
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

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
export default MyApp
