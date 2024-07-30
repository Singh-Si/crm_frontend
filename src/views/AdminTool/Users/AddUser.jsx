import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import axios from "axios";
import config from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { fetchUserApi } from "../../../redux/action/UserApi/UserApi";
// import user from "../User/user";
function AddUser(props) {
    const dispatch = useDispatch()
    var token = localStorage.getItem("token");
    const { companyInfo } = useSelector((store) => store) || " ";
    const company = companyInfo?.userInfo?.data
    const { loading, userInfo, error } =
        useSelector((store) => store.userInfo) || " ";
    const { userApi } =
        useSelector((store) => store) || " ";
    //role
    const { RoleData } =
        useSelector((store) => store) || " ";
    const role = RoleData?.userInfo?.data;
    const initialValues = {
        firstName: "",
        lastName: "",
        password: "",
        role: "",
        gender: "",
        company: ""
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        password: Yup.string()
            .required()
            .min(6, "Password is too short -should be 6 chars minimum"),
        gender: Yup.string().required("Gender is required"),
        email: Yup.string().required("Email is required"),
        lastName: Yup.string().required("Last Name is required"),
        role: Yup.string().required("Role is required"),
        company: Yup.string().required("Role is required"),
    });
    const onSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(`${config.API_URL}/auth/register`, {
                ...values
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json", // Set the content type for file upload
                    // Add any other headers you need
                }
            });
            const userData = response.data;

            if (userData.code == "DUPLICATEDATA") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'User Already Exists',

                })
                const closeButton = document.querySelector(".btn-close");
                if (closeButton) {
                    closeButton.click();
                    resetForm();
                }
            }
            if (userData.code == "CREATED") {
                Swal.fire({
                    icon: 'success',
                    title: 'Woh...',
                    text: 'User Registered ',

                })
                const closeButton = document.querySelector(".btn-close");
                if (closeButton) {
                    closeButton.click();
                    resetForm();
                    dispatch(fetchUserApi(token));
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: error,

            })
            const closeButton = document.querySelector(".btn-close");
            if (closeButton) {
                closeButton.click();
                resetForm();
            }
        }
    };
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="offcanvas offcanvas-end customeoff" tabIndex={-1} id="Adduser">
                <div className="offcanvas-header">
                    <h5 className="modal-title" id="#gridSystemModal">Add User</h5>
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
                            {({ values, setFieldValue, errors, dirty, isValid }) => {

                                return (
                                    <Form>
                                        <div className="row">
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">First Name<span className="text-danger">*</span></label>
                                                <Field
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="Enter your  First Name"
                                                    className="form-control"
                                                />

                                                <ErrorMessage
                                                    name="firstName"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Last Name<span className="text-danger">*</span></label>

                                                <Field
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Enter your  Last Name"
                                                    className="form-control"
                                                />

                                                <ErrorMessage
                                                    name="lastName"
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
                                                    placeholder="Enter your Email"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Password<span className="text-danger">*</span></label>
                                                <div className="d-flex">
                                                    <Field
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        placeholder="Enter your password"
                                                        className="form-control"
                                                    />
                                                    <button type="button" onClick={handleTogglePassword} className="eye-icon-button border-0 user-eye">
                                                        {showPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                                                    </button>
                                                </div>
                                                <ErrorMessage
                                                    name="password"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Gender<span className="text-danger">*</span></label>
                                                <Field
                                                    as="select"
                                                    type="text"
                                                    name="gender"
                                                    placeholder="Enter your Plan"
                                                    className="default-select style-1 form-control"
                                                >
                                                    <option>--SELECT GENDER--</option>
                                                    <option value="Male">MALE</option>;
                                                    <option value="Female">FEMALE</option>
                                                    <option value="Other">OTHER</option>
                                                </Field>
                                                <ErrorMessage
                                                    name="gender"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Company<span className="text-danger">*</span></label>

                                                <Field
                                                    as="select"
                                                    type="text"
                                                    name="company"
                                                    placeholder="Enter your Company"
                                                    className="default-select style-1 form-control"
                                                >
                                                    <option>--SELECT COMPANY--</option>
                                                    {company?.map((ele) => {
                                                        return (

                                                            <option key={ele._id} value={ele._id}>{ele.company}</option>
                                                        )
                                                    })}
                                                </Field>
                                                <ErrorMessage
                                                    name="company"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <label className="form-label">Role<span className="text-danger">*</span></label>
                                                <Field
                                                    as="select"
                                                    type="text"
                                                    name="role"
                                                    placeholder="Enter your Plan"
                                                    className="default-select style-1 form-control"
                                                >
                                                    <option>--SELECT ROLE--</option>
                                                    {role?.map((ele) => {
                                                        return (
                                                            <option key={ele._id} value={ele._id}>{ele.title}</option>
                                                        )
                                                    })}
                                                </Field>
                                                <ErrorMessage
                                                    name="role"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className='grp-btn'>
                                            <button type="button" className=" btn btn-danger light ms-1 me-1" data-bs-dismiss="offcanvas" aria-label="Close">
                                                Cancel
                                            </button>
                                            <button className="btn btn-primary me-1" type="submit">Submit</button>
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

export default AddUser