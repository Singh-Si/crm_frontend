import axios from "axios";
import config from "../../../config";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useEffect } from "react";
import { fetchProducts } from "../../../redux/action/products/products";
import { fetchLeadSource } from "../../../redux/action/LeadSource/LeadSource";
import { fetctAllLead } from "../../../redux/action/allleads/getalllead";

var token = localStorage.getItem("token");
function AddLead() {

  const { companyInfo } = useSelector((store) => store) || " ";
  const company = companyInfo?.userInfo?.data;
  const { loading, userInfo, error } = useSelector((store) => store.userInfo) || " ";
  const companyData = userInfo?.payload?.company
  const { userApi } = useSelector((store) => store) || " ";
  const userDetails = userApi?.userInfo?.data;
  const companyId = userInfo?.payload?.company;
  const initialValues = {

    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    leadType: "",
    leadSource: "",
    budget: "",
    date: "",
    time: "",
    state: "",
    city: "",
    country: "",
    description: "",
    assignedManager: "",
    alternateManager: "",
    product: "",
    company: companyData,
    followUpInfo: [{
      subject: "",
      targetTime: "",
      targetDate: new Date().toLocaleDateString('en-GB'),
      purpose: "",
      notes: "",
      location: "",
      completionTime: "",
      completionDate: new Date().toLocaleDateString('en-GB'),

    }],
  };
  const validationSchema = Yup.object({
    lastName: Yup.string().required("Last Name is required"),
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, 'Only digits are allowed')
      .max(10, 'Phone number must be at most 10 digits including country code')
      .min(10, 'Phone number must be at least 10 digits')
      .required('Phone number is required'),
    leadSource: Yup.string().required("Lead Source is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    description: Yup.string().required("Description is required"),
  });
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  const products = useSelector((state) => state?.fetchProductsReducer?.userInfo?.data)
  // console.log(products, "products")

  useEffect(() => {
    dispatch(fetchProducts(token))
  }, [])

  const onSubmit = async (values, { resetForm }) => {
 
    let targetTime = new Date(Date.now() + 60 * 60 * 1000);

    try {
      const response = await axios.post(`${config.API_URL}/leadSource/add`, {
        ...values,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set the content type for file upload
          // Add any other headers you need
        },
      });

      const userData = response.data;

      if (userData.code == "DUPLICATEDATA") {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Lead Already Exists",
        });
      } else if (userData.code == "SUCCESS") {
        Swal.fire({
          icon: "success",
          title: "Woh...",
          text: "Lead Registered ",
        });
        dispatch(fetctAllLead(token))
        dispatch(fetchLeadSource(token));
      } else if (userData.code == "ERROROCCURED") {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: userData.error, // Access the error message from the response data
        });
        const closeButton = document.querySelector(".btn-close");
        if (closeButton) {
          closeButton.click();
          resetForm();
        }

      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.message, // Access the error message from the caught error object
      });
    }
  }

  return (
    <div className="offcanvas offcanvas-end customeoff" tabIndex={-1} id="AddLead">
      <div className="offcanvas-header">
        <h5 className="modal-title" id="#gridSystemModal">Lead Information</h5>
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
            {({ values, setFieldValue, errors, dirty, isValid, resetForm, isSubmitting }) => {
           
              return (
                <Form>

                  <div className="row">
                    <h4 className='elead-title'>Basic Information</h4>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">First Name<span className="text-danger">*</span></label>
                      <Field name="firstName" type="text" className="form-control" placeholder />
                      <ErrorMessage
                        name="firstName"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>


                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Last Name<span className="text-danger">*</span></label>
                      <Field name="lastName" type="text" className="form-control" placeholder />
                      <ErrorMessage
                        name="lastName"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Email Id<span className="text-danger">*</span></label>
                      <Field name="email" className="form-control" placeholder />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Phone No.<span className="text-danger">*</span></label>
                      <Field name="phone" type="number" className="form-control" placeholder />
                      <ErrorMessage
                        name="phone"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Project Name</label>
                      <Field as="select" name="product" type="text" className="form-control" placeholder >
                        <option>--SELECT PRODUCT--</option>
                        {products && products.map((ele) => {

                          return (
                            <>
                              <option value={ele.slug}>{(ele.name).charAt(0).toUpperCase() + ele.name.slice(1)} </option>
                            </>
                          )
                        })}
                      </Field>

                    </div>

                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Lead Status<span className="text-danger">*</span></label>
                      <Field as="select" name="leadType" className="default-select style-1 form-control" onChange={(e) => setFieldValue("leadType", e.target.value)}>
                        <option value=" ">--SELECT LEAD STATUS--</option>
                        <option value="none">NONE</option>
                        <option value="Lost-lead(junk-lead)">Lost Lead</option>
                        <option value="warm-lead(junk-lead)">Warm Lead</option>
                        <option value="cold-lead(junk-lead)">Cold Lead</option>
                        <option value="hot-lead">hot Lead</option>
                        <option value="not-answer">Not Answered/SwitchOff/Busy</option>
                        <option value="location-mismatch">Location Mismatched</option>
                        <option value="Low-budget">Low Budget</option>
                        <option value="other">Junk Lead</option>
                        <option value="site-visit-done">Site Visit Planned</option>
                        <option value="meeting-planned">Meeting Planned</option>
                        <option value="meeting-done">Meeting Done</option>
                        <option value="call-back">Call Back</option>
                        <option value="contact-in-future ">
                          Contact in Future
                        </option>

                        <option value="not-Contacted">
                          Not Contacted
                        </option>
                        <option value="Pre-Qualified">
                          Pre-Qualified
                        </option>

                        <option value="client">
                          Closed (Client)/Deal Converted
                        </option>
                      </Field>

                      <ErrorMessage
                        name="leadSource"
                        render={(msg) => {
                          <small style={{ color: "red" }}>{msg}</small>
                        }}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Lead Source<span className="text-danger">*</span></label>

                      <Field
                        as="select"
                        type="text"
                        name="leadSource"
                        className="default-select style-1 form-control"
                        onChange={(e) => setFieldValue("leadSource", e.target.value)}
                      >
                        <option value=" ">--SELECT LEAD SOURCE--</option>
                        <option value="none">NONE</option>
                        <option value="advertisement">
                          Advertisement
                        </option>
                        {/* <option value="facebook">facebook</option> */}
                        <option value="employee-ref">Employee Referral</option>
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
                        render={(msg) => {
                          <small style={{ color: "red" }}>{msg}</small>
                        }}
                      />
                    </div>

                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Lead Owner</label>
                      <Field
                        name="leadOwner"
                        type="text"
                        className="form-control"
                        placeholder
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">What is your budget</label>
                      <Field
                        name="budget"
                        type="text"
                        className="form-control"
                        placeholder />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Date</label>
                      <Field
                        type="date"
                        name="date"
                        className="form-control"
                        placeholder />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Time</label>
                      <Field
                        type="time"
                        name="time"
                        className="form-control"
                        placeholder />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Last Activity</label>
                      <Field
                        name="lastActivity"
                        type="text"
                        className="form-control"
                        placeholder />
                    </div>
                  </div>
                  <div className="row">
                    <h4 className='elead-title'>Address Information</h4>
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="State" className="form-label">State<span className="text-danger">*</span></label>
                      <Field
                        name="state"
                        type="text" className="form-control" placeholder />
                      <ErrorMessage
                        name="state"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">City<span className="text-danger">*</span></label>
                      <Field
                        name="city"
                        type="text"
                        className="form-control"
                        placeholder />
                      <ErrorMessage
                        name="city"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-12 mb-3">
                      <label className="form-label">Country<span className="text-danger">*</span></label>
                      <Field
                        name="country"
                        type="text" className="form-control" placeholder />
                      <ErrorMessage
                        name="country"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
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
                    <h4 className='elead-title'>Meeting Information</h4>

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
                                  <div className="row">


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
                                        Subject
                                      </label>
                                      <Field
                                        as="select"
                                        type="text"
                                        name={`followUpInfo.${index}.subject`}
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
                                        Meeting Location
                                      </label>
                                      <Field
                                        id="location"
                                        type="text"
                                        name={`followUpInfo.${index}.location`}
                                        className="default-select style-1 form-control"
                                        placeholder="Meeting Location"
                                      />
                                      <ErrorMessage
                                        name={`followUpInfo.${index}.location`}
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
                                    <div className="w-full px-4 md:w-1/2">
                                      <div className="mb-8">
                                        <label
                                          htmlFor="subject"
                                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                          Meeting Highlights
                                        </label>
                                        <Field
                                          component="textarea"
                                          name={`followUpInfo.${index}.subject`}
                                          placeholder="About Meeting"
                                          className="default-select style-1 form-control"
                                        />
                                        <ErrorMessage
                                          name={`followUpInfo.${index}.subject`}
                                          render={(msg) => (
                                            <small style={{ color: "red" }}>{msg}</small>
                                          )}
                                        />
                                      </div>
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
                    {/* <button type="button" className="btn btn-danger light ms-1 me-1" data-bs-dismiss="offcanvas" aria-label="Close" onClick={resetForm}>
                      Cancel
                      </button> */}
                    <button className="btn btn-danger light ms-1 me-1" onClick={resetForm}>Reset</button>
                    <button
                                            data-bs-dismiss="offcanvas"
                     className="btn btn-primary me-1" type="submit" disabled={
                                  Object.keys(errors).length != 0 ||
                                    dirty === false ||
                                    isSubmitting === true 
                                   

                                    ? true
                                    : false
                                }>Submit</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default AddLead