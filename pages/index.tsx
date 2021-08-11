import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

export default function Home(): JSX.Element {
  return (
    <>
      <div id="main">
        <div className="sheet">
          <div className="sheet-body">
            <Header />

            <div className="content-layout">
              <div className="content-layout-row">
                <Sidebar />

                <div className="layout-cell content">
                  <div className="post">
                    <div className="post-body">
                      <div className="post-inner article">
                        <div className="pull-right">
                          <table className="contestlanguages">
                            <tbody>
                              <tr>
                                <td>
                                  <b>Status:</b>
                                </td>
                                <td>
                                  <span className="label label-success">
                                    fieldhdr.running
                                  </span>
                                  <span className="label label-danger">
                                    fieldhdr.coming
                                  </span>
                                  <span className="label label-default">
                                    fieldhdr.past
                                  </span>
                                </td>
                                <td>
                                  <b>fieldhdr.elapsed :</b>
                                </td>
                                <td>
                                  <div
                                    className="countup"
                                    data-start-date="${contest.initdate.time}"
                                    data-end-date="${contest.enddate.time}"
                                  />
                                </td>
                                <td>
                                  <b>fieldhdr.remaining :</b>
                                </td>
                                <td>
                                  <div
                                    className="countdown"
                                    data-date="${contest.enddate.time}"
                                  />
                                </td>

                                <td>
                                  <b>fieldhdr.start :</b>
                                </td>
                                <td>
                                  <b>fieldhdr.end :</b>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={6} style={{ textAlign: "center" }}>
                                  <span className="label label-danger">
                                    <i className="fa fa-warning" />
                                    &nbsp; text.deadtime
                                  </span>

                                  <span className="label label-primary">
                                    <i className="fa fa-info-circle" />
                                    &nbsp; text.frozentime
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br />
                        <div className="clearfix" />
                        <a id="header" />
                        <Content />
                        <div className="pull-right">
                          <i className="fa fa-toggle-up fa-lg" />
                        </div>
                        <div className="cleared" />
                      </div>
                      <div className="cleared" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cleared" />
            <div className="footer">
              <div className="footer-inner">
                <div className="footer-text">
                  <Footer />
                </div>
              </div>
            </div>
            <div className="cleared" />
          </div>
        </div>
        <div className="cleared" />
      </div>
    </>
  )
}
