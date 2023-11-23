import React from 'react'
import {Link} from "react-router-dom"

const EditCountry = () => {
    return(
        <>
        <div className="page-wrapper">
  <div className="content">
    <div className="page-header">
      <div className="page-title">
        <h4>Places Management</h4>
        <h6>Edit/Update Places</h6>
      </div>
    </div>
    {/* /add */}
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="form-group">
              <label>Country Name</label>
              <input type="text" placeholder="United Arab Emirates" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="form-group">
              <label>Region</label>
              <input type="text" placeholder="Middle east	" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                defaultValue={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text "
                }
              />
            </div>
          </div>
          <div className="col-lg-12">
            <a href="#" className="btn btn-submit me-2">
              Submit
            </a>
            <Link to="/countrieslist" className="btn btn-cancel">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* /add */}
  </div>
</div>

        </>
    )
}
export default EditCountry