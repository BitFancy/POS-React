import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import Tabletop from "../../EntryFile/tabletop"
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import Swal from "sweetalert2";
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  EditIcon,
  DeleteIcon,
  search_whites,
} from "../../EntryFile/imagePath";

const CountryList = () => {
  const [inputfilter, setInputfilter] = useState(false);

  const confirmText = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: !0,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      confirmButtonClass: "btn btn-primary",
      cancelButtonClass: "btn btn-danger ml-1",
      buttonsStyling: !1,
    }).then(function (t) {
      t.value &&
        Swal.fire({
          type: "success",
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonClass: "btn btn-success",
        });
    });
  };
  const togglefilter = (value) => {
    setInputfilter(value);
  };
  const options2 = [
    { id: 1, text: "Disable", text: "Disable" },
    { id: 2, text: "Enable", text: "Enable" },
  ];
  const options1 = [
    { id: 1, text: "Choose Region", text: "Choose Region" },
    { id: 2, text: "Region", text: "Region" },
  ];
  const options = [
    { id: 1, text: "Choose Country", text: "Choose Country" },
    { id: 2, text: "India", text: "India" },
    { id: 2, text: "USA", text: "USA" },
  ];
  const [data] = useState([
    { id: 1, countryName: "China", region: "Beijing", status: true },
    { id: 2, countryName: "USA", region: "Newyork", status: true },
    { id: 3, countryName: "Athens", region: "Greece", status: false },
    { id: 4, countryName: "Germany", region: "Berlin", status: false },
    { id: 5, countryName: "Thailand", region: "Bengkok", status: true },
  ]);

  function handleSwitchChange(checked) {
    console.log(checked);
  }

  const columns = [
    {
      title: "Country Name",
      dataIndex: "countryName",
      sorter: (a, b) => a.countryName.length - b.countryName.length,
    },
    {
      title: "Region",
      dataIndex: "region",
      sorter: (a, b) => a.region.length - b.region.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (e, record) => (
        <div className="status-toggle d-flex justify-content-between align-items-center">
          <input
            type="checkbox"
            id="user18"
            className="check"
            defaultChecked={e}
          />
          <label htmlFor="user18" className="checktoggle">
            checkbox
          </label>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: () => (
        <>
          <Link className="me-3" to="/dream-pos/places/editcountry-places">
            <img src={EditIcon} alt="img" />
          </Link>
          <Link className="confirm-text" to="#" onClick={confirmText}>
            <img src={DeleteIcon} alt="img" />
          </Link>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Country List</h4>
              <h6>Manage your Countries</h6>
            </div>
            <div className="page-btn">
              <Link
                to="/dream-pos/places/newcountry-places"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-1" />
                Add Country
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-body">
             <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} />
              {/* /Filter */}
              <div
                className={`card mb-0 ${ inputfilter ? "toggleCls" : ""}`}
                id="filter_inputs"
                style={{ display: inputfilter ? "block" :"none"}}
              >
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="form-group">
                            <Select2
                              className="select"
                              data={options}
                              options={{
                                placeholder: "Choose Country",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="form-group">
                            <Select2
                              className="select"
                              data={options1}
                              options={{
                                placeholder: "Choose Region",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="form-group">
                            <Select2
                              className="select"
                              data={options2}
                              options={{
                                placeholder: "Choose Status",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                          <div className="form-group">
                            <a className="btn btn-filters ms-auto">
                              <img src={search_whites} alt="img" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Filter */}
              <div className="table-responsive">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
    </>
  );
};
export default CountryList;
