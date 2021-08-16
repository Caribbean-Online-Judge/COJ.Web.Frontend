import React from "react"

export default function Header(): JSX.Element {
  return (
    <div className={"row header"}>
      <div className={"headercss"}>
        <a href="/index.xhtml">
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
        </a>
      </div>
    </div>
  )
}
