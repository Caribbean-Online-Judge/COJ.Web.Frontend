import React from "react"

function VProblems(): JSX.Element {
   return (
      <>
         <h2 className="postheader">
            {/* <a class="linkheader" href="<c:url value="vcontestview.xhtml?cid=${contest.cid}"/>">${contest.name}</a> */}
            <br />
            spring:message code=pagehdr.problems
         </h2>
         <div className="postcontent">
            <div
               id="display-table-container"
               data-reload-url="/tables/vproblems.xhtml"
            ></div>
         </div>
         {/* <script>
            $(document).ready(displayTableReload(" "));
          </script> */}
      </>
   )
}

export default VProblems
