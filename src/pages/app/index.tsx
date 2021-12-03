import React from "react"
import Lottie from "react-lottie-player"

import anim from "../../assets/lottie/website-build-anim.json"

export default function App(): JSX.Element {
   return (
      <div>
         <Lottie loop animationData={anim} play style={{ height: 500 }} />
      </div>
   )
}
