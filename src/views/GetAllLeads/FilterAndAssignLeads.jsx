import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import config from '../../config';
import Swal from "sweetalert2";
import { fetctAllLead } from '../../redux/action/allleads/getalllead';
import { fetchLeadSource } from '../../redux/action/LeadSource/LeadSource';
function FilterAndAssignLeads(props) {
    const selectedLeads = props && props.selectedLeads
    const [selectedRowData, setSelectedRowData] = useState('')  //selected Rows Data
    var token = localStorage.getItem("token");
    useEffect(() => {
        setSelectedRowData(props.selectedData)
    }, [props.selectedData]);
    const leadsdata = props && props.filteredItems;
    const selectedData = props && props.selectedData;
    const [filterText, setFilterText] = React.useState("");
    const expectedLead = ['read', 'create'];
    const expectedManager = ['read', 'create', 'update'];
    const expectedAdmin = ['read', 'create', 'update', 'delete'];
    const sortAdmin = expectedAdmin.slice().sort();
    const sortData = expectedManager.slice().sort();
    const sortExpectedLead = expectedLead.slice().sort();
    const { userApi } = useSelector((store) => store) || " ";
    const { userInfo } = useSelector((store) => store.userInfo) || " ";
    const users = userApi && userApi.userInfo && userApi.userInfo.data;
    const currentUser = userInfo && userInfo.payload && userInfo.payload._id
    const userPermission = userInfo && userInfo.payload && userInfo.payload && userInfo.payload.role[0]?.permission;
    const sortedUserPermissions = userPermission.map(permission => permission.value).sort();
    const checkPermissionMatch = (permissions, expectedPermissions) => {
        const permissionValues = permissions.map((permission) => permission.value);
        return expectedPermissions.every((perm) => permissionValues.includes(perm)) && permissions.length === expectedPermissions.length;
    };
    const filteredItems = leadsdata && leadsdata.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
    );
    const accessLead = filteredItems && filteredItems.filter((ele) =>
        ele &&
        ele.users &&
        ele?.users?.some((item) => item.leadStatus === "ACCEPTED"));

    // Lead assignment by Admin
    const accessLeadByAdmin = filteredItems && filteredItems.filter((ele) =>
        ele.users.length === 0
    );
    const dispatch = useDispatch()
    const [ids, setIds] = useState('')
    const multiValues = selectedData && selectedData.map(obj => obj);
    const isEveryItemMatching = multiValues && multiValues.every((targetId) =>
        accessLead.some((item) => item._id && item._id.toString() === targetId)
    );
    const isEveryItemMatchingAsAdmin = multiValues && multiValues.every((targetId) =>
        accessLeadByAdmin.some((item) => item._id && item._id.toString() === targetId)
    );
    // Assign User List 
    const leadUsers = users && users.filter((user) =>
        checkPermissionMatch(user.role.permission, sortExpectedLead)
    );
    const managerUsers = users && users.filter((user) =>
        checkPermissionMatch(user.role.permission, sortData)
    );
    const adminUsers = users && users.filter((user) =>
        checkPermissionMatch(user.role.permission, sortAdmin)
    );
    const compairedAdmin = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortAdmin);
    const compairedData = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortData);


    // Check if the targetUserId exists in any of the leads
    const userExistsInLeads = selectedLeads && selectedLeads.some((lead) => {
        return lead.users.some((user) => user && user.id && user.id._id === ids);
    });

    //check Lead Assign to the User or not :
    const ExistsInLeads = selectedLeads && selectedLeads.some((lead) => {
        return lead.users.some((user) => user && user.id && user.id._id === currentUser);
    });
    const AssignByAdmin = compairedAdmin ? isEveryItemMatchingAsAdmin : isEveryItemMatching
    const multipleLead = users && users.filter((ele) => {
        // console.log(ele.role,'sortedmultipleLeads')
        const sortedmultipleLeads = ele && ele.role && ele.role.permission && ele.role.permission.map(permissions => permissions.value).sort()

        const permissionsLeadMatch = JSON.stringify(sortedmultipleLeads) === JSON.stringify(sortedUserPermissions);
        return permissionsLeadMatch;
    })
    const allUser = compairedAdmin ? managerUsers : compairedData ? managerUsers && managerUsers.concat(leadUsers) : multipleLead
    const filterAllUser = allUser && allUser.filter((ele) => ele._id != currentUser)
    const assignUser = async () => {
        try {
            const response = await axios.post(`${config.API_URL}/leadSource/leads/assign/multiple`, {
                leadIds: multiValues,
                userId: ids
            } ,   {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json", // Set the content type for file upload
                    // Add any other headers you need
                },
            }) 
        
            if (response.data.success) {
                dispatch(fetctAllLead(token))
                dispatch(fetchLeadSource(token));
                Swal.fire({
                    icon: "success",
                    title: "Woh...",
                    text: "Lead Assigned ",
                });
                
            } if (response.data.message == "There is no lead to assign!") {
                Swal.fire({
                    icon: "error",
                    text: "There is no lead to assign! ",

                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: error, // Access the error message from the response data
            });
        }
    }
    // checking ids which user have which Leads Ids :

    return (
        <>
            {/* <div className='card border-0'>
                <div className='card-body'>
                    <div className='row'> */}
            {/* <div className='col-xl-4'> */}
            {/* <form>
                                <div className="input-group border rounded-pill pdng">
                                    <input type="search" placeholder="Search Here...." aria-describedby="button-addon3" className="form-control bg-none border-0" />
                                    <div className="input-group-append border-0">
                                        <button id="button-addon3" type="button" className="btn btn-link text-success"><i className="fa fa-search" /></button>
                                    </div>
                                </div>
                            </form> */}
            {/* </div> */}
            <div className='col-xl-2'></div>
            {ExistsInLeads || compairedAdmin ? <div className='col-xl-6'>

                <div className='d-flex'>
                    <select className="default-select style-1 form-control asn-slt" onChange={(event) => setIds(event.target.value)}>
                        <option data-display="Select">--SELECT USER--</option>
                        {filterAllUser && filterAllUser.map((ele) => {
                            return (
                                <option key={ele._id} value={ele._id}>
                                    <p>{ele && ele.firstName} {ele && ele.lastName}</p>
                                    <p> ({ele && ele.email})</p> </option>
                            )
                        })}
                    </select>
                    <button className="btn btn-info w-25 rounded-pill" onClick={assignUser} disabled={userExistsInLeads ? true : false}>
                        <i className="fa-solid fa-share me-1"></i>Assign
                    </button>

                </div>
                {userExistsInLeads ? <small><strong className='text-danger'>*</strong> This lead is already assign to <span>user name</span></small> : ""}

            </div> : ""}
            {/* </div>
                </div>
            </div> */}
        </>
    )
}

export default FilterAndAssignLeads