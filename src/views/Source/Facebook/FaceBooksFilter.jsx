// import axios from 'axios';
// import React from 'react'
// import { useEffect } from 'react';
// import config from '../../../config';
// import { useState } from 'react';
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";

// function FacebookFilter() {
//     const initialValues = {
//         campignLeadId: JSON.parse(localStorage.getItem('campaign')), // Set your initial value for leadId here
//     };
//     const [campignId, setCampignId] = useState("");

//     const validationSchema = Yup.object({
//         campignLeadId: Yup.string().required("Lead Id is required"),
//     });
//     const [adSets, setAdSets] = useState([]);
//     const [finalData, setFinalData] = useState("");
//     var token = localStorage.getItem("token");

//     useEffect(() => {
//         const fetchFbCampaign = async () => {
//             try {
//                 const response = await axios.get(
//                     `${config.API_URL}/leadSource/fetch/campaign`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     },
//                 }
//                 );
//                 const adSetsData = response.data.data;
//                 setAdSets(adSetsData);
//             } catch (error) {
//                 console.error("Error fetching campaigns:", error.message);
//             }
//         };
//         fetchFbCampaign();
//     }, []);

//     //try

//     const [dataItem, setDataItem] = useState('')
//     const onSubmit = async (values) => {
//         localStorage.setItem('campaign', JSON.stringify(values.campignLeadId));
//         const items = JSON.parse(localStorage.getItem('campaign'));
//         setDataItem(items)
//     };
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.post(
//                     `${config.API_URL}/leadSource/fetch/campaign/leads`,
//                     { campignLeadId: JSON.parse(localStorage.getItem('campaign')) },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                             "Content-Type": "application/json",
//                             // Add any other headers you need
//                         },
//                     }
//                 );
//                 setFinalData(response.data.data);
//             } catch (error) {
//                 console.error("Error fetching ads:", error.message);
//             }
//         };

//         fetchData(); // Call the async function here

//     }, [adSets, dataItem]);
//     return (
//         <>
//             <div className='card border-0'>
//                 <div className='card-body'>
//                     <div className='row'>
//                         <div className='col-xl-4'>
//                             <form>
//                                 <div className="input-group border rounded-pill pdng">
//                                     <input type="search" placeholder="Search Here...." aria-describedby="button-addon3" className="form-control bg-none border-0" />
//                                     <div className="input-group-append border-0">
//                                         <button id="button-addon3" type="button" className="btn btn-link text-success"><i className="fa fa-search" /></button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className='col-xl-2'></div>
//                         <div className='col-xl-6'>
//                             <Formik
//                                 initialValues={initialValues}
//                                 validationSchema={validationSchema}
//                                 onSubmit={onSubmit}
//                             >
//                                 {({ values, setFieldValue, errors, dirty, isValid }) => {

//                                     return (
//                                         <div className="col-lg-12">
//                                             <Form>

//                                                 <div className='d-flex'>
//                                                     <Field
//                                                         as="select"
//                                                         name="campignLeadId"
//                                                         className="default-select style-1 form-control asn-slt">
//                                                             <option data-display="Select">--Select Compaign--</option>
//                                                         {adSets &&
//                                                             adSets.map((ele) => (
//                                                                 <option key={ele.id} value={ele.id}>
//                                                                     {ele.name}
//                                                                 </option>
//                                                             ))}
//                                                         {/* <option data-display="Select">--Select User--</option>
//                                                         <option value="html">Komal Yadav</option>
//                                                         <option value="css">Rohit Singh</option> */}
//                                                     </Field>
//                                                     <ErrorMessage
//                                                         name="campignLeadId"
//                                                         render={(msg) => (
//                                                             <small style={{ color: "red" }}>{msg}</small>
//                                                         )}
//                                                     />
//                                                     <button className="btn btn-info w-25 rounded-pill" type='submit'><i class="fa-solid fa-share me-1 "></i>Submit</button>

//                                                 </div>
//                                                 {/* <Field
//                                                         as="select"
//                                                         name="campignLeadId"
//                                                         placeholder="Enter your lead Source"
//                                                         className="w-full rounded-md border border-transparent py-2.5 px-6 text-base 
//                  text-body-color placeholder-body-color shadow-one outline-none focus:border-primary 
//                  focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
//                                                         onChange={(e) => {
//                                                             const selectedValue = e.target.value;
//                                                             setCampignId(selectedValue);
//                                                             setFieldValue("campignLeadId", selectedValue); // Set the value in Formik state
//                                                         }}
//                                                     >
//                                                         <option>--SELECT CAMPAIGNS--</option>
//                                                         {adSets &&
//                                                             adSets.map((ele) => (
//                                                                 <option key={ele.id} value={ele.id}>
//                                                                     {ele.name}
//                                                                 </option>
//                                                             ))}
//                                                     </Field> */}



//                                                 {/* <div className=" px-4">
//                                                     <button className="btn btn-primary me-1" type="submit">Submit</button>


//                                                 </div> */}
//                                             </Form>
//                                         </div>
//                                     );
//                                 }}
//                             </Formik>
//                             {/* <form >
//                                 <div className='d-flex'>
//                                     <select className="default-select style-1 form-control asn-slt">
//                                         <option data-display="Select">--Select User--</option>
//                                         <option value="html">Komal Yadav</option>
//                                         <option value="css">Rohit Singh</option>
//                                     </select>
//                                     <button className="btn btn-info w-25 rounded-pill"><i class="fa-solid fa-share me-1 "></i>Submit</button>
//                                 </div>
//                             </form> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FacebookFilter