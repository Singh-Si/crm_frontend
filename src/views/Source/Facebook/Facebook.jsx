import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FacebookTable from "./FacebookTable";
import config from "../../../config";
import { useSelector } from "react-redux";
import TitleBreadCrumb from "../../../components/TitleBreadCrumb";
import FacebookFilter from './FaceBooksFilter'

const GetFacebookLead = () => {
    const [adSets, setAdSets] = useState([]);
    const [campignId, setCampignId] = useState("");
    const [finalData, setFinalData] = useState("");

    // const finalData = useSelector((store)=> store?.facebookLeadReducer?.userInfo)
    const initialValues = {
        campignLeadId: JSON.parse(localStorage.getItem('campaign')), // Set your initial value for leadId here
    };
    const { loading, userInfo, error } = useSelector((store) => store.userInfo) || " ";
    const userPermission = userInfo && userInfo.payload && userInfo.payload && userInfo.payload.role[0]?.permission;
    const expectedAdmin = ["read", "create", "update", 'delete'];
    // sort the data for Admin
    const sortExpectedAdmin = expectedAdmin.slice().sort()
    const sortedUserPermissions = userPermission.map(permission => permission.value).sort();
    const compairedAdmin = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortExpectedAdmin);
    const validationSchema = Yup.object({
        campignLeadId: Yup.string().required("Lead Id is required"),
    });
    var token = localStorage.getItem("token");
    useEffect(() => {
        const fetchFbCampaign = async () => {
            try {
                const response = await axios.get(
                    `${config.API_URL}/leadSource/fetch/campaign`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
                );
                const adSetsData = response.data.data;
                setAdSets(adSetsData);
            } catch (error) {
                console.error("Error fetching campaigns:", error.message);
            }
        };
        fetchFbCampaign();
    }, []);

    //try

    const [dataItem, setDataItem] = useState('')
    const [filterText, setFilterText] = useState(" ");

    const onSubmit = async (values) => {
        localStorage.setItem('campaign', JSON.stringify(values.campignLeadId));
        const items = JSON.parse(localStorage.getItem('campaign'));
        setDataItem(items)
    };

    useEffect(() => {
        console.log("dataItem")
        const fetchData = async () => {

            try {
                const response = await axios.post(
                    `${config.API_URL}/leadSource/fetch/campaign/leads`,
                    { campignLeadId: JSON.parse(localStorage.getItem('campaign')) },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                            // Add any other headers you need
                        },
                    }
                );
                console.log(response, "dataItem")
                setFinalData(response.data.data);

                console.log(finalData, "dataItem")
            } catch (error) {
                console.error("Error fetching ads:", error.message);
            }
            console.log(finalData, "finalData")
        };

        fetchData(); // Call the async function here

    }, [ dataItem]);
    const filteredItems = finalData && finalData.filter(
        item =>
          JSON.stringify(item)
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) !== -1
      );
    return (
        <>

            <div className='page-titles'>
                <TitleBreadCrumb title="Facebook Leads" />
            </div>
            <div className="pt-5">
                {/* <FacebookFilter /> */}
                {/* {compairedAdmin ? */}
                
                 <div className='container-fluid'>
                 <div className='row'>
                     <div className="col-xl-12 bst-seller">
                         <div className='card border-0'>
                             <div className='card-body'>
                                 <div className='row'>
                                     <div className='col-xl-4'>
                                         <form>
                                             <div className="input-group border rounded-pill pdng">
                                                 <input type="search" placeholder="Search here.." aria-describedby="button-addon3" className="form-control bg-none border-0 ml-4" onChange={(e) => setFilterText(e.target.value)}
                                                     filterText={filterText} />
                                                 <div className="input-group-append border-0">
                                                     <button id="button-addon3" type="button" className="btn btn-link text-success"><i className="fa fa-search" /></button>
                                                 </div>
                                             </div>
                                         </form>
                                     </div>
                                     <div className='col-xl-2'></div>
                                     <div className='col-xl-6'>
                                         <Formik
                                             initialValues={initialValues}
                                             validationSchema={validationSchema}
                                             onSubmit={onSubmit}
                                         >
                                             {({ values, setFieldValue, errors, dirty, isValid }) => {

                                                 return (
                                                     <div className="col-lg-12">
                                                         <Form>

                                                             <div className='d-flex'>
                                                                 <Field
                                                                     as="select"
                                                                     name="campignLeadId"
                                                                     className="default-select style-1 form-control asn-slt">
                                                                     <option data-display="Select">--Select Compaign--</option>
                                                                     {adSets &&
                                                                         adSets.map((ele) => (
                                                                             <option key={ele.id} value={ele.id}>
                                                                                 {ele.name}
                                                                             </option>
                                                                         ))}
                                                                     
                                                                 </Field>
                                                                 <ErrorMessage
                                                                     name="campignLeadId"
                                                                     render={(msg) => (
                                                                         <small style={{ color: "red" }}>{msg}</small>
                                                                     )}
                                                                 />
                                                                 <button className="btn btn-info w-25 rounded-pill" type='submit'><i class="fa-solid fa-share me-1 "></i>Submit</button>

                                                             </div>
                                                
                                                         </Form>
                                                     </div>
                                                 );
                                             }}
                                         </Formik>
                                         
                                     </div>
                                 </div>
                             </div>
                         </div>

                     </div>
                 </div>
             </div>
          
               
                {/* : ""} */}


                <FacebookTable finalData={filteredItems} />
            </div>
        </>
    );
};

export default GetFacebookLead;
