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
  MacbookIcon,
  OrangeImage,
  PineappleImage,
  StawberryImage,
  AvocatImage,
  Product1,
  Product7,
  Product8,
  Product9,
} from "../../EntryFile/imagePath";

const Sales = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);

  const togglefilter = (value) => {
    setInputfilter(value);
  };
  const [data] = useState([
    {
      number: "INV001",
      name: "Thomas21",
      date: "29-03-2022",
      Amount: 1500,
      Paid: 1500,
      due: 1500,
      Status: "Paid",
    },
    {
      number: "INV002",
      name: "504Benjamin",
      date: "29-03-2022",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Overdue",
    },
    {
      number: "INV003",
      name: "James 524",
      date: "29-03-2022",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Overdue",
    },
    {
      number: "INV004",
      name: "Bruklin2022",
      date: "29-03-2022",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Paid",
    },
    {
      number: "INV005",
      name: "BeverlyWIN25",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Overdue",
    },
    {
      number: "INV006",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Paid",
    },
    {
      number: "INV007",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Paid",
    },
    {
      number: "INV008",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Unpaid",
    },
    {
      number: "INV009",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Unpaid",
    },
    {
      number: "INV0010",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Unpaid",
    },
    {
      number: "INV007",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Paid",
    },
    {
      number: "INV008",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Unpaid",
    },
    {
      number: "INV009",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Unpaid",
    },
    {
      number: "INV0010",
      name: "BHR256",
      date: "29-03-2022",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Unpaid",
    },
  ]);

  const columns = [
    {
      title: "Invoice number",
      dataIndex: "number",
      sorter: (a, b) => a.Sku.length - b.Sku.length,
    },
    {
      title: "Customer name",
      dataIndex: "name",
      sorter: (a, b) => a.Category.length - b.Category.length,
    },
    {
      title: "Due date",
      dataIndex: "date",
      sorter: (a, b) => a.Brand.length - b.Brand.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Price.length - b.Price.length,
    },
    {
      title: "Paid",
      dataIndex: "Paid",
      sorter: (a, b) => a.Unit.length - b.Unit.length,
    },
    {
      title: "Amount due",
      dataIndex: "due",
      sorter: (a, b) => a.Instock.length - b.Instock.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <>
          {text === "Paid" && (
            <span className="badges bg-lightgreen">{text}</span>
          )}
          {text === "Unpaid" && (
            <span className="badges bg-lightgrey">{text}</span>
          )}
          {text === "Overdue" && (
            <span className="badges bg-lightred">{text}</span>
          )}
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Invoices Report</h4>
            <h6>Manage your Invoices Report</h6>
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
                      <div className="input-groupicon">
                        <DatePicker
                          selected={startDate1}
                          onChange={(date) => setStartDate1(date)}
                        />
                        <div className="addonset">
                          <img src={Calendar} alt="img" />
                        </div>
                      </div>
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

export default Sales;
