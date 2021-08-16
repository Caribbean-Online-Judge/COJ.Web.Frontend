import React from "react"
import { Icon } from "@material-ui/core"
import { ExpandLess as ExpandLessIcon } from "@material-ui/icons"
export default function Admin(): JSX.Element {
   return (
      <>
         <div>
            <h2 className="postheader">Administration</h2>
         </div>
         <div className="postcontent">
            <div className="row">
               <div className="col-xs-12">
                  <div className="panel panel-primary">
                     <div className="panel-heading">
                        Users
                        <div className="badge pull-right">
                           <a data-toggle="collapse" href="#gUsers">
                              <i
                                 data-toggle="tooltip"
                                 className="fa fa-chevron-up"
                              />
                           </a>
                        </div>
                     </div>
                     <div id="gUsers" className="panel-body collapse in">
                        <div>
                           <div id="userStatus" className="panel-body collapse in">
                              <ul className="list-inline">
                                 <li>
                                    <label className="label bg${userStatus[0]['status']}">
                                       Active
                                    </label>
                                 </li>

                                 <li>
                                    <label className="label bg${userStatus[3]['status']}">
                                       <a
                                          className="white status"
                                          data-status="${userStatus[3]['status']}"
                                       >
                                          <i
                                             data-toggle="tooltip"
                                             className="fa fa-bell"
                                          />
                                       </a>
                                       Active
                                    </label>
                                    &nbsp;
                                    <label className="label bg${userStatus[3]['status']}">
                                       Active
                                    </label>
                                 </li>
                                 <li>
                                    <label className="label bg${userStatus[4]['status']}">
                                       <a
                                          className="white status"
                                          data-status="${userStatus[4]['status']}"
                                       >
                                          <i
                                             data-toggle="tooltip"
                                             className="fa fa-bell"
                                          />
                                       </a>
                                    </label>
                                    &nbsp;
                                    <label className="label bg${userStatus[4]['status']}">
                                       Active
                                    </label>
                                 </li>
                              </ul>
                           </div>

                           <div className="col-xs-4">
                              Manage
                              <i data-toggle="tooltip" className="fa fa-gear" />
                              &nbsp; Activations
                           </div>
                           <div className="col-xs-4">
                              Manage
                              <i data-toggle="tooltip" className="fa fa-gear" />
                              &nbsp; Users
                           </div>
                           <div className="col-xs-4">
                              Manage
                              <i data-toggle="tooltip" className="fa fa-gear" />
                              &nbsp; System sessions
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xs-12">
               <div className="panel panel-primary">
                  <div className="panel-heading">
                     Problems
                     <div className="badge pull-right">
                        <a data-toggle="collapse" href="#gProblems">
                           <Icon>
                              <ExpandLessIcon />
                           </Icon>
                        </a>
                     </div>
                  </div>
                  <div id="gProblems" className="panel-body collapse in">
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        Manage &nbsp; Problems
                     </div>
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        Manage &nbsp; Problem classification
                     </div>
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        Manage &nbsp; Sources
                     </div>
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        Manage &nbsp; Tags
                     </div>
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        Manage &nbsp; Translations
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xs-12">
               <div className="panel panel-primary">
                  <div className="panel-heading">
                     Contests
                     <div className="badge pull-right">
                        <a data-toggle="collapse" href="#gContests">
                           <i data-toggle="tooltip" className="fa fa-chevron-up" />
                        </a>
                     </div>
                  </div>
                  <div id="gContests" className="panel-body collapse in">
                     <div className="col-xs-4">
                        Manage
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Real contests
                     </div>
                     <div className="col-xs-4">
                        Manage
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Teams
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xs-12">
               <div className="panel panel-primary">
                  <div className="panel-heading">
                     Submits
                     <div className="badge pull-right">
                        <a data-toggle="collapse" href="#gSubmits">
                           <i data-toggle="tooltip" className="fa fa-chevron-up" />
                        </a>
                     </div>
                  </div>
                  <div id="gSubmits" className="panel-body collapse in">
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Submissions
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xs-12">
               <div className="panel panel-primary">
                  <div className="panel-heading">
                     Miscellaneous
                     <div className="badge pull-right">
                        <a data-toggle="collapse" href="#gMisc">
                           <i data-toggle="tooltip" className="fa fa-chevron-up" />
                        </a>
                     </div>
                  </div>
                  <div id="gMisc" className="panel-body collapse in">
                     <div className="col-xs-4">
                        Manage
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Announcements
                     </div>
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     Manage &nbsp; Mail notifications
                  </div>
                  <div className="col-xs-4">
                     Manage <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; Files
                  </div>

                  <div className="col-xs-4">
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; Programming languages
                  </div>
                  <div className="col-xs-4">
                     Manage
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; FAQ
                  </div>
                  <div className="col-xs-4">
                     Manage
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; Institutions
                  </div>
                  <div className="col-xs-4">
                     Manage
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; Countries
                  </div>
                  <div className="col-xs-4">
                     Manage
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; Corrections
                  </div>

                  <div className="col-xs-4">
                     Manage
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; Polls
                  </div>
                  <div className="col-xs-4">
                     Entries
                     <i data-toggle="tooltip" className="fa fa-gear" />
                     &nbsp; Entries
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xs-12">
               <div className="panel panel-primary">
                  <div className="panel-heading">
                     Configuration
                     <div className="badge pull-right">
                        <a data-toggle="collapse" href="#gConfiguration">
                           <i data-toggle="tooltip" className="fa fa-chevron-up" />
                        </a>
                     </div>
                  </div>
                  <div id="gConfiguration" className="panel-body collapse in">
                     <div className="col-xs-4">
                        Manage
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; System logs
                     </div>
                     <div className="col-xs-4">
                        Manage
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Global flags
                     </div>
                     <div className="col-xs-4">
                        Manage
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Global access rules
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xs-12">
               <div className="panel panel-primary">
                  <div className="panel-heading">
                     COJ Board
                     <div className="badge pull-right">
                        <a data-toggle="collapse" href="#gWebBoard">
                           <i data-toggle="tooltip" className="fa fa-chevron-up" />
                        </a>
                     </div>
                  </div>
                  <div id="gWebBoard" className="panel-body collapse in">
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Parsers
                     </div>
                     <div className="col-xs-4">
                        Manage
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Sites
                     </div>
                     <div className="col-xs-4">
                        <i data-toggle="tooltip" className="fa fa-gear" />
                        &nbsp; Contests
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
