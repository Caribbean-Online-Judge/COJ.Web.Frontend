import React from "react"

export default function Index(): JSX.Element {
  return (
    <>
      <div className="block">
        <div className="panel panel-primary block-body">
          <div className="panel-heading">
            <i className="fa fa-lock fa-lg" />
            &nbsp;
          </div>
          <div className="panel-body blockcontent-body">
            <div>
              <form method="post">
                <div className="margin-top-05 form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-ellipsis-h" />
                    </span>
                    <input
                      className="form-control"
                      placeholder="<spring:message code="
                      name="j_password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <span className="pull-right">
                    <input
                      name="submit"
                      id="submit"
                      className="pull-right btn btn-primary"
                      value="<spring:message code="
                      type="submit"
                    />
                  </span>
                </div>
                <div className="clearfix"></div>

                <br />
                <input type="hidden" />
              </form>
            </div>

            <div className="cleared"></div>
          </div>
          <div className="cleared"></div>
        </div>
      </div>
    </>
  )
}
