import React from "react"
import Link from "next/link"

export default function Header(): JSX.Element {
   return (
      <div className={"row header"}>
         <div className={"headercss"}>
            <Link href="/">
               <>
                  <div className="headerlf">
                     <div className="headerleft">
                        <div className="logoc">C</div>
                        <div className="logoo">O</div>
                        <div className="logoj">J</div>
                     </div>
                  </div>
                  <div className="headerrigth">
                     <span className="bannername">Caribbean Online Judge</span>
                  </div>
               </>
            </Link>
         </div>
      </div>
   )
}
