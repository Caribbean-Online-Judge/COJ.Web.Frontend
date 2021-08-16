import React from "react"
import VirtualContest from "../../components/Templates/VirtualContest"

function Practices(): JSX.Element {
  return (
    <>
      <h2 className="postheader">spring:message code="pagehdr.vcoverview"</h2>
      <div className="postcontent">
        spring:message code="text.vcoverview.1"
        <br />
        <br />
        spring:message code="text.vcoverview.2"
        <br />
        <br />
        spring:message code="text.vcoverview.3"
        <br />
        <ol>
          <li>spring:message code="text.vcoverview.4" </li>
          <li>spring:message code="text.vcoverview.5" </li>
          <li>spring:message code="text.vcoverview.6" </li>
          <li>spring:message code="text.vcoverview.7" </li>
          <li>spring:message code="text.vcoverview.8" </li>
          <li>spring:message code="text.vcoverview.9" </li>
        </ol>
      </div>
    </>
  )
}

export default Practices
