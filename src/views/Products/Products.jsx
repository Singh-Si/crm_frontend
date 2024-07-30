import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import axios from "axios";
import config from '../../config'
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import PiechartProject from "./PiechartProject";
import ProductTable from "./ProductsTable";
import TitleBreadCrumb from "../../components/TitleBreadCrumb";
// import { fetchPlan } from "../../../redux/action/plan/plan";

function Products() {

    // const [response,setResponse] = useState([])

    const [selected, setSelected] = useState(null);
    var token = localStorage.getItem("token");
    const { loading, userInfo, error } = useSelector(store => store.userInfo);
    const companyId = userInfo?.payload?.company
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchPlan(token));
    // }, [])
    const { planInfo } = useSelector((store) => store) || "";
    const plan = planInfo?.userInfo?.data;
    const initialValues = {

        productName: "",


    };
    const validationSchema = Yup.object({
        productName: Yup.string().required("plan is required"),

    });

    const onSubmit = async (values) => {

        if (!selected) {
            return;
        }

        const formData = new FormData();

        for (let i = 0; i < selected.length; i++) {
            formData.append('files', selected[i]);
        }

        formData.append('name', values.productName);
        formData.append('slug', values.productName);
        formData.append('company', companyId);
        try {
            const response = await axios.post(`${config.API_URL}/product/add`,
                formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            });
            const userData = response.data;
            if (userData.code == "DUPLICATION") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Company Already Exists',

                })
                // setShowModal(false)
            }
            if (userData.success == true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Woh...',
                    text: 'User Registered ',

                })
                // Formik.resetForm();
                // setShowModal(false)
            }
        }
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: error,

            })
        }
    };
    useEffect(()=>{
        // fetchData();
    })
    return (
        <>

            <div className='page-titles'>
                <TitleBreadCrumb title="Product" />
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header ">
                                <h4 className="heading mb-0">Add Product</h4>
                            </div>
                            <div className="card-body">

                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={onSubmit}
                                >
                                    {({ values, setFieldValue, errors, dirty, isValid, resetForm }) => {

                                        return (
                                            < >
                                                <div className="row ">
                                                    <div className='col-xl-12 mb-3'>
                                                        <div className="dz-default dlab-message upload-img mb-3">
                                                            <Form action="#" className="dropzone">
                                                                <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M20.5 20V35" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <div className="fallback">

                                                                    <Field
                                                                        type="file"
                                                                        id="companyLogo"
                                                                        name="companyLogo"
                                                                        className="form-control pt-1"
                                                                        value={values.companyLogo}
                                                                        // onChange={(e) => {
                                                                        //     setSelected(e.currentTarget.files[0]);
                                                                        // }}
                                                                        onChange={(e) => {
                                                                            const selectedFiles = Array.from(e.currentTarget.files);
                                                                            setSelected(selectedFiles);
                                                                            console.log(selectedFiles, "ss")
                                                                            // setFieldValue("companyLogo", selectedFiles);
                                                                        }}
                                                                        multiple
                                                                    />
                                                                    <ErrorMessage name="companyLogo" component="div" className="text-danger" />
                                                                    {values.companyLogo && values.companyLogo.length > 0 && (
                                                                        <p>Selected files: {values.companyLogo[0].name}</p>
                                                                    )}
                                                                </div>
                                                                <div className="col-xl-12 mb-3 text-start mt-4">
                                                                    <label className="form-label ">Product Name<span className="text-danger">*</span></label>
                                                                    <Field
                                                                        name="productName"
                                                                        type="text"
                                                                        value={values.productName}
                                                                        className="form-control"
                                                                        placeholder />

                                                                    <ErrorMessage
                                                                        name="productName"
                                                                        render={(msg) => (
                                                                            <small style={{ color: "red" }}>{msg}</small>
                                                                        )}
                                                                    />
                                                                </div>
                                                                <div className='grp-btn mt-4'>
                                                                    <button className="btn btn-danger light ms-1 me-1">Cancel</button>
                                                                    <button className="btn btn-primary me-1" type="submit" >Submit</button>
                                                                </div>

                                                            </Form>
                                                        </div>


                                                    </div>




                                                </div>

                                            </ >
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header  ">
                                <h4 className="heading mb-0">Product Chart</h4>
                            </div>
                            <PiechartProject />


                            
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Products</h4>

                                    </div>
                                    <ProductTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row">

                </div>
            </div>

            {/* <div className="p-4">
                <ProductTable />
            </div> */}






            {/* <div className=" offcanvas-end " tabIndex={-1} id="Addcompany">
                <div className="offcanvas-header ">
                    <h5 className="modal-title" id="#gridSystemModal">Add Company</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
                <div className="offcanvas-body col-lg-12 d-flex">
                    <div className="container-fluid col-lg-6 ">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ values, setFieldValue, errors, dirty, isValid, resetForm }) => {

                                return (
                                    < >
                                        <div className="row ">
                                            <div className='col-xl-12 mb-3'>
                                                <label>Company Logo</label>
                                                <div className="dz-default dlab-message upload-img mb-3">
                                                    <Form action="#" className="dropzone">
                                                        <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M20.5 20V35" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="fallback">

                                                            <Field
                                                                type="file"
                                                                id="companyLogo"
                                                                name="companyLogo"
                                                                className="form-control pt-1"
                                                                value={values.companyLogo}
                                                                // onChange={(e) => {
                                                                //     setSelected(e.currentTarget.files[0]);
                                                                // }}
                                                                onChange={(e) => {
                                                                    const selectedFiles = Array.from(e.currentTarget.files);
                                                                    setSelected(selectedFiles);
                                                                    console.log(selectedFiles, "ss")
                                                                    // setFieldValue("companyLogo", selectedFiles);
                                                                }}
                                                                multiple
                                                            />
                                                            <ErrorMessage name="companyLogo" component="div" className="text-danger" />
                                                            {values.companyLogo && values.companyLogo.length > 0 && (
                                                                <p>Selected files: {values.companyLogo[0].name}</p>
                                                            )}
                                                        </div>
                                                        <div className="col-xl-12 mb-3">
                                                            <label className="form-label">Product Name<span className="text-danger">*</span></label>
                                                            <Field
                                                                name="productName"
                                                                type="text"
                                                                value={values.productName}
                                                                className="form-control"
                                                                placeholder />

                                                            <ErrorMessage
                                                                name="productName"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />
                                                        </div>
                                                        <div className='grp-btn mt-4'>
                                                            <button className="btn btn-danger light ms-1 me-1">Cancel</button>
                                                            <button className="btn btn-primary me-1" type="submit" >Submit</button>
                                                        </div>

                                                    </Form>
                                                </div>


                                            </div>




                                        </div>

                                    </ >
                                );
                            }}
                        </Formik>
                    </div>


                    <div className="col-lg-6 ">
                        <PiechartProject />
                    </div>
                </div>


              
                <div className="p-4">
                    <ProductTable />
                </div>
            </div> */}

        </>
    )
}

export default Products
