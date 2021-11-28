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
import Header from "../components/Header"
import SideBar from "../components/Sidebar"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
   return (
      <>
         <div id="main">
            <div className="sheet">
               <div className="sheet-body">
                  <Header />
                  <div className="content-layout">
                     <div className="content-layout-row">
                        <SideBar />
                        <div className="layout-cell content">
                           <div className="post">
                              <div className="post-body">
                                 <div className="post-inner article">
                                    <div className="clearfix"></div>
                                    <a id="header"></a>
                                    <Component {...pageProps} />
                                    <div className="pull-right">
                                       <a
                                          href="#header"
                                          title='spring:message code=" titval.top"'
                                       >
                                          <i className="fa fa-toggle-up fa-lg"></i>
                                       </a>
                                    </div>
                                    <div className="cleared"></div>
                                 </div>

                                 <div className="cleared"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="cleared"></div>
                  <div className="footer">
                     <div className="footer-inner">
                        <div className="footer-text">
                           <Footer />
                        </div>
                     </div>
                  </div>
                  <div className="cleared"></div>
               </div>
            </div>
            <div className="cleared"></div>
         </div>
      </>
   )
}
