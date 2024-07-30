import { useState, useEffect } from "react";
import { Field, Form, Formik } from 'formik';
import config from '../../../config';
import axios from 'axios';
import { useSelector } from "react-redux";

function Filter(props) {
    const [responseData, setResponseData] = useState([]);
    const [filterState, setFilterState] = useState(false);
    const { userApi } = useSelector((store) => store) || " ";
    const userData = userApi?.userInfo?.data
    const token = localStorage.getItem("token")

    let initialValues = {
        user: '',
        from: '',
        to: '',
        leadSource: '',
        leadType: ''
    };
    const onSubmit = async (values) => {
        try {
            const response = await axios.post(`${config.API_URL}/leadSource/filter`, values, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            setResponseData(response?.data?.data)
            if (response) {
                const closeButton = document.querySelector(".btn-close")
                if (closeButton) {
                    closeButton.click();
                }
            }
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    };


    return (
        <>
            <div className="modal fade" id="filter" tabIndex={-1} aria-labelledby="logcall" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel1">
                                <i className="fa-solid fa-filter me-2"></i>Filter
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>

                        <div className="modal-body">
                            <Formik enableReinitialize="true" initialValues={initialValues} onSubmit={onSubmit}>
                                <Form>
                                    <div className="row">
                                        <div className="col-xl-2 mb-3">
                                            <label className="form-label">User</label>
                                            <Field as="select" name="user" className="default-select style-1 form-control">
                                                <option value="">--Select User--</option>
                                                {userData && userData.map((ele) => {
                                                    return (
                                                        <option value={ele._id}>{ele.email} ({ele.firstName} {ele.lastName})</option>
                                                    )
                                                })}
                                            </Field>
                                        </div>
                                        <div className="col-xl-2 mb-3">
                                            <label className="form-label">From</label>
                                            <Field type="date" name="from" className="form-control" />
                                        </div>
                                        <div className="col-xl-2 mb-3">
                                            <label className="form-label">To</label>
                                            <Field type="date" name="to" className="form-control" />
                                        </div>
                                        <div className="col-xl-2 mb-3">
                                            <label className="form-label">Lead Type</label>
                                            <Field as="select" id="selectField" name="leadType" className="default-select style-1 form-control">
                                                <option value="">--SELECT LEAD STATUS--</option>
                                                <option value="none">NONE</option>
                                                <option value="attempted-to-contact">
                                                    Attempted to Contact
                                                </option>
                                                <option value="cold-lead">Cold Lead</option>
                                                <option value="warm-lead">Warm Lead</option>
                                                <option value="hot-lead">Hot Lead</option>
                                                <option value="contact-in-future">
                                                    Contact in Future
                                                </option>
                                                <option value="Contacted">Contacted</option>
                                                <option value="Junk-lead">Junk Lead</option>
                                                <option value="Lost-lead">Lost Lead</option>
                                                <option value="not-Contacted">
                                                    Not Contacted
                                                </option>
                                                <option value="Pre-Qualified">
                                                    Pre-Qualified
                                                </option>
                                                <option value="not-Qualified">
                                                    Not Qualified
                                                </option>
                                                <option value="client">
                                                    Closed (Client)
                                                </option>

                                            </Field>
                                        </div>
                                        <div className="col-xl-2 mb-3">
                                            <label className="form-label">Lead Source</label>
                                            <Field as="select" id="leadSource" name="leadSource" className="default-select style-1 form-control">
                                                <option>--SELECT LEAD SOURCE--</option>
                                                <option value="none">NONE</option>
                                                <option value="advertisement">
                                                    Advertisement
                                                </option>
                                                <option value="cold-lead">Cold Lead</option>
                                                <option value="employee-referral">Employee Referral</option>
                                                <option value="web-download">
                                                    Web Download
                                                </option>
                                                <option value="web-referal">Web Referal</option>
                                                <option value="google">Google</option>
                                                <option value="linkdin">Linkdin</option>
                                                <option value="just-dial">
                                                    Justdial
                                                </option>

                                                <option value="other">
                                                    Other
                                                </option>
                                            </Field>
                                        </div>
                                        <div className="col-xl-2 mb-3">
                                            <button type="submit" className="btn btn-primary" style={{ marginBottom: '-72px' }}>
                                                <i className="fa-solid fa-magnifying-glass me-2"></i>Filter
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;