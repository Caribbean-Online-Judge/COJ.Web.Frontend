import React from "react"
import Header from "../../Header"
import SideBar from "../../Sidebar"
import Footer from "../../Footer"

function VirtualContest(children: JSX.Element): JSX.Element {
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
                                    {/* <c:if test="${contest != null and contest.initdate != null and (contest.past or contest.running or contest.coming)}">
                          <div class="pull-right">
                            <table class="contestlanguages" style="align: right">
                              <tbody>
                                <tr>
                                  <td><b><spring:message code="fieldhdr.status" />:
                                  </b></td>
                                  <td><c:choose>
                                    <c:when test="${contest.running == true}">
                                      <span class="label label-success"><spring:message
                                        code="fieldhdr.running" /></span>
                                    </c:when>
                                    <c:when test="${contest.coming == true}">
                                      <span class="label label-danger"><spring:message
                                        code="fieldhdr.coming" /></span>
                                    </c:when>
                                    <c:when test="${contest.past == true}">
                                      <span class="label label-default"><spring:message
                                        code="fieldhdr.past" /></span>
                                    </c:when>
                                  </c:choose></td>
                                  <c:if test="${contest.running}">
                                    <td><b><spring:message code="fieldhdr.elapsed" />:</b></td>
                                    <td>
                                      <div class="countup"
                                        data-start-date="${contest.initdate.time}"
                                        data-end-date="${contest.enddate.time}"></div>
                                    </td>
                                    <td><b><spring:message code="fieldhdr.remaining" />:</b></td>
                                    <td>
                                      <div class="countdown"
                                        data-date="${contest.enddate.time}"></div>
                                    </td>
                                  </c:if>
                                  <c:if test="${contest.past or contest.coming}">
                                    <td><b><spring:message code="fieldhdr.start" />:</b></td>
                                    <td><fmt:formatDate value="${contest.initdate}"
                                      pattern="yyyy-MM-dd HH:mm:ss" /></td>
                                    <td><b><spring:message code="fieldhdr.end" />:
                                    </b></td>
                                    <td><fmt:formatDate value="${contest.enddate}"
                                      pattern="yyyy-MM-dd HH:mm:ss" /></td>
                                  </c:if>
                                </tr>
                                <c:if
                                  test="${contest.running == true && (contest.full_frozen == true || contest.frozen == true)}">
                                  <tr>
                                    <td colspan="6" style="text-align: right"><c:choose>
                                      <c:when test="${contest.full_frozen == true}">
                                        <span class="label label-danger"><i
                                          class="fa fa-warning"></i>&nbsp;<spring:message
                                            code="text.deadtime" /></span>
                                      </c:when>
                                      <c:otherwise>
                                        <span class="label label-primary"><i
                                          class="fa fa-info-circle"></i>&nbsp;<spring:message
                                            code="text.frozentime" /></span>
                                      </c:otherwise>
                                    </c:choose></td>
                                  </tr>
                                </c:if>

                              </tbody>
                            </table>
                          </div>
                          <br />
                        </c:if> */}
                                    <div className="clearfix" />
                                    <a id="header" />
                                    {children}
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

export default VirtualContest
