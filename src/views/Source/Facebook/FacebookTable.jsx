import react, { useMemo } from "react";
import FilterComponent from "../ManualData/FilterComponent";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
// import notAssigned from '../../../assets/images/support-illustration.svg'    
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../../../config";
import { customStyles } from "../../../utils/TableCssComponent";
import FacebooksFilter from "./FaceBooksFilter";
import EditLeadInformation from "../../GetAllLeads/EditLeadInformation";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import FacebookFilters from './FacebookFilter'

function FacebookTable(props) {
    const [filterText, setFilterText] = useState("");
    const data = props && props.finalData;
    var token = localStorage.getItem("token");
    const { userInfo } = useSelector((store) => store.userInfo) || " ";
    const currentUser = userInfo && userInfo.payload && userInfo.payload._id
    const userPermission = userInfo && userInfo.payload && userInfo.payload && userInfo.payload.role[0]?.permission
    //for lead
    const expectedAdmin = ["read", "create", "update", 'delete'];
    const sortAdmin = expectedAdmin.slice().sort();
    const sortedUserPermissions = userPermission.map(permission => permission.value).sort();
    const compairedAdmin = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortAdmin);
    // for Manager filter :
    const [rowData, setrowData] = useState([]);

    const [selectedData, setSelectedData] = useState([])
    const expectedManager = ["read", "create", "update"];
    const sortData = expectedManager.slice().sort();
    // const sortedUserPermissions = userPermission.map(permission => permission.value).sort();
    const compairedData = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortData);
    const [load, setReload] = useState(0)
    const fetchedData = data && data.filter((ele) => ele.isTrashed == false)
    const actionFunction = async (leadId) => {
        try {
            const response = await axios.post(`${config.API_URL}/leadSource/accept`, {
                leadId,
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                        // Set the content type for file upload
                        // Add any other headers you need      
                    },
                }
            );
            const userData = response;
            if (userData.data.code == "SUCCESS") {
                Swal.fire({
                    icon: "success",
                    title: "Woh...",
                    text: "Lead accepted ",
                });
            }
            else if (userData.code == "ERROROCCURED") {
                Swal.fire({
                    icon: "error",
                    title: "Oops",
                    //   text: error,
                });

            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: error,
            });
        }
    }
    const rejectFunction = async (leadId) => {
        try {
            const response = await axios.post(`${config.API_URL}/leadSource/reject`, {
                leadId,
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json", // Set the content type for file upload
                        // Add any other headers you need
                    },
                }
            );
            const userData = response;
            if (userData.data.message == "Lead rejected and updated successfully") {
                Swal.fire({
                    icon: "success",
                    title: "Woh...",
                    text: "Lead Rejected ",
                });

            }
            else if (userData.code == "ERROROCCURED") {
                Swal.fire({
                    icon: "error",
                    title: "Oops",
                    //   text: error,
                });

            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops",
                // text: error,
            });

        }
    }
    const handleSelectedRowsChange = (state) => {
        const data = ([...selectedData, state.selectedRows.map((item) => item._id)])
        setSelectedData(data[(data.length) - 1]);

    };
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );
    const handleDelete = async (selectedData) => {
        /* eslint-disable no-restricted-globals*/
        var confirmation = confirm("Are you sure you want to delete?");
        if (confirmation) {
            try {
                const response = await axios.delete(`${config.API_URL}/leadSource/leads/delete`, {
                    data: selectedData, // Use the 'data' property to send the payload
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (response.data.message == "Deleted  items") {
                    Swal.fire({
                        icon: "success",
                        title: "Yeah...",
                        text: "Leads removed successfully",
                    });
                }
                setReload(load + 1)
                // Handle response data and actions here
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Somthing wrong",
                });
                // Handle the error, e.g., by displaying a message to the user
            }
        } else {
            // Handle user cancellation if needed
        }
    };
    const columns = useMemo(() =>
        [
            // compairedAdmin ? "" : {
            //     name: 'Move To',
            //     cell: row =>
            //         <div className="d-flex">
            //             {row && row.users && row.users.length > 0 ? row && row.users && row.users.filter((item, index) => item?.id?._id == currentUser).map((ele) => {
            //                 return (
            //                     <div className>
            //                         {ele.leadStatus == "REJECTED" ? <img src="" className="img-fluid w-25" /> : ele.leadStatus == "ACCEPTED" ?
            //                             <img src="" className="img-fluid w-25" /> :
            //                             <div className="d-flex">
            //                                 <button className="p-1" onClick={() => { actionFunction(row._id) }}><img src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png" width={35} /></button>
            //                                 {/* <button className="p-1" onClick={() => {actionFunction(row._id)}}><span className="move-icons">✅</span></button> */}
            //                                 <button className="p-1" onClick={() => { rejectFunction(row._id) }}><img src="https://cdn-icons-png.flaticon.com/512/8731/8731451.png" width={40} /></button>
            //                                 {/* <button className="p-1" onClick={() => {rejectFunction(row._id)}}><span className="move-icons">❌</span></button> */}
            //                             </div>}
            //                         {
            //                             ele.leadStatus == "REJECTED" ? <button className="p-1" type="button"
            //                                 data-bs-toggle="modal"
            //                                 //   onClick={setReject(row._id)}
            //                                 data-bs-target="#exampleModal">Reason</button> : ""}
            //                     </div>
            //                 )
            //             })
            //                 : <img src="" className="img-fluid w-50" />}
            //         </div>
            // },
            {
                name: "Full Name",
                selector: (row) => <Link to={`/leads/${row?._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.firstName} ${row?.lastName}`}>{row?.firstName} {row?.lastName}</Link>,
            },
            {
                name: "Email",
                selector: (row) => <Link to={`/leads/${row?._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.email}`}>{row?.email}</Link>,
            },
           
            {
                name: "Phone Number",
                selector: (row) => <Link to={`/leads/${row?._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.phone}`}>{row?.phone}</Link>,
            },
            {
                name: "Users Status",
                selector: (row) =>
                    <div>
                        {row && row.users && row.users.length == 0 ? <span className="badge badge-warning light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Assigned</span> :
                            (row && row.users && row.users.length > 0 && row.users.every(item => !item.currentUser)) || (row && row.users && row.users.find(item => item.id._id == currentUser && item.currentUser == false)) ? (
                                <>
                                    <p >
                                        <span className="badge badge-danger light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Attended</span>
                                        {/* <strong>Not-attended</strong> */}
                                    </p>
                                </>
                            )
                                : row && row.users && row.users.length > 0 ? row && row.users && row.users.filter((item, index) => (item.id._id == currentUser || compairedAdmin) && item.currentUser).map((ele) => {
                                    return (
                                        <>
                                            {ele.leadStatus == "REJECTED" ? <p><span className="badge badge-danger light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Attended</span> </p> : ele.leadStatus == "ACCEPTED" ?
                                            <span className="badge badge-success light border-0"><i class="fa-solid fa-not-equal me-1"></i>Attended</span> : <p style={{
                                                    background: "orange",
                                                    fontSize: "12px",
                                                    color: "white",
                                                    padding: "6px",
                                                    borderRadius: "4px",
                                                    // borderBottom:"2px solid #071739",
                                                    marginBottom: "0px"
                                                }}><strong>Pending</strong></p>}
                                        </>
                                    )
                                }) : <p style={{
                                    background: "rgb(219 255 98 / 62%)",
                                    color: "#431010",
                                    padding: "6px 8px",
                                    borderRadius: "0px",
                                    borderBottom: "2px solid #071739",

                                }}><strong>Not-assigned</strong></p>}

                    </div>
            },
            {
                name: "Your Budget",
                selector: (row) => <Link to={`/source/custom/${row?._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={row?.budget}>{row?.budget}</Link>,
            },
            {
                name: "City",
                selector: (row) => <Link to={`/source/custom/${row?._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.city}`}>{row?.city}</Link>,
            },
            // {
            //     name: 'Action',
            //     cell: row => <div>
            //         {/* <Link to={`${row._id}`} state={row} > <spna className><i class="bi bi-arrows-fullscreen" style={{ marginRight: "8px", fontSize: "14px" }}></i></spna></Link> */}
            //         {compairedData && row && row.users && row.users.length > 0 && row.users.filter((ele) => (ele.id === userInfo && userInfo.payload && userInfo.payload._id) && (ele && ele.leadStatus == "ACCEPTED"))
            //             || compairedAdmin ? <Link to={`/source/custom/update/${row._id}`} state={row}><button className='btn btn-warning me-1 btn-sm'><i className='icon-pencil'></i></button></Link> : ""}

            //     </div>
            // },
            {
                name: 'Action',
                selector: (row) =>
        
                  <div> <a
                    onClick={() => setrowData(row)}
                    data-bs-toggle="offcanvas"
                    href="#EditLead"
                    aria-controls="EditLead"
                    className="btn btn-primary shadow btn-xs sharp me-1"
                    title='Edit'
                  >
                    <i className="fa fa-pencil" />
                  </a>
                  </div>
              }
        ], []
    )
    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };
        return (
            <FilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);
    const ExpandableComponent = ({ data }) => {
        return (
            <div>
                <>

                    <ul className="p-4 bg-light">
                        <p style={{ fontSize: "13px" }}> <strong>Email:</strong> {data && data.email}</p>
                        <p style={{ fontSize: "13px" }}> <strong>Phone:</strong> {data && data.phone}</p>
                        <p style={{ fontSize: "13px" }}><strong>Description : </strong>{data && data.description}</p>
                    </ul>
                </>
            </div>
        );
    };
    const filteredItems = fetchedData && fetchedData.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
    );
    return (
        <>
        
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-xl-12 bst-seller">
                        <div className="card">
                            <div className="card-body p-0">
                            <EditLeadInformation initialData={rowData} />

                                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting ">
                                {/* <FacebooksFilter/> */}
                                { 
                                    filteredItems ===undefined
                                    ? 
                                    <Skeleton count={5} /> 
                                    :
                               
                                    <DataTable
                                        customStyles={customStyles}
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                        selectableRowsHighlight
                                        highlightOnHover
                                        FixedHeader
                                        fixedHeaderScrollHeight='450px'
                                        expandableRows
                                        expandableRowsComponent={ExpandableComponent}
                                        subHeaderComponent={subHeaderComponent}
                                        // selectableRows
                                        // onSelectedRowsChange={handleSelectedRowsChange}
                                    />
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default FacebookTable;