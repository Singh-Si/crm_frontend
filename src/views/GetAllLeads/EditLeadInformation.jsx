import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik"
import * as Yup from "yup";
import Swal from "sweetalert2";
import { fetchLeadSource } from "../../redux/action/LeadSource/LeadSource";
import config from "../../config";
import { fetctAllLead } from "../../redux/action/allleads/getalllead";

var token = localStorage.getItem("token");

function EditLeadInformation(props) {
    const [response, setResponse] = useState([])
    const [lead, setLead] = useState(0)
    const dispatch = useDispatch()
    const { loading, userInfo, error } = useSelector((store) => store.userInfo) || " ";
    const receivedData = props && props?.initialData;
    const id = receivedData && receivedData._id;
    const companyData = userInfo?.payload?.company;
    const initialValues = {
        leadOwner: receivedData && receivedData.leadCreatedBy && receivedData.leadCreatedBy.firstName || "",
        lastName: receivedData && receivedData.lastName || "",
        firstName: receivedData && receivedData.firstName || "",
        email: receivedData && receivedData.email || "",
        phone: receivedData && receivedData.phone || "",
        leadType: receivedData && receivedData.leadType || "",
        leadSource: receivedData && receivedData.leadSource || "",
        budget: receivedData && receivedData.budget || "",
        date: receivedData && receivedData.date || "",
        time: receivedData && receivedData.time || "",
        state: receivedData && receivedData.state || "",
        city: receivedData && receivedData.city || "",
        country: receivedData && receivedData.country || "",
        description: receivedData && receivedData.description || "",
        reminderCall: receivedData && receivedData.reminderCall && receivedData.reminderCall.substring(0, 16) || "",
        company: companyData,
        followUpInfo: receivedData && receivedData.followUpInfo && receivedData.followUpInfo.length > 0 ? receivedData.followUpInfo : [{
            subject: receivedData && receivedData.subject || "none",
            targetTime: receivedData && receivedData.targetTime || "",
            targetDate: receivedData && receivedData.targetDate || "",
            purpose: receivedData && receivedData.purpose || "",
            notes: receivedData && receivedData.notes || "",
            location: receivedData && receivedData.location || "",
            completionTime: receivedData && receivedData.completionTime || "",
            completionDate: receivedData && receivedData.completionDate || "",
            meetingHighlight: receivedData && receivedData.meetingHighlight || "",

        }],
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().required("Email is required"),
        phone: Yup.string()
            .matches(/^\d+$/, 'Only digits are allowed')
            .min(10, 'Phone number must be at most 10 digits')
            .max(10, 'Phone number must be at most 10 digits')
            .required('Phone number is required'),
        leadSource: Yup.string().required("Lead Source is required"),
        leadType: Yup.string().required("Lead Type is required"),
        state: Yup.string().required("State is required"),
        city: Yup.string().required("City is required"),
        country: Yup.string().required("Country is required"),
        description: Yup.string().required("Description is required"),
    });

    const onSubmit = async (values) => {
        try {
            const leadUpdateData = {
                ...values
            };
            const response = await axios.put(
                `${config.API_URL}/leadSource/update/info/${id}`,
                leadUpdateData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const userData = response.data;

            if (userData?.message === "Lead updated successfully") {
                Swal.fire({
                    icon: 'success',
                    // title: 'Woh...',
                    text: 'Lead Updated ',

                })

                dispatch(fetchLeadSource(token))
                dispatch(fetctAllLead(token))
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
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.API_URL}/product/fetch`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                })
                setResponse(response?.data?.data)
                setLead(lead + 1)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="offcanvas offcanvas-end customeoff" tabIndex={-1} id="EditLead">
                <div className="offcanvas-header">
                    <h5 className="modal-title" id="#gridSystemModal">Lead Information</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="container-fluid">
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ values, setFieldValue, errors, dirty, isValid, resetForm, isSubmitting }) => {
                                return <Form>
                                    <div className="row">
                                        <h4 className='elead-title'>Basic Information</h4>

                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">First Name<span className="text-danger">*</span></label>
                                            <Field
                                                name="firstName"
                                                //  disabled={checkrole?.title == "superadmin" ? false : true}
                                                type="text" className="form-control" placeholder
                                            // value={initialData?.firstName}

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
                                            <Field type="text" className="form-control" placeholder name="lastName" />
                                            <ErrorMessage
                                                name="lastName"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )}
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Email Id<span className="text-danger">*</span></label>
                                            <Field type="email" className="form-control" placeholder name="email" />
                                            <ErrorMessage
                                                name="email"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )}
                                            />
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Phone No.<span className="text-danger">*</span></label>
                                            <Field type="number" className="form-control" placeholder name="phone" />
                                            <ErrorMessage
                                                name="phone"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )}
                                            />
                                        </div>

                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Lead Type
                                                <span className="text-danger">*</span></label>
                                            <Field as="select" id="selectField" name="leadType" className="default-select style-1 form-control">
                                                <option data-display="SELECT LEAD STATUS" value=" ">--SELECT LEAD STATUS--</option>
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
                                                <option value="lost-lead">Lost Lead</option>
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
                                            <ErrorMessage
                                                name="leadType"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )} />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Lead Source
                                                <span className="text-danger">*</span></label>
                                            <Field as="select" id="leadSource" name="leadSource" className="default-select style-1 form-control">
                                                <option value="">--SELECT LEAD SOURCE--</option>
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
                                            <ErrorMessage
                                                name="leadSource"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )}
                                            />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Product Name</label>
                                            <Field as="select" id="selectField" name="selectField" className="default-select style-1 form-control">
                                                <option>--SELECT PRODUCT--</option>
                                                {response && response.map((ele) => {

                                                    return (
                                                        <>
                                                            <option value={ele.slug}>{(ele.name).charAt(0).toUpperCase() + ele.name.slice(1)} </option>
                                                        </>
                                                    )
                                                })}
                                            </Field>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Lead Owner</label>
                                            <Field type="text" className="form-control" placeholder disabled name="leadOwner" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">What is your budget</label>
                                            <Field type="text" className="form-control" placeholder name="budget" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Date</label>
                                            <Field type="date" className="form-control" placeholder name="date" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Time</label>
                                            <Field type="time" className="form-control" placeholder name="time" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">Last Activity</label>
                                            <Field type="text" className="form-control" placeholder name="updatedAt" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <h4 className='elead-title'>Address Information</h4>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">State<span className="text-danger">*</span></label>
                                            <Field type="text" className="form-control" placeholder name="state" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label className="form-label">City<span className="text-danger">*</span></label>
                                            <Field type="text" className="form-control" placeholder name="city" />
                                        </div>
                                        <div className="col-xl-12 mb-3">
                                            <label className="form-label">Country<span className="text-danger">*</span></label>
                                            <Field type="text" className="form-control" placeholder name="country" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h4 className='elead-title'>Description Information</h4>
                                        <div className="col-xl-12 mb-3">
                                            <label className="form-label">Description<span className="text-danger">*</span></label>
                                            <Field
                                                as="textarea"
                                                name="description"
                                                className="form-txtarea form-control" rows={3} id="comment" defaultValue={""} />

                                            <ErrorMessage
                                                name="description"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )}
                                            />
                                        </div>


                                    </div>
                                    <div className="row">


                                        <fieldset>
                                            <FieldArray
                                                name="followUpInfo"
                                                render={arrayHelpers => (
                                                    <>
                                                        <div className="col d-flex justify-content-between align-items-center badge badge-success light">
                                                            <h4 className='elead-title '>Meeting Information</h4>
                                                            <div className="mt-4 mb-3">
                                                                {values.followUpInfo &&
                                                                    values.followUpInfo.length >= 0 ? (
                                                                    <>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-sm btn-primary"
                                                                            style={{ marginRight: "4px", background: "green", border: "1px solid green" }}
                                                                            onClick={() =>
                                                                                arrayHelpers.remove("")
                                                                            } // remove a contact from the list
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-sm btn-success"
                                                                            style={{ color: "white", background: "blue" }}
                                                                            onClick={() =>
                                                                                arrayHelpers.push("")
                                                                            } // insert an empty contact
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </>
                                                                ) :
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-sm btn-success"
                                                                        style={{ background: "green", color: "white" }}
                                                                        onClick={() =>
                                                                            arrayHelpers.push("")
                                                                        }
                                                                    >
                                                                        {/* show this when user has removed all contacts from the list */}
                                                                        +
                                                                    </button>
                                                                }
                                                            </div>
                                                        </div>
                                                        {values && values.followUpInfo && values.followUpInfo.map((followUpInfo, index) => {

                                                            return (
                                                                <div className="grid grid-cols-12 col-span-12 gap-2">
                                                                    <span className="badge badge-info light mt-4">Meeting {index + 1}</span>
                                                                    <div className="row mt-4">


                                                                        <div className="col-xl-6 mb-2">
                                                                            <label
                                                                                htmlFor="targetDate"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Target Date
                                                                            </label>
                                                                            <Field
                                                                                id="targetDate"
                                                                                type="date"
                                                                                name={`followUpInfo.${index}.targetDate`}
                                                                                className="default-select style-1 form-control"
                                                                                placeholder="Meeting Date"
                                                                                pattern="\d{2}-\d{2}-\d{4}"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.targetDate`}
                                                                                render={(msg) => (
                                                                                    <div
                                                                                        style={{ color: "red" }}
                                                                                    >
                                                                                        {msg}
                                                                                    </div>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                        <div className="col-xl-6 mb-2">

                                                                            <label
                                                                                htmlFor="subject"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Location
                                                                            </label>
                                                                            <Field
                                                                                as="select"
                                                                                type="text"
                                                                                name={`followUpInfo.${index}.location`}
                                                                                className="default-select style-1 form-control"
                                                                                placeholder="Meeting Subject"
                                                                            >
                                                                                <option>--SELECT METTING TYPE--</option>
                                                                                <option value="none">None</option>
                                                                                <option value="Call">
                                                                                    Call
                                                                                </option>
                                                                                <option value="virtual_meeting">
                                                                                    Virtual Meeting
                                                                                </option>
                                                                                <option value="physical_meeting">
                                                                                    Phycial Meeting
                                                                                </option>
                                                                                <option value="Other">
                                                                                    Other
                                                                                </option>
                                                                            </Field>

                                                                        </div>
                                                                        <div className="col-xl-6 mb-2">
                                                                            <label
                                                                                htmlFor="targetTime"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Target Time
                                                                            </label>
                                                                            <Field
                                                                                id="targetTime"
                                                                                type="time"
                                                                                name={`followUpInfo.${index}.targetTime`}
                                                                                className="default-select style-1 form-control"
                                                                                placeholder="Meeting Date"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.targetTime`}
                                                                                render={(msg) => (
                                                                                    <div
                                                                                        style={{ color: "red" }}
                                                                                    >
                                                                                        {msg}
                                                                                    </div>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                        <div className="col-xl-6 mb-2">
                                                                            <label
                                                                                htmlFor="purpose"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Meeting Purpose
                                                                            </label>
                                                                            <Field
                                                                                id="purpose"
                                                                                type="text"
                                                                                name={`followUpInfo.${index}.purpose`}
                                                                                className="default-select style-1 form-control"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.purpose`}
                                                                                render={(msg) => (
                                                                                    <div
                                                                                        style={{ color: "red" }}
                                                                                    >
                                                                                        {msg}
                                                                                    </div>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                        <div className="col-xl-6 mb-2">
                                                                            <label
                                                                                htmlFor="notes"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Notes
                                                                            </label>
                                                                            <Field
                                                                                id="notes"
                                                                                type="text"
                                                                                name={`followUpInfo.${index}.notes`}
                                                                                className="default-select style-1 form-control"
                                                                                placeholder="Notes"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.notes`}
                                                                                render={(msg) => (
                                                                                    <div
                                                                                        style={{ color: "red" }}
                                                                                    >
                                                                                        {msg}
                                                                                    </div>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                        <div className="col-xl-6 mb-2">
                                                                            <label
                                                                                htmlFor="location"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Subject
                                                                            </label>
                                                                            <Field
                                                                                id="location"
                                                                                type="text"
                                                                                name={`followUpInfo.${index}.subject`}
                                                                                className="default-select style-1 form-control"
                                                                                placeholder="Meeting Location"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.subject`}
                                                                                render={(msg) => (
                                                                                    <div
                                                                                        style={{ color: "red" }}
                                                                                    >
                                                                                        {msg}
                                                                                    </div>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                        <div className="col-xl-6 mb-2">
                                                                            <label
                                                                                htmlFor="location"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Completion Time
                                                                            </label>
                                                                            <Field
                                                                                id="completionTime"
                                                                                type="time"
                                                                                name={`followUpInfo.${index}.completionTime`}
                                                                                className="default-select style-1 form-control"
                                                                                placeholder="Meeting Date"
                                                                                pattern="\d{2}-\d{2}-\d{4}"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.completionTime`}
                                                                                render={(msg) => (
                                                                                    <div
                                                                                        style={{ color: "red" }}
                                                                                    >
                                                                                        {msg}
                                                                                    </div>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                        <div className="col-xl-6 mb-2">
                                                                            <label
                                                                                htmlFor="completionDate"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Completion Date
                                                                            </label>
                                                                            <Field
                                                                                id="completionDate"
                                                                                type="date"
                                                                                name={`followUpInfo.${index}.completionDate`}
                                                                                className="default-select style-1 form-control"
                                                                                placeholder="Completion Date"
                                                                                pattern="\d{2}-\d{2}-\d{4}"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.completionDate`}
                                                                                render={(msg) => (
                                                                                    <div
                                                                                        style={{ color: "red" }}
                                                                                    >
                                                                                        {msg}
                                                                                    </div>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                        <div className="col-xl-12 mb-2">
                                                                            <label
                                                                                htmlFor="subject"
                                                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                                            >
                                                                                Meeting Highlights
                                                                            </label>
                                                                            <Field
                                                                                component="textarea"
                                                                                name={`followUpInfo.${index}.meetingHighlight`}
                                                                                placeholder="About Meeting"
                                                                                className="default-select style-1 form-control"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`followUpInfo.${index}.meetingHighlight`}
                                                                                render={(msg) => (
                                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                                )}
                                                                            />
                                                                        </div>



                                                                    </div>
                                                                </div>
                                                            )

                                                        })
                                                        }
                                                    </>
                                                )}
                                            />
                                        </fieldset>


                                    </div>

                                    <div className='grp-btn'>
                                        <button className="btn btn-secondary light ms-1 me-1" type="button" onClick={resetForm}>Reset
                                        </button>

                                        <button
                                            data-bs-dismiss="offcanvas"
                                            className="btn btn-primary me-1 "
                                            type="submit"
                                            disabled={!dirty || !isValid || isSubmitting}
                                        >Submit
                                        </button>
                                    </div>
                                </Form>
                            }}
                        </Formik>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditLeadInformation