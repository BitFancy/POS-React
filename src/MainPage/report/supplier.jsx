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

const supplier = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);

  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const [data1] = useState([
    {
      Date: "07/12/2021 06:58:25",
      Name: "Macbook pro",
      amount: 38698,
      QTY: 1248,
      Paid: 0,
      balance: 38698,
      Status: "Recieved",
      image: Product1,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Orange",
      amount: 36080,
      QTY: 110,
      Paid: 0,
      balance: 36080,
      Status: "Recieved",
      image: OrangeImage,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Pineapple",
      amount: 21000,
      QTY: 106,
      Paid: 0,
      balance: 21000,
      Status: "Recieved",
      image: PineappleImage,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Strawberry",
      amount: 11000,
      QTY: 105,
      Paid: 0,
      balance: 11000,
      Status: "Recieved",
      image: StawberryImage,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Sunglasses",
      amount: 10100,
      QTY: 100,
      Paid: 0,
      balance: 10600,
      Status: "Recieved",
      image: AvocatImage,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Unpaired gray",
      amount: 1210,
      QTY: 105,
      Paid: 0,
      balance: 12100,
      Status: "Recieved",
      image: MacbookIcon,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Avocat",
      amount: 4500,
      QTY: 41,
      Paid: 0,
      balance: 4500,
      Status: "Recieved",
      image: Product7,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Banana",
      amount: 900,
      QTY: 28,
      Paid: 0,
      balance: 900,
      Status: "Recieved",
      image: Product8,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Earphones",
      amount: 500,
      QTY: 28,
      Paid: 0,
      balance: 500,
      Status: "Recieved",
      image: Product9,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Limon",
      amount: 1500,
      QTY: 28,
      Paid: 0,
      balance: 500,
      Status: "Recieved",
      image: Product8,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Banana",
      amount: 900,
      QTY: 28,
      Paid: 0,
      balance: 900,
      Status: "Recieved",
      image: Product9,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Earphones",
      amount: 500,
      QTY: 28,
      Paid: 0,
      balance: 500,
      Status: "Recieved",
      image: MacbookIcon,
    },
    {
      Date: "07/12/2021 06:58:25",
      Name: "Limon",
      amount: 1500,
      QTY: 28,
      Paid: 0,
      balance: 500,
      Status: "Recieved",
      image: Product8,
    },
  ]);

  const columns1 = [
    {
      title: "purchased Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Sku.length - b.Sku.length,
    },
    {
      title: "Product Name",
      dataIndex: "Name",
      render: (text, record) => (
        <div className="productimgname">
          <Link to="#" className="product-img">
            <img src={record.image} alt="product" />
          </Link>
          <Link to="#">{text}</Link>
        </div>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Purchased amount",
      dataIndex: "amount",
      sorter: (a, b) => a.Sku.length - b.Sku.length,
    },
    {
      title: "purchased QTY",
      dataIndex: "QTY",
      sorter: (a, b) => a.Category.length - b.Category.length,
    },
    {
      title: "Paid",
      dataIndex: "Paid",
      sorter: (a, b) => a.Brand.length - b.Brand.length,
    },
    {
      title: "	balance",
      dataIndex: "balance",
      sorter: (a, b) => a.Price.length - b.Price.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <>
          <span className="badges bg-lightgrey">{text}</span>
        </>
      ),
      sorter: (a, b) => a.Unit.length - b.Unit.length,
    },
  ];
  const [data2] = useState([
    {
      Date: "2022-03-10",
      Purchase: "PR_1001",
      Reference: "INV/PR_1001",
      name: "Thomas21",
      Amount: 1500,
      Paid: 1500,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1002",
      Reference: "INV/PR_1002",
      name: "504Benjamin",
      Amount: 10,
      Paid: 10,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1003",
      Reference: "INV/PR_1003",
      name: "James 524",
      Amount: 10,
      Paid: 10,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1004",
      Reference: "INV/PR_1004",
      name: "Bruklin2022",
      Amount: 10,
      Paid: 10,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1005",
      Reference: "INV/PR_1005",
      name: "BeverlyWIN25",
      Amount: 150,
      Paid: 150,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1006",
      Reference: "INV/PR_1006",
      name: "BHR256",
      Amount: 100,
      Paid: 100,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1007",
      Reference: "INV/PR_1007",
      name: "Alwin243",
      Amount: 5,
      Paid: 5,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1008",
      Reference: "INV/PR_1008",
      name: "FredJ25",
      Amount: 10,
      Paid: 10,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1009",
      Reference: "INV/PR_1009",
      name: "Cras56",
      Amount: 15,
      Paid: 15,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1010",
      Reference: "INV/PR_1010",
      name: "Cras56",
      Amount: 15,
      Paid: 15,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1011",
      Reference: "INV/PR_1011",
      name: "FredJ25",
      Amount: 10,
      Paid: 10,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1012",
      Reference: "INV/PR_1012",
      name: "Cras56",
      Amount: 15,
      Paid: 15,
      by: "Cash",
    },
    {
      Date: "2022-03-10",
      Purchase: "PR_1013",
      Reference: "INV/PR_1013",
      name: "Cras56",
      Amount: 15,
      Paid: 15,
      by: "Cash",
    },
  ]);

  const columns2 = [
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Purchase",
      dataIndex: "Purchase",
      sorter: (a, b) => a.Purchase.length - b.Purchase.length,
    },
    {
      title: "Reference",
      dataIndex: "Reference",
      sorter: (a, b) => a.Reference.length - b.Reference.length,
    },
    {
      title: "Supplier name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Paid",
      dataIndex: "Paid",
      sorter: (a, b) => a.Paid.length - b.Paid.length,
    },
    {
      title: "paid by",
      dataIndex: "by",
      sorter: (a, b) => a.by.length - b.by.length,
    },
  ];
  const [data3] = useState([
    {
      Reference: "RT_1001",
      name: "Thomas21",
      Amount: 1500,
      Paid: 1500,
      due: 1500,
      Status: "Completed",
      Payment: "Paid",
    },
    {
      Reference: "RT_1002",
      name: "504Benjamin",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Completed",
      Payment: "Overdue",
    },
    {
      Reference: "RT_1003",
      name: "James 524",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Completed",
      Payment: "Overdue",
    },
    {
      Reference: "RT_1004",
      name: "Bruklin2022",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Completed",
      Payment: "Paid",
    },
    {
      Reference: "RT_1005",
      name: "BeverlyWIN25",
      Amount: 150,
      Paid: 150,
      due: 150,
      Status: "Completed",
      Payment: "Overdue",
    },
    {
      Reference: "RT_1006",
      name: "BHR256",
      Amount: 100,
      Paid: 100,
      due: 100,
      Status: "Completed",
      Payment: "Overdue",
    },
    {
      Reference: "RT_1007",
      name: "Alwin243",
      Amount: 5,
      Paid: 5,
      due: 5,
      Status: "Completed",
      Payment: "Paid",
    },
    {
      Reference: "RT_1008",
      name: "FredJ25",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Completed",
      Payment: "Unpaid",
    },
    {
      Reference: "RT_1009",
      name: "FredJ25",
      Amount: 10,
      Paid: 10,
      due: 10,
      Status: "Completed",
      Payment: "Unpaid",
    },
    {
      Reference: "RT_1010",
      name: "Cras56",
      Amount: 15,
      Paid: 15,
      due: 15,
      Status: "Completed",
      Payment: "Unpaid",
    },
    {
      Reference: "RT_1010",
      name: "Grace2022",
      Amount: 15,
      Paid: 15,
      due: 15,
      Status: "Completed",
      Payment: "Unpaid",
    },
    {
      Reference: "RT_1011",
      name: "Cras56",
      Amount: 15,
      Paid: 15,
      due: 15,
      Status: "Completed",
      Payment: "Unpaid",
    },
    {
      Reference: "RT_1012",
      name: "Grace2022",
      Amount: 15,
      Paid: 15,
      due: 15,
      Status: "Completed",
      Payment: "Unpaid",
    },
  ]);

  const columns3 = [
    {
      title: "Reference",
      dataIndex: "Reference",
      sorter: (a, b) => a.Reference.length - b.Reference.length,
    },
    {
      title: "Supplier name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Paid",
      dataIndex: "Paid",
      sorter: (a, b) => a.Paid.length - b.Paid.length,
    },
    {
      title: "	Amount due",
      dataIndex: "due",
      sorter: (a, b) => a.due.length - b.due.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <>
          <span className="badges bg-lightgreen">{text}</span>
        </>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Payment Status",
      dataIndex: "Payment",
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
      sorter: (a, b) => a.Payment.length - b.Payment.length,
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Supplier Report</h4>
            <h6>Manage your Supplier Report</h6>
          </div>
        </div>
        {/* /product list */}
        <div className="card">
          <div className="card-body">
            <div className="tabs-set">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="purchase-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#purchase"
                    type="button"
                    role="tab"
                    aria-controls="purchase"
                    aria-selected="true"
                  >
                    Purchase
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="payment-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#payment"
                    type="button"
                    role="tab"
                    aria-controls="payment"
                    aria-selected="false"
                  >
                    Payment
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="return-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#return"
                    type="button"
                    role="tab"
                    aria-controls="return"
                    aria-selected="false"
                  >
                    Return
                  </button>
                </li>
              </ul>
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
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="purchase"
                  role="tabpanel"
                  aria-labelledby="purchase-tab"
                >
                  <div className="table-responsive">
                    <Table columns={columns1} dataSource={data1} />
                  </div>
                </div>
                <div className="tab-pane fade" id="payment" role="tabpanel">
                  <div className="table-responsive">
                    <Table columns={columns2} dataSource={data2} />
                  </div>
                </div>
                <div className="tab-pane fade" id="return" role="tabpanel">
                  <div className="table-responsive">
                    <Table columns={columns3} dataSource={data3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default supplier;
