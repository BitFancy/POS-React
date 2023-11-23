import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  Calendar,
  Printer,
  search_whites,
  Search,
  PlusIcon,
  EditIcon,
  DeleteIcon,
} from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const UserLists = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);
  const options = [
    { id: 1, text: "Disable", text: "Disable" },
    { id: 2, text: "Enable", text: "Enable" },
  ];
  const togglefilter = (value) => {
    setInputfilter(value);
  };
  const [data] = useState([
    {
      name: "Thomas",
      Phone: "+12163547758",
      email: "thomas@example.com",
      Role: "Admin",
      On: "3/15/2022",
      Status: "Active",
    },
    {
      name: "504Benjamin",
      Phone: "123-456-888",
      email: "customer@example.com",
      Role: "Manager",
      On: "2/27/2022",
      Status: "Restricted",
    },
    {
      name: "James 524",
      Phone: "+12163547758",
      email: "james@example.com",
      Role: "Salesman",
      On: "2/27/2022",
      Status: "Restricted",
    },
    {
      name: "James 524",
      Phone: "+12163547758",
      email: "james@example.com",
      Role: "Salesman",
      On: "2/27/2022",
      Status: "Restricted",
    },
    {
      name: "Bruklin2022",
      Phone: "123-456-888",
      email: "bruklin@example.com",
      Role: "Delivery Biker",
      On: "2/27/2022",
      Status: "Active",
    },
    {
      name: "BeverlyWIN25",
      Phone: "+12163547758",
      email: "bruklin@example.com",
      Role: "Delivery Biker",
      On: "2/27/2022",
      Status: "Active",
    },
    {
      name: "BHR256",
      Phone: "123-456-888",
      email: "Huber@example.com",
      Role: "Sales Executive",
      On: "3/15/2022",
      Status: "Active",
    },
    {
      name: "Thomas",
      Phone: "+12163547758",
      email: "thomas@example.com",
      Role: "Admin",
      On: "3/15/2022",
      Status: "Active",
    },
    {
      name: "504Benjamin",
      Phone: "123-456-888",
      email: "customer@example.com",
      Role: "Manager",
      On: "2/27/2022",
      Status: "Restricted",
    },
    {
      name: "James 524",
      Phone: "+12163547758",
      email: "james@example.com",
      Role: "Salesman",
      On: "2/27/2022",
      Status: "Restricted",
    },
    {
      name: "James 524",
      Phone: "+12163547758",
      email: "james@example.com",
      Role: "Salesman",
      On: "2/27/2022",
      Status: "Restricted",
    },
    {
      name: "Bruklin2022",
      Phone: "123-456-888",
      email: "bruklin@example.com",
      Role: "Delivery Biker",
      On: "2/27/2022",
      Status: "Active",
    },
    {
      name: "BeverlyWIN25",
      Phone: "+12163547758",
      email: "bruklin@example.com",
      Role: "Delivery Biker",
      On: "2/27/2022",
      Status: "Active",
    },
    {
      name: "BHR256",
      Phone: "123-456-888",
      email: "Huber@example.com",
      Role: "Sales Executive",
      On: "3/15/2022",
      Status: "Active",
    },
  ]);

  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },
    {
      title: "email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Role",
      dataIndex: "Role",
      sorter: (a, b) => a.Role.length - b.Role.length,
    },
    {
      title: "Created On",
      dataIndex: "On",
      sorter: (a, b) => a.On.length - b.On.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <>
          {text === "Active" && (
            <span className="badges bg-lightgreen">{text}</span>
          )}
          {text === "Restricted" && (
            <span className="badges bg-lightred">{text}</span>
          )}
        </>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <>
          <Link className="me-3" to="newuseredit">
            <img src={EditIcon} alt="img" />
          </Link>
          <Link className="me-3 confirm-text" to="#">
            <img src={DeleteIcon} alt="img" />
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>User List</h4>
            <h6>Manage your User</h6>
          </div>
          <div className="page-btn">
            <Link to="/dream-pos/people/adduser-people" className="btn btn-added">
              <img src={PlusIcon} alt="img" className="me-2" />
              Add User
            </Link>
          </div>
        </div>
        {/* /product list */}
        <div className="card">
          <div className="card-body">
            <div className="table-top">
              <div className="search-set">
                <div className="search-path">
                  <a
                    className={` btn ${
                      inputfilter ? "btn-filter setclose" : "btn-filter"
                    } `}
                    id="filter_search"
                    onClick={() => togglefilter(!inputfilter)}
                  >
                    <img src={Filter} alt="img" />
                    <span>
                      <img src={ClosesIcon} alt="img" />
                    </span>
                  </a>
                </div>
                <div className="search-input">
                  <input
                    className="form-control form-control-sm search-icon"
                    type="text"
                    placeholder="Search..."
                  />
                  <a className="btn btn-searchset">
                    <img src={Search} alt="img" />
                  </a>
                </div>
              </div>
              <div className="wordset">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="pdf"
                    >
                      <img src={Pdf} alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="excel"
                    >
                      <img src={Excel} alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="print"
                    >
                      <img src={Printer} alt="img" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /Filter */}
            <div
              className={`card mb-0 ${inputfilter ? "toggleCls" : ""}`}
              id="filter_inputs"
              style={{ display: inputfilter ? "block" : "none" }}
            >
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter User Name" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="input-groupicon">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <div className="addonset">
                          <img src={Calendar} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <Select2
                        className="select"
                        data={options}
                        options={{
                          placeholder: "Select",
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
            {/* /Filter */}
            <div className="table-responsive">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default UserLists;
