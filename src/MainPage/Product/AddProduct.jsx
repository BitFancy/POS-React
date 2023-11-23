import React, { useState } from 'react'
import { Upload } from '../../EntryFile/imagePath';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';


const options = [
    {id: 1, text: 'Choose Category', text: 'Choose Category' },
    {id: 2, text: 'Computers', text: 'Computers' },
]
const options1 = [
    {id: 1, text: 'Choose Sub Category', text: 'Choose Sub Category' },
    {id: 2, text: 'Fruits', text: 'Fruits' },
]
const options2 = [
    {id: 1, text: 'Choose Brand', text: 'Choose Brand' },
    {id: 2, text: 'Brand', text: 'Brand' },
]
const options3 = [
    {id: 1, text: 'Choose Unit', text: 'Choose Unit' },
    {id: 2, text: 'Unit', text: 'Unit' },
]
const options4 = [
    {id: 1, text: 'Choose Tax', text: 'Choose Tax' },
    {id: 2, text: '2%', text: '2%' },
]
const options5 = [
    {id: 1, text: 'Percentage', text: 'Percentage' },
    {id: 2, text: '10%', text: '10%' },
    {id: 3, text: '20%', text: '20%' },
]
const options6 = [
    {id: 1, text: 'Closed', text: 'Closed' },
    {id: 2, text: 'Open', text: 'Open' },
]

const AddProduct = () => {

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Product Add</h4>
                            <h6>Create new product</h6>
                        </div>
                    </div>
                    {/* /add */}
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Category</label>
                                        <Select2
                              className="select"
                              data={options}
                              options={{
                                placeholder: 'Choose Category',
                              }} />

                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Sub Category</label>
                                        <Select2
                              className="select"
                              data={options1}
                              options={{
                                placeholder: 'Choose Sub Category',
                              }} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Brand</label>
                                        <Select2
                              className="select"
                              data={options2}
                              options={{
                                placeholder: 'Choose Brand',
                              }} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Unit</label>
                                        <Select2
                              className="select"
                              data={options3}
                              options={{
                                placeholder: 'Choose Unit',
                              }} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>SKU</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Minimum Qty</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Tax</label>
                                        <Select2
                              className="select"
                              data={options4}
                              options={{
                                placeholder: 'Choose Tax',
                              }} />

                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Discount Type</label>
                                        <Select2
                              className="select"
                              data={options5}
                              options={{
                                placeholder: 'Percentage',
                              }} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label> Status</label>
                                        <Select2
                              className="select"
                              data={options6}
                              options={{
                                placeholder: 'Choose Product',
                              }} />
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
                                <div className="col-lg-12">
                                    <button className="btn btn-submit me-2">
                                        Submit
                                    </button>
                                    <button className="btn btn-cancel">
                                        Cancel
                                    </button>
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
export default AddProduct;