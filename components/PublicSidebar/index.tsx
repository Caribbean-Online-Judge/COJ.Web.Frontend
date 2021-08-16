import React from "react"
import { Person as PersonIcon, MoreHoriz as MoreHorizIcon } from "@material-ui/icons"
import { Button, Card } from "@material-ui/core"

export default function Index(): JSX.Element {
   return (
      <>
         <Card className="block">
            <div
               style={{
                  backgroundColor: "#4C83C3",
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  minHeight: "2rem",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               Login
            </div>
            <div>
               <div>
                  <form>
                     <div className="margin-top-05 form-group">
                        <div className="input-group">
                           <span className="input-group-addon">
                              <PersonIcon />
                           </span>
                           <input
                              className="form-control"
                              placeholder="User or email"
                              type="text"
                              name="j_username"
                           />
                        </div>
                     </div>
                     <div className="form-group">
                        <div className="input-group">
                           <span className="input-group-addon">
                              <MoreHorizIcon />
                           </span>
                           <input
                              className="form-control"
                              placeholder="Password"
                              name="j_password"
                              type="password"
                           />
                        </div>
                     </div>
                     <div className="form-group">
                        <span className="pull-right">
                           <Button className="pull-right btn btn-primary">
                              Login
                           </Button>
                        </span>
                     </div>
                     <div className="clearfix" />

                     <br />
                     <input type="hidden" />
                  </form>
               </div>

               <div className="cleared" />
            </div>
            <div className="cleared" />
         </Card>
      </>
   )
}
