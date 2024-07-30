import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import axios from "axios";
import config from '../../../config'
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { fetchPlan } from "../../../redux/action/plan/plan";

function AddCompany() {


    const [selected, setSelected] = useState(null);
    var token = localStorage.getItem("token");

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPlan(token));
    }, [])
    const { planInfo } = useSelector((store) => store) || "";
    const plan = planInfo?.userInfo?.data;
    const initialValues = {
        company: "",
        email: "",
        plan: '',
        purchasedOn: "",
        companyLogo: "",
        expiredOn: "",
        GSTIN: "",
        address: ""
    };
    const validationSchema = Yup.object({
        company: Yup.string().required("company is required"),
        email: Yup.string().required("email is required"),
        plan: Yup.string().required("plan is required"),
        purchasedOn: Yup.string().required("PurchasedOn is required"),
        GSTIN: Yup.string().required("GSTIN is required"),
        address: Yup.string().required("address is required"),
    });

    const onSubmit = async (values) => {
        try {
            const response = await axios.post(`${config.API_URL}/company/add`,
                { ...values, companyLogo: selected }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', // Set the content type for file upload
                    // Add any other headers you need
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
            if (userData.code == "SUCCESS") {
                Swal.fire({
                    icon: 'success',
                    title: 'Woh...',
                    text: 'User Registered ',

                })
                // setShowModal(false)
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: error,

            })
        }
    };
    return (
        <>
            <div className="offcanvas offcanvas-end customeoff" tabIndex={-1} id="Addcompany">
                <div className="offcanvas-header">
                    <h5 className="modal-title" id="#gridSystemModal">Add Company</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="container-fluid">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ values, setFieldValue, errors, dirty, isValid, resetForm }) => {
                                const selectedDate = new Date(values?.purchasedOn);
                                const futureDate = new Date(selectedDate.getTime() + 365 * 24 * 60 * 60 * 1000);

                                const formattedDate = `${futureDate.getDate().toString().padStart(2, "0")}-${(futureDate.getMonth() + 1).toString().padStart(2, "0")}-${futureDate.getFullYear().toString().padStart(4, "0")}`;
                                return (
                                    <Form>
                                        <div className="row">
                                            <div className='col-xl-12 mb-3'>
                                                <label>Company Logo</label>
                                                <div className="dz-default dlab-message upload-img mb-3">
                                                    <form action="#" className="dropzone">
                                                        <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M20.5 20V35" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="fallback">
                                                            {/* <input name="file" type="file" multiple /> */}

                                                            <Field
                                                                type="file"
                                                                id="companyLogo"
                                                                name="companyLogo"
                                                                className="form-control pt-1"
                                                                value={values.companyLogo}
                                                                onChange={(e) => {
                                                                    setSelected(e.currentTarget.files[0]);
                                                                }}
                                                            />
                                                            <ErrorMessage name="companyLogo" component="div" className="text-danger" />
                                                            {values.companyLogo && values.companyLogo.length > 0 && (
                                                                <p>Selected files: {values.companyLogo[0].name}</p>
                                                            )}
                                                        </div>
                                                    </form>
                                                </div>


                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Company Name<span className="text-danger">*</span></label>
                                                <Field
                                                    name="company"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder
                                                    value={values.company}
                                                />
                                                <ErrorMessage
                                                    name="company"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Email<span className="text-danger">*</span></label>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    value={values.email}
                                                    className="form-control"
                                                    placeholder />
                                                <ErrorMessage
                                                    name="email"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Plan<span className="text-danger">*</span></label>
                                                <Field
                                                    as="select"
                                                    name="plan"
                                                    value={values.plan}
                                                    className="default-select style-1 form-control"
                                                >
                                                    <option value="" disabled>Select</option>
                                                    {plan && plan.map((item) => {

                                                        return (

                                                            <option key={item._id} value={item._id} >{item.planName}</option>

                                                        )
                                                    })}
                                                    {/* <option value="" disabled>Select</option>
                                                    <option value="wewwrr">wewwrr</option>
                                                    <option value="wrwerwe">wrwerwe</option>
                                                    <option value="rererer">rererer</option> */}
                                                </Field>
                                                <ErrorMessage name="plan" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">GST No.<span className="text-danger">*</span></label>
                                                <Field
                                                    name="GSTIN"
                                                    type="text"
                                                    value={values.GSTIN}
                                                    className="form-control"
                                                    placeholder />

                                                <ErrorMessage
                                                    name="GSTIN"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Purchased On<span className="text-danger">*</span></label>
                                                <Field
                                                    name="purchasedOn"
                                                    type="date"
                                                    value={values.purchasedOn}
                                                    className="form-control"
                                                    placeholder
                                                    onChange={(e) => {
                                                        const expireOn = e.target.value
                                                        setFieldValue("purchasedOn", e.target.value);
                                                        setFieldValue(
                                                            "expiredOn",
                                                            new Date(
                                                                new Date(expireOn).getTime() +
                                                                365 * 24 * 60 * 60 * 1000
                                                            ).toISOString()
                                                                .toString()
                                                                .substring(0, 10)
                                                        );
                                                    }}
                                                />

                                                <ErrorMessage
                                                    name="purchasedOn"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Expired On<span className="text-danger">*</span></label>
                                                <Field
                                                    name="expiredOn"
                                                    type="text"
                                                    value={formattedDate}
                                                    defaultValue='dk'
                                                    disabled={true}
                                                    placeholder={formattedDate}
                                                    className="form-control"
                                                />

                                                <ErrorMessage
                                                    name="expiredOn"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="col-xl-12 mb-3">
                                                <label className="form-label">Address<span className="text-danger">*</span></label>
                                                <Field name="address" value={values.address} type="text" className="form-control" placeholder />
                                                <ErrorMessage
                                                    name="address"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>



                                        </div>
                                        <div className='grp-btn'>
                                            <button type="button" className=" btn btn-danger light ms-1 me-1" data-bs-dismiss="offcanvas" aria-label="Close">
                                                Cancel
                                            </button>                                            <button className="btn btn-primary me-1" type="submit" >Submit</button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddCompany
