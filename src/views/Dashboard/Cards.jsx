import React, { useEffect, useState } from 'react'
import TitleBreadCrumb from '../../components/TitleBreadCrumb'
import { useDispatch, useSelector } from 'react-redux';
import { fetctAllLead } from '../../redux/action/allleads/getalllead';
import { dashboardcards } from '../../redux/action/DashboardCards/dashboardcards'

const   Cards = React.memo((props) =>{
  const selectedValue = props?.selectValue  || 'today';
  const dispatch = useDispatch();
  var token = localStorage.getItem("token")
  const data = useSelector((state) => state?.fetchCardReducer?.userInfo)

  useEffect(() => {
   dispatch(dashboardcards(token , selectedValue ));
  }, [selectedValue ])

    
  return (
    <>


       <div className='row'>

        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-warning">
            <div className="card-body p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M0 24C0 10.7 10.7 0 24 0h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24zm0 464c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm211.2-328c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zM32 320c0-35.3 28.7-64 64-64h96c12.2 0 23.7 3.4 33.4 9.4-37.2 15.1-65.6 47.2-75.8 86.6H64c-17.7 0-32-14.3-32-32zm461.6 32c-10.3-40.1-39.6-72.6-77.7-87.4 9.4-5.5 20.4-8.6 32.1-8.6h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32h-82.4zm-102.4-61.6c32.1 7.4 58.1 30.9 68.9 61.6 3.5 10 5.5 20.8 5.5 32 0 17.7-14.3 32-32 32h-224c-17.7 0-32-14.3-32-32 0-11.2 1.9-22 5.5-32 10.5-29.7 35.3-52.8 66.1-60.9 7.8-2.1 16-3.1 24.5-3.1h96c7.4 0 14.7.8 21.6 2.4zm172-130.4c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-241.6 96c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />

                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">UnAssigned Lead</p>
                  <h3 className="text-white">{(data?.unassignedLeads)?.length || 0  }</h3>
                  
                  <h3 className="text-white"></h3>

                  <div className="progress mb-2 bg-primary">
                    <div className="progress-bar progress-animated bg-white"  style={{ width: `${(((data?.unassignedLeads)?.length) * 100) / (data?.totalLeads)?.length}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-info ">
            <div className="card-body p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M41 7C31.6-2.3 16.4-2.3 7 7s-9.3 24.6 0 34l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L41 7zm558 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9S608.3-2.4 599 7zM7 505c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9zm592 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72zM320 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-107.9 80c-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24-.5-1.4-1-2.7-1.6-4-9.4-22.3-29.8-38.9-54.3-43-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-.8.1-1.7.3-2.5.5-24.9 5.1-45.1 23-53.4 46.5zm-36.3-112c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-26.5 32c-29.4 0-53.3 23.9-53.3 53.3 0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4zm368 80c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6h56.1zM464 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Assigned Lead</p>
                  <h3 className="text-white">{(data?.assignedLeads)?.length || 0}</h3>
                  <div className="progress mb-2 bg-secondary">
                    <div className="progress-bar progress-animated bg-white" style={{ width: `${(((data?.assignedLeads)?.length) * 100) / (data?.totalLeads)?.length}%` }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-secondary">
            <div className="card-body p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M211.2 96c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64h-96c-11.7 0-22.7 3.1-32.1 8.6 38.1 14.8 67.4 47.3 77.7 87.4zm-102.4-61.6c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1-30.8 8.1-55.6 31.1-66.1 60.9-3.5 10-5.5 20.8-5.5 32 0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32 0-11.2-1.9-22-5.5-32-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zm-241.6 96c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />

                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Clients</p>
                  <h3 className="text-white">{(data?.clients)?.length || 0}</h3>
                  <div className="progress mb-2 bg-primary">
                    <div className="progress-bar progress-animated bg-white"  style={{ width: `${(((data?.clients)?.length) * 100) / (data?.totalLeads)?.length}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-primary">
            <div className="card-body  p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M48 48h88c13.3 0 24-10.7 24-24S149.3 0 136 0H32C14.3 0 0 14.3 0 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V48zm127.8 176c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-26.5 32c-29.4 0-53.3 23.9-53.3 53.3 0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4zm368 80c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-26 4.4-47.3 22.7-55.9 47-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24zM464 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-80-32c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464v-88c0-13.3-10.7-24-24-24S0 362.7 0 376v104c0 17.7 14.3 32 32 32h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h-88z" />
                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Total Lead</p>
                  <h3 className="text-white">{(data?.totalLeads)?.length || 0   }</h3>
                  <div className="progress mb-2 bg-secondary">
                    <div className="progress-bar progress-animated bg-white" style={{ width: `${(data?.totalLeads)?.length==0 ? "0" : "100%"} `}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-dark">
            <div className="card-body  p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M48 48h88c13.3 0 24-10.7 24-24S149.3 0 136 0H32C14.3 0 0 14.3 0 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V48zm127.8 176c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-26.5 32c-29.4 0-53.3 23.9-53.3 53.3 0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4zm368 80c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-26 4.4-47.3 22.7-55.9 47-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24zM464 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-80-32c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464v-88c0-13.3-10.7-24-24-24S0 362.7 0 376v104c0 17.7 14.3 32 32 32h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h-88z" />
                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Cold Lead</p>
                  <h3 className="text-white">{(data?.coldLeads)?.length || 0   }</h3>
                  <div className="progress mb-2 bg-secondary">
                    <div className="progress-bar progress-animated bg-white"  style={{ width: `${(((data?.coldLeads)?.length) * 100) / (data?.totalLeads)?.length}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-primary">
            <div className="card-body  p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M48 48h88c13.3 0 24-10.7 24-24S149.3 0 136 0H32C14.3 0 0 14.3 0 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V48zm127.8 176c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-26.5 32c-29.4 0-53.3 23.9-53.3 53.3 0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4zm368 80c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-26 4.4-47.3 22.7-55.9 47-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24zM464 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-80-32c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464v-88c0-13.3-10.7-24-24-24S0 362.7 0 376v104c0 17.7 14.3 32 32 32h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h-88z" />
                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Warm Lead</p>
                  <h3 className="text-white">{(data?.warmLeads)?.length || 0   }</h3>
                  <div className="progress mb-2 bg-secondary">
                    <div className="progress-bar progress-animated bg-white" style={{ width: `${(((data?.warmLeads)?.length) * 100) / (data?.totalLeads)?.length}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-warning">
            <div className="card-body  p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M48 48h88c13.3 0 24-10.7 24-24S149.3 0 136 0H32C14.3 0 0 14.3 0 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V48zm127.8 176c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-26.5 32c-29.4 0-53.3 23.9-53.3 53.3 0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4zm368 80c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-26 4.4-47.3 22.7-55.9 47-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24zM464 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-80-32c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464v-88c0-13.3-10.7-24-24-24S0 362.7 0 376v104c0 17.7 14.3 32 32 32h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h-88z" />
                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Hot Lead</p>
                  <h3 className="text-white">{(data?.hotLeads)?.length || 0   }</h3>
                  <div className="progress mb-2 bg-secondary">
                    <div className="progress-bar progress-animated bg-white"  style={{ width: `${(((data?.hotLeads)?.length) * 100) / (data?.totalLeads)?.length}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-danger ">
            <div className="card-body p-3">
              <div className="media">
                <span className="me-2">
                  <svg
                    viewBox="0 0 640 512"
                    fill="none"
                    width={32} height={32}
                  >
                    <path fill="#fff" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L440.6 320h178.1c11.8 0 21.3-9.6 21.3-21.3 0-58.9-47.8-106.7-106.7-106.7h-42.6c-15.9 0-31 3.5-44.6 9.7 1.3 7.2 1.9 14.7 1.9 22.3 0 30.2-10.5 58-28 79.9l-25.2-19.7c13.3-16.5 21.2-37.4 21.2-60.2 0-53-43-96-96-96-31.1 0-58.7 14.8-76.3 37.7l-40.6-31.8c13-14.2 20.9-33.1 20.9-53.9 0-44.2-35.8-80-80-80-27.7 0-52.1 14.1-66.5 35.5L38.8 5.1zM106.7 192C47.8 192 0 239.8 0 298.7 0 310.4 9.6 320 21.3 320h214.1c-20.6-18.2-35.2-42.8-40.8-70.8L121.8 192h-15.1zm154.6 160C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h330.6c10.5 0 19.5-6 23.9-14.8L324.9 352h-63.6zM512 160c44.2 0 80-35.8 80-80S556.2 0 512 0s-80 35.8-80 80 35.8 80 80 80z" />
                  </svg>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Lost Lead</p>
                  <h3 className="text-white">{(data?.lostLeads)?.length || 0} </h3>
                  <div className="progress mb-2 bg-secondary">
                    <div className="progress-bar progress-animated bg-white" style={{ width: `${(((data?.lostLeads)?.length) * 100) / (data?.totalLeads)?.length}%` }}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
)
export default Cards