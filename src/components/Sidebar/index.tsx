import React from "react"
import PublicSidebar from "../PublicSidebar"
import { Icon } from "@mui/material"
import {
   AccessTime as AccessTimeIcon,
   ListAlt as ListAltIcon,
   Gavel as GavelIcon,
   TrendingDown as TrendingDownIcon,
   People as PeopleIcon,
   Apartment as ApartmentIcon,
   Public as PublicIcon,
   SupervisorAccount as SupervisorAccountIcon,
   Equalizer as EqualizerIcon,
   ArrowForward as ArrowForwardIcon,
   PlayArrow as PlayArrowIcon,
   ArrowBack as ArrowBackIcon,
} from "@mui/icons-material"

export default function Sidebar(): JSX.Element {
   return (
      <div>
         <PublicSidebar />
         <div className="block">
            <div className="panel panel-primary block-body">
               <div className="panel-heading">
                  <Icon>
                     <AccessTimeIcon />
                  </Icon>
                  &nbsp; Archivo de 24 horas
               </div>
               <div className="panel-body blockcontent-body">
                  <div>
                     <ul className="list-unstyled">
                        <li>
                           <Icon>
                              <ListAltIcon />
                           </Icon>
                           &nbsp; Problems
                        </li>
                        <li>
                           <Icon>
                              <GavelIcon />
                           </Icon>
                           &nbsp; Judgments
                        </li>
                        <li>
                           <Icon>
                              <TrendingDownIcon />
                           </Icon>
                           &nbsp;Standings
                           <ul>
                              <li className="item-sidebar-selected">
                                 <Icon>
                                    <PeopleIcon />
                                 </Icon>
                                 &nbsp; Users
                              </li>

                              <li className="item-sidebar-selected">
                                 <Icon>
                                    <ApartmentIcon />
                                 </Icon>
                                 &nbsp; Institutions
                              </li>

                              <li className="item-sidebar-selected">
                                 <Icon>
                                    <PublicIcon />
                                 </Icon>
                                 &nbsp; Countries
                              </li>
                           </ul>
                        </li>
                        <li className="item-sidebar-selected">
                           <Icon>
                              <SupervisorAccountIcon />
                           </Icon>
                           &nbsp; Compare users
                        </li>

                        <li className="item-sidebar-selected">
                           <Icon>
                              <EqualizerIcon />
                           </Icon>
                           &nbsp; Statistics
                        </li>
                     </ul>
                  </div>
                  <div className="cleared" />
               </div>
               <div className="cleared" />
            </div>
         </div>
         <div className="block">
            <div className="panel panel-primary block-body">
               <div className="panel-heading">
                  <i className="fa fa-trophy fa-lg" />
                  &nbsp; Real contests
               </div>
               <div className="panel-body blockcontent-body">
                  <div>
                     <ul className="list-unstyled">
                        <li className="item-sidebar-selected">
                           <Icon>
                              <ArrowForwardIcon />
                           </Icon>
                           &nbsp; Coming
                           <span className="label label-danger" />
                        </li>
                        <li className="item-sidebar-selected">
                           <Icon>
                              <PlayArrowIcon />
                           </Icon>
                           &nbsp;Running
                           <span className="label label-success" />
                        </li>
                        <li className="item-sidebar-selected">
                           <Icon>
                              <ArrowBackIcon />
                           </Icon>
                           &nbsp;Previous
                           <span className="label label-default" />
                        </li>
                        <li className="item-sidebar-selected">
                           <Icon>
                              <TrendingDownIcon />
                           </Icon>
                           &nbsp;Standings
                        </li>
                        <li className="item-sidebar-selected">
                           <Icon>
                              <EqualizerIcon />
                           </Icon>
                           &nbsp;Statistics
                        </li>
                     </ul>
                  </div>
                  <div className="cleared" />
               </div>
               <div className="cleared" />
            </div>
         </div>
      </div>
   )
}
