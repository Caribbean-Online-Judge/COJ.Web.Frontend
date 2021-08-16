import React from "react"
import PublicSidebar from "../PublicSidebar"

export default function Sidebar(): JSX.Element {
  return (
    <div>
      <PublicSidebar />
      <div className="block">
        <div className="panel panel-primary block-body">
          <div className="panel-heading">
            <i className="fa fa-clock-o fa-lg" />
            &nbsp; block.24h
          </div>
          <div className="panel-body blockcontent-body">
            <div>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-list">link.problems</i>
                </li>
                <li>
                  <i className="fa fa-legal" />
                  &nbsp; link.judgments
                </li>
                <li>
                  <i className="fa fa-sort-numeric-asc" />
                  &nbsp;link.standings
                  <ul>
                    <li className="item-sidebar-selected">
                      <i className="fa fa-users" />
                      &nbsp; link.users
                    </li>

                    <li className="item-sidebar-selected">
                      <i className="fa fa-institution" />
                      &nbsp; link.institutions
                    </li>

                    <li className="item-sidebar-selected">
                      <i className="fa fa-globe" />
                      &nbsp; link.countries
                    </li>
                  </ul>
                </li>
                <li className="item-sidebar-selected">
                  <i className="fa fa-refresh" />
                  &nbsp;link.cusers
                </li>

                <li className="item-sidebar-selected">
                  <i className="fa fa-bar-chart" />
                  &nbsp;link.statistics
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
            &nbsp; block.rcontests
          </div>
          <div className="panel-body blockcontent-body">
            <div>
              <ul className="list-unstyled">
                <li className="item-sidebar-selected">
                  <i className="fa fa-arrow-circle-right" />
                  &nbsp; link.coming
                  <span className="label label-danger" />
                </li>
                <li className="item-sidebar-selected">
                  <i className="fa fa-play" />
                  &nbsp;link.running
                  <span className="label label-success" />
                </li>
                <li className="item-sidebar-selected">
                  <i className="fa fa-arrow-circle-left" />
                  &nbsp;link.previous
                  <span className="label label-default" />
                </li>
                <li className="item-sidebar-selected">
                  <i className="fa fa-sort-numeric-asc" />
                  &nbsp;link.standings
                </li>
                <li className="item-sidebar-selected">
                  <i className="fa fa-bar-chart" />
                  &nbsp;link.statistics
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
