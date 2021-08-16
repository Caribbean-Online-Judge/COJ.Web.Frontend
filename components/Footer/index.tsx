import React from "react"
import Link from "next/link"

export default function Footer(): JSX.Element {
   return (
      <p>
         <a href="http://www.uci.cu">
            Universidad de las Ciencias Informáticas (UCI)
         </a>
         <br />
         2010-2019 | COJ v2.0 | All rights reserved
         <br />
         In case of any question or comment, please{" "}
         <Link href="/">
            <u>contact us</u>
         </Link>
         .
      </p>
   )
}
