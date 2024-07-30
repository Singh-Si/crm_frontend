import TitleBreadCrumb from '../../../components/TitleBreadCrumb'
import AddCompany from './AddCompany'
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import { fetchCompany } from "../../../redux/action/company/company";
import {customStyles } from '../../../utils/TableCssComponent'

function Company() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCompany());
    }, []);
    const { loading, companyInfo, error } = useSelector((store) => store) || " ";
    const role = companyInfo?.userInfo?.data;
    const columns = [

        {
            name: 'Logo',
            selector: 'companyLogo',
            sortable: true,
            customStyles : customStyles.name ,
            cell: (row) => <>
             
                <img src='https://www.visitchiba.jp/wp-content/uploads/2022/10/2-1-scaled.jpg.webp' className='w-50' />
                {/* <img src={row.companyLogo} alt="Company Logo" style={{ width: 'auto', height: 'auto' }} /> */}

            </>

        },
        {
            name: "Name",
            selector: (row) => row?.company,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Plan",
            selector: (row) => row?.plan,
            sortable: true,
        },
        {
            name: "Purchased On",
            selector: (row) => new Date(row?.PurchasedOn).toDateString(),
            sortable: true,
        },
        {
            name: "Expire On",
            selector: (row) => new Date(row?.expireOn).toDateString(),
            sortable: true,
        },
        {
            name: "Created At",
            selector: (row) => row?.createdAt,
            cell: (row) => new Date(row.createdAt).toDateString(),
            sortable: true,
        },
        {
            name: "Updated At",
            selector: (row) => row?.updatedAt,
            cell: (row) => new Date(row.updatedAt).toDateString(),
            sortable: true,
        },
        // {
        //     name: "Action",
        //     cell: (row) => (
        //         <div className="d-flex">
        //             <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
        //             {/* <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a> */}
        //         </div>
               
        //     ),
        // },
    ];

//     const customStyles = {

//         headRow: {
//             style: {
//                 backgroundColor: '#F0F4F9',
//                 fontSize: "13px",
//                 padding: "0.625rem 1rem",
//                 fontWeight: 500,
//                 border: 0,
//                 verticalAlign: "middle",
//             // Background color for the header row
//         },
//     },
//         filter: {
//             width: '200px',
//             display: 'inline-block',
//             border: "5px solid grey",
//         },
//         rows: {
//             style: {
//                 fontSize: '12px', // Adjust the font size as needed
//             },
//         },
//         highlight: {
//             backgroundColor: 'blue', // Background color for the first row
//         },
// };
return (
    <>
        <div className='page-titles'>
            <TitleBreadCrumb title="Company" />
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-xl-12 bst-seller">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting ">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Company</h4>
                                    <div>
                                        <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#Addcompany" role="button" aria-controls="Addcompany">+ Add Company</a>
                                    </div>
                                </div>

                                <DataTableExtensions columns={columns} data={role}>
                                    <DataTable
                                    className='custom-table'
                                        customStyles={customStyles}
                                        columns={columns}
                                        data={role}
                                        direction="auto"
                                        fixedHeader
                                        fixedHeaderScrollHeight="1000px"
                                        pagination
                                        responsive
                                        striped
                                        subHeaderAlign="right"
                                        subHeaderWrap
                                        defaultSortField="company"
                                        defaultSortAsc={false}
                                        highlightOnHover
                                    />
                                </DataTableExtensions>
                                {/* <table id="empoloyees-tbl" className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check custom-checkbox ms-0">
                                                        <input type="checkbox" className="form-check-input checkAllInput" id="checkAll2" required />
                                                        <label className="form-check-label" htmlFor="checkAll2" />
                                                    </div>
                                                </th>
                                                <th>Company Logo</th>
                                                <th>Company Name</th>
                                                <th>Email</th>
                                                <th>Plan</th>
                                                <th>GST No.</th>
                                                <th>Address</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox0100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox0100" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/dummy-logo.png" className="company-lgo" alt="" />
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">Solis Technology Pvt. Ltd.</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">ra@gmail.com</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">-----------</a>
                                                </td>

                                                <td>
                                                    <span className="badge badge-success light border-0">GTS452KJF654DSA</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">xyz house No. 231 gurgaon haryana</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox0100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox0100" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/dummy-logo.png" className="company-lgo" alt="" />
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">Solis Technology Pvt. Ltd.</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">ra@gmail.com</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">-----------</a>
                                                </td>

                                                <td>
                                                    <span className="badge badge-success light border-0">GTS452KJF654DSA</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">xyz house No. 231 gurgaon haryana</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox0100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox0100" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/dummy-logo.png" className="company-lgo" alt="" />
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">Solis Technology Pvt. Ltd.</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">ra@gmail.com</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">-----------</a>
                                                </td>

                                                <td>
                                                    <span className="badge badge-success light border-0">GTS452KJF654DSA</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">xyz house No. 231 gurgaon haryana</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox0100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox0100" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/dummy-logo.png" className="company-lgo" alt="" />
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">Solis Technology Pvt. Ltd.</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">ra@gmail.com</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">-----------</a>
                                                </td>

                                                <td>
                                                    <span className="badge badge-success light border-0">GTS452KJF654DSA</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">xyz house No. 231 gurgaon haryana</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox0100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox0100" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/dummy-logo.png" className="company-lgo" alt="" />
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">Solis Technology Pvt. Ltd.</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">ra@gmail.com</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">-----------</a>
                                                </td>

                                                <td>
                                                    <span className="badge badge-success light border-0">GTS452KJF654DSA</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">xyz house No. 231 gurgaon haryana</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox0100" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox0100" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="products">
                                                        <img src="images/dummy-logo.png" className="company-lgo" alt="" />
                                                    </div>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">Solis Technology Pvt. Ltd.</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">ra@gmail.com</a>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">-----------</a>
                                                </td>

                                                <td>
                                                    <span className="badge badge-success light border-0">GTS452KJF654DSA</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-primary">xyz house No. 231 gurgaon haryana</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AddCompany />
    </>
)
}

export default Company