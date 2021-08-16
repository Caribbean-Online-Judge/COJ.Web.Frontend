import React from "react"

function VSubmit(): JSX.Element {
  return (
    <>
      <h2 className="postheader">
        {/* <a class="linkheader"
		href="<c:url value="vcontestview.xhtml?cid=${contest.cid}"/>">${contest.name}</a> */}
        <br />
        spring:message code="pagehdr.submit"
      </h2>
      <div className="row postcontent">
        <div className="col-xs-10">
          {/* <!-- article-content --> */}
          <div className="error">
            <form />
          </div>
          <form method="post" className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-xs-3">
                spring:message code="fieldhdr.problemid"{" "}
              </label>
              <div className="col-xs-8">
                {/* <input className="form-control" path="pid" /> */}
              </div>
              <div className="col-xs-8 col-xs-offset-3">
                <span className="label label-danger error "></span>
              </div>
              {/* <a><i className="fa fa-asterisk"
					title="<spring:message code="mandatory.field"/>"></i></a> */}
            </div>
            <div className="form-group">
              <label className="control-label col-xs-3">
                spring:message code="fieldhdr.proglanguage"{" "}
              </label>
              <div className="col-xs-8">
                {/* <select cssClass="form-control" path="key" id="lang"
                  onchange="updSelect()">
                  <options items="${languages}" itemLabel="descripcion"
                    itemValue="key" />
                </select> */}
              </div>
              <div className="error col-xs-8 col-xs-offset-3">
                {/* <form:errors path="lid" /> */}
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-3">
                {" "}
                spring:message code="fieldhdr.sourcecode"
              </label>
              <div className="col-xs-8">
                <input
                  id="uploadfile"
                  name="uploadfile"
                  type="file"
                  className="file"
                  data-show-upload="false"
                />
              </div>
              <div className="error col-xs-8 col-xs-offset-3">
                {/* <span className="label label-danger"><form:errors path="code" /></span> */}
              </div>
              {/* <a><i className="fa fa-asterisk"
                  title="<spring:message code=" mandatory.field"/>"></i></a> */}
            </div>

            <div className="form-group">
              <div className="col-xs-12">
                <textarea
                  cols={100}
                  rows={25}
                  id="code"
                  className="form-control submit"
                />
              </div>
              <div className="form-actions pull-right">
                {/* <input className="btn btn-primary" type="submit"
                        value="<spring:message code=" button.submit"/>" name="sub" /> <input
                        className="btn btn-primary" type="reset"
                        value="<spring:message code=" button.reset"/>" name="reset" /> */}
              </div>
            </div>
          </form>
          {/* <!-- /article-content --> */}
        </div>
      </div>

      {/* <script type="text/javascript">
      var enable = ${enableadveditor};
      activate_editor(enable);

      $("#uploadfile").fileinput({
        maxFileSize : 100,
      allowedFileTypes: ['text','object'],
      removeClass : "btn btn-default",
      removeLabel : "Delete",
      previewFileType: 'text',
      msgProgress : 'Loading {percent}%',
      browseClass : "btn btn-primary",

      browseLabel : "Pick File",
      browseIcon : '<i class="fa fa-file"></i>&nbsp;',
      removeIcon : '<i class="fa fa-trash"></i>'
	});
    </script> */}
    </>
  )
}

export default VSubmit
