import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "../Source/ManualData/FilterComponent";
import { fetchLeadSource } from "../../redux/action/LeadSource/LeadSource";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Swal from "sweetalert2";
import config from "../../config";
import { fetctAllLead } from "../../redux/action/allleads/getalllead";
import { fetchUserApi } from '../../redux/action/UserApi/UserApi'
import InteligenceView from "./InteligenceView";
import Reason from './Reason'
import EditLeadInformation from "./EditLeadInformation";
import FilterAndAssignLeads from "./FilterAndAssignLeads";
import { customStyles } from "../../utils/TableCssComponent";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ListView({ setrowToDelete , leadsData ,propsData}) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  var token = localStorage.getItem("token");
  useEffect(() => {
    // dispatch(fetchLeadSource(token));
    dispatch(fetchUserApi(token));
  }, []);
  const [selectedLeads, SetselectedLeads] = useState([])
  // const { LeadSource, error } = useSelector((store) => store) || " ";
  // const leadSource = LeadSource && LeadSource.userInfo && LeadSource.userInfo.data;
  // const lead = leadSource && 
  const { userInfo } = useSelector((store) => store.userInfo) || " ";
  const { userApi } = useSelector((store) => store) || " ";
  const users = userApi && userApi.userInfo && userApi.userInfo.data;
  const currentUser = userInfo && userInfo.payload && userInfo.payload._id
  const userPermission = userInfo && userInfo.payload && userInfo.payload && userInfo.payload.role && userInfo.payload.role[0] && userInfo.payload.role[0].permission;
  //for lead
  const [data, setReject] = useState('')
  const [selectedData, setSelectedData] = useState([])
  const expectedLead = ['read', 'create'];
  const expectedManager = ['read', 'create', 'update'];
  const expectedAdmin = ['read', 'create', 'update', 'delete'];
  const sortAdmin = expectedAdmin.slice().sort();
  const sortData = expectedManager.slice().sort();
  const sortExpectedLead = expectedLead.slice().sort();
  const sortedUserPermissions = userPermission.map(permission => permission.value).sort();
  // for All Users 
  const checkPermissionMatch = (permissions, expectedPermissions) => {
    const permissionValues = permissions && permissions.map((permission) => permission.value);
    return expectedPermissions.every((perm) => permissionValues && permissionValues.includes(perm)) && permissions.length === expectedPermissions.length;
  };
  const leadUsers = users && users.filter((user) =>
    checkPermissionMatch(user && user.role && user.role.permission, sortExpectedLead)
  );
  const managerUsers = users && users.filter((user) =>
    checkPermissionMatch(user && user.role && user.role.permission, sortData)
  );
  const adminUsers = users && users.filter((user) =>
    checkPermissionMatch(user && user.role && user.role.permission, sortAdmin)
  );
  //for logedUser :

  const compairedAdmin = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortAdmin);
  const compairedData = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortData);
  const compaireLead = JSON.stringify(sortedUserPermissions) == JSON.stringify(sortExpectedLead)
 
  const multipleLead = users && users.filter((ele) => {

    const sortedmultipleLeads = ele && ele.role && ele.role.permission && ele.role.permission.map(permissions => permissions.value).sort()

    const permissionsLeadMatch = JSON.stringify(sortedmultipleLeads) === JSON.stringify(sortedUserPermissions);
    return permissionsLeadMatch;
  })
  const allUser = compairedAdmin ? managerUsers : compairedData ? managerUsers && managerUsers.concat(leadUsers) : multipleLead
  
  const handleListView = (val) =>{
    propsData(val);
  }

 
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
        dispatch(fetchLeadSource(token));
        dispatch(fetctAllLead(token))
      }
      else if (userData.code == "ERROROCCURED") {
        Swal.fire({
          icon: "error",
          title: "Oops",
          // text: error,
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
  const rejectFunction = async (leadId) => {
    try {
      const response = await axios.post(`${config.API_URL}/leadSource/reject`, {
        leadId,
      },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const userData = response;
      if (userData.data.message == "Lead rejected and updated successfully") {
        dispatch(fetchLeadSource(token));
        dispatch(fetctAllLead(token))
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
          text: "error",
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
  //reject function 
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  const columns = useMemo(() =>
    [
      compairedAdmin ? "" : {
        name: 'Activity',
        width:"14rem",
        cell: row =>
          <div >
            {row && row.users && row.users.length > 0 ? row.users.filter((ele, index) => (ele && ele.id && ele.id._id == currentUser)).map((item) => {
              return (
                <div className="d-flex" >
                  {item.leadStatus == "ACCEPTED" ?
                    <div>
                      <span className="badge badge-info light border-0">Inprogress</span>
                    </div> : item.leadStatus == "PENDING" ? <><button type='button' className='badge badge-success light border-0 me-1' onClick={() => { actionFunction(row._id) }}>
                      <i class="fa-solid fa-check me-1"></i>Accept</button>
                      <button type='button' className='badge badge-danger light border-0' onClick={() => { rejectFunction(row._id) }}>
                        <i class="fa-solid fa-ban me-1"></i>Reject</button>
                    </> : item.leadStatus == "REJECTED" ? <><button type='button' className='badge badge-danger light border-0 me-1'>
                      <i class="fa-solid fa-ban me-1"></i>Rejected</button>
                      <button type='button' className='badge badge-warning  border-0' data-bs-toggle="modal" data-bs-target="#reason">
                        <i class="fa-regular fa-comment me-2"></i>Reason</button>
                    </> : <span className="badge badge-warning light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Assigned</span>
                  }
                </div>
              )
            }) : <span className="badge badge-warning light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Assigned</span>}

          </div>
      },
      {
        name: "Full Name",
        selector: (row) => <Link to={`/leads/${row._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.firstName} ${row?.lastName}`}>{row?.firstName}  {row?.lastName}</Link>,
      },
      {
        name: "Lead Source",
        selector: (row) => <Link to={`/leads/${row._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.leadSource}`}>{row?.leadSource}</Link>,
      },
      {
        name: "Lead Type",
        selector: (row) => <Link to={`/leads/${row._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.leadType}`}>{row?.leadType}</Link>,
      },
      {
        name: " Budget ",
        selector: (row) => <Link to={`/leads/${row._id}`} state={row} tabindex="0" data-toggle="popover" data-trigger="focus" title={`${row?.budget}`}>{row?.budget}</Link>,
      },
      {
        name: 'Move To',
        cell: row =>
        <div>
          {   row && row.users && row.users.length > 0 ? 
          //  <div className="d-flex">
           <div className="dropdown absolute">
             <button type="button" className="btn btn-success light sharp" data-bs-toggle="dropdown" aria-expanded="false">
               <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                 <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                   <rect x={0} y={0} width={24} height={24} />
                   <circle fill="#000000" cx={5} cy={12} r={2} />
                   <circle fill="#000000" cx={12} cy={12} r={2} />
                   <circle fill="#000000" cx={19} cy={12} r={2} />
                 </g>
               </svg>
             </button>
             <div className="dropdown-menu" style={{}}>
               <div id="DZ_W_TimeLine" className="widget-timeline dz-scroll height100 my-4 px-2">
                 <ul className="timeline">
                   {row && row.users && row.users.length == 0 ?
                   <span className="badge badge-warning light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Assigned</span> :
                     compaireLead
                       ? row &&
                       row.users &&
                       row.users.length > 0 &&
                       row.users
                         .filter((ele, index) => ele?.id?._id === currentUser)
                         .map((item, index) => (
                           <li key={index}>
                             {item.leadStatus === "ACCEPTED" ? (
                               <>
                                 <div className="timeline-badge success"></div>
                                 <div className="timeline-panel p-2">
                                   <h6 className="mb-0 f-11">{item && item.leadStatus}</h6>
                                   <strong className="text-primary f-12">{item && item.id && item.id.firstName}</strong>
                                 </div>
                               </>
                             ) : item.leadStatus === "PENDING" ? (
                               <>
                                 <div className="timeline-badge warning"></div>
                                 <div className="timeline-panel p-2">
                                   <h6 className="mb-0 f-11">{item && item.leadStatus}</h6>
                                   <strong className="text-primary f-12">{item && item.id && item.id.firstName}</strong>
                                 </div>
                               </>
                             ) : item.leadStatus === "REJECTED" ? (
                               <>
                                 <div className="timeline-badge danger"></div>
                                 <div className="timeline-panel p-2">
                                   <h6 className="mb-0 f-11">{item && item.leadStatus}</h6>
                                   <strong className="text-primary f-12">{item && item.id && item.id.firstName}</strong>
                                 </div>
                               </>
                             ) : (
                              <span className="badge badge-warning light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Assigned</span>
                             )}
                           </li>
                         ))
                       : (compairedAdmin || compairedData) &&
                       row &&
                       row.users &&
                       row.users.length > 0 &&
                       row.users.map((item, index) => {

                         return (
                           <li key={index}>
                             {item.leadStatus === "ACCEPTED" ? (
                               <>
                                 <div className="timeline-badge success"></div>
                                 <div className="timeline-panel p-2">
                                   <h6 className="mb-0 f-11">{item && item.leadStatus}</h6>
                                   <strong className="text-primary f-12">{item && item.id && item.id.firstName}</strong>
                                 </div>
                               </>
                             ) : item.leadStatus === "PENDING" ? (
                               <>
                                 <div className="timeline-badge warning"></div>
                                 <div className="timeline-panel p-2">
                                   <h6 className="mb-0 f-11">{item && item.leadStatus}</h6>
                                   <strong className="text-primary f-12">{item && item.id && item.id.firstName}</strong>
                                 </div>
                               </>
                             ) : item.leadStatus === "REJECTED" ? (
                               <>
                                 <div className="timeline-badge danger"></div>
                                 <div className="timeline-panel p-2">
                                   <h6 className="mb-0 fs-11">{item && item.leadStatus}</h6>
                                   <strong className="text-primary fs-12">{item && item.id && item.id.firstName}</strong>
                                 </div>
                               </>
                             ) : (
                               <p>Not-Assigned</p>
                             )}
                           </li>
                         )

                       })}
                 </ul>
               </div>
             </div>
           </div>
        //  </div>
          :  
          <span className="badge badge-warning light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Assigned</span>}
        </div>
         


      },
      {
        name: 'Action',
        selector: (row) =>

          <div> <a
            onClick={() => handleListView(row)}
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
  const filteredItems = leadsData && leadsData.filter(
    item => item.isTrashed != true && JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1
  );


  const handleSelectedRowsChange = (state) => {
    SetselectedLeads(state && state.selectedRows)
    const selectedRowsIds = state.selectedRows.map((item) => item && item._id);
    setrowToDelete([...selectedRowsIds]);
    setSelectedData(selectedRowsIds)
  };
  return (
    <>
      <div className='col-xl-12'>
        <div className='card'>
          <div className="card-body">
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

                  <FilterAndAssignLeads filteredItems={filteredItems} selectedData={selectedData} selectedLeads={selectedLeads} />

                </div>
              </div>
            </div>


            {/* <EditLeadInformation initialData={rowData} /> */}
          { filteredItems ===undefined ? 
         <div className="">

            <Skeleton  count={7} className="w-4"/>
         </div>
           :
            <div className="table-responsive ">
              <div className=" react-table " >
                <DataTable
                customStyles={customStyles}
                  className="table-responsive"
                  columns={columns}
                  data={filteredItems}
                  pagination
                  selectableRowsHighlight
                  onSelectedRowsChange={handleSelectedRowsChange}
                  FixedHeader
                  fixedHeaderScrollHeight='450px'
                  selectableRows

                />
              </div>
          

            </div>}
          </div>
        </div>
      </div>
      <Reason />
    </>
  )
}

export default ListView 