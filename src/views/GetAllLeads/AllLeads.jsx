import React, { useState } from 'react'
import TitleBreadCrumb from '../../components/TitleBreadCrumb'
import CardView from './CardView'
import ListView from './ListView'
import EditLeadInformation from './EditLeadInformation'
import Swal from "sweetalert2";
import config from '../../config'
import axios from 'axios'
import Filter from './Filter/Filter'
import ImportLead from './Filter/Filter/ImportLead'

import InteligenceView from './InteligenceView'
import FilterAndAssignLeads from './FilterAndAssignLeads'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLeadSource } from '../../redux/action/LeadSource/LeadSource'
import { fetctAllLead } from '../../redux/action/allleads/getalllead'
import { useEffect } from 'react'

function AllLeads() {
  const [selectDeleteData, setselectDeleteData] = useState('');
  const [data, setData] = useState(null);
  const expectedAdmin = ['read', 'create', 'update', 'delete'];
  const { userInfo } = useSelector((store) => store.userInfo) || " ";
const userPermission = userInfo && userInfo.payload && userInfo.payload && userInfo.payload.role && userInfo.payload.role[0] && userInfo.payload.role[0].permission;

  const dispatch = useDispatch();
  const handleDeleteData = (data) => {
    setselectDeleteData(data);
  };
  const token = localStorage.getItem("token")

  const handleDelete = async (selectDeleteData) => {
    /* eslint-disable no-restricted-globals */
    var confirmation = confirm("Are you sure you want to delete?");
    if (confirmation) {
      const data = selectDeleteData;

      try {

        const response = await axios.post(`${config.API_URL}/leadSource/leads/delete`, data, {
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
          }
          );
            dispatch(fetchLeadSource(token));
            dispatch(fetctAllLead(token))
            
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Somthing wrong",
        });

      }
    } else {

    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(`${config.API_URL}/download`);
      const blob = await response.blob();

      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'LeadSampleData.xlsx';

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }; 

  const leadsData = useSelector((store)=>store?.fetchAllLeadReducer?.userInfo?.data?.lead_data)
  // console.log(leadsData,"nnnn")

  useEffect(()=>{
  
  },[])

  const propsData = (propsData) => {
    setData(propsData)
  }
  return (
    <>
      <div className='page-titles'>
        <TitleBreadCrumb title="All Leads" />
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-xl-12">
            <div className=" dz-card" id="bootstrap-table2">
              <InteligenceView />
           {/* <FilterAndAssignLeads   filteredItems={filteredItems} selectedData={selectedData} selectedLeads={selectedLeads} />  */}
              <div className="card-header flex-wrap d-flex justify-content-between ">
                <div className='assn-lds'>
                  {/* <h4 className="card-title">All Leads</h4> */}

                </div>
                <Filter />
                <ImportLead />
                <ul className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                <button type="button" class="btn btn-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#filter"><i class="fa-solid fa-magnifying-glass me-2"></i>Filter</button>
                  <button type="button" class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#importlead"><i class="fa-solid fa-upload me-2"></i>Import</button>
                  <button type="button" class="btn btn-info btn-sm me-1" onClick={handleDownload}><i class="fa-solid fa-download me-2" ></i>Export</button>
                  {selectDeleteData && selectDeleteData.length > 0 && <button type="button" class="btn btn-danger btn-sm me-1" onClick={() => { handleDelete(selectDeleteData) }}><i class="fa-solid fa-trash me-2"></i>Delete</button>}
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#Preview" type="button" role="tab" aria-selected="true">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.8335 5.5H17.6668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6.8335 10.5H17.6668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6.8335 15.5H17.6668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M2.66699 5.5H2.67699" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M2.66699 10.5H2.67699" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M2.66699 15.5H2.67699" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#html" type="button" role="tab" aria-controls="html" aria-selected="false">
                      <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.50032 3H2.66699V8.83333H8.50032V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17.6668 3H11.8335V8.83333H17.6668V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17.6668 12.1667H11.8335V18H17.6668V12.1667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.50032 12.1667H2.66699V18H8.50032V12.1667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="Preview" role="tabpanel" aria-labelledby="home-tab">
                  <ListView style={{ zIndex: "1" }} propsData={propsData} setrowToDelete={handleDeleteData} leadsData={leadsData} />
                </div>
                <div className="tab-pane fade " id="html" role="tabpanel" aria-labelledby="home-tab">
                  <CardView propsData={propsData} leadsData={leadsData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditLeadInformation initialData={data} />
    </>
  )
}

export default AllLeads