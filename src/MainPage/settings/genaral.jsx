import React from "react";
import {Link} from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { Upload } from "../../EntryFile/imagePath";

const GenaralSettings = () => {
    const options = [
        { id: 1, text: "Choose Time Zone", text: "Choose Time Zone" },
        { id: 2, text: "USD Time Zone", text: "USD Time Zone" },
      ];
    const options1 = [
        { id: 1, text: "INR", text: "INR" },
        { id: 2, text: "USA", text: "USA" },
      ];
    const options2 = [
        { id: 1, text: "DD/MM/YYYY", text: "DD/MM/YYYY" },
        { id: 2, text: "MM/DD/YYYY", text: "MM/DD/YYYY" },
      ];
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>General Setting</h4>
            <h6>Manage General Setting</h6>
          </div>
        </div>
        {/* /add */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Title <span className="manitory">*</span>
                  </label>
                  <input type="text" placeholder="Enter Title" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Time Zone </label>
                  <Select2
                    className="select"
                    data={options}
                    options={{
                      placeholder: "Choose Time Zone",
                    }}
                  />                  
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Currency <span className="manitory">*</span>
                  </label>
                  <Select2
                    className="select"
                    data={options1}
                    options={{
                      placeholder: "Choose Currency",
                    }}
                  />                   
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Date Format<span className="manitory">*</span>
                  </label>
                  <Select2
                    className="select"
                    data={options2}
                    options={{
                      placeholder: "Choose Date Format",
                    }}
                  />                  
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Email<span className="manitory">*</span>
                  </label>
                  <input type="text" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Phone<span className="manitory">*</span>
                  </label>
                  <input type="text" placeholder="Enter Phone" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Address<span className="manitory">*</span>{" "}
                  </label>
                  <input type="text" placeholder="Enter Address" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label> Product Image</label>
                  <div className="image-upload">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src={Upload} alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Link to="#" className="btn btn-submit me-2">
                    Submit
                  </Link>
                  <Link to="#" className="btn btn-cancel">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /add */}
      </div>
    </div>
  );
};

export default GenaralSettings;
