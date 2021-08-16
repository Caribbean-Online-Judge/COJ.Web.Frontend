import React from "react"

function MyList(): JSX.Element {
  return (
    <>
      <h2 className="postheader">spring:message code="pagehdr.pcsmylist"</h2>
      <div className="postcontent">
        <div
          id="display-table-container"
          data-reload-url="/tables/mylist.xhtml"
        ></div>
      </div>
      {/* <script>
        $(document).ready(displayTableReload(" "));
      </script> */}
    </>
  )
}

export default MyList
