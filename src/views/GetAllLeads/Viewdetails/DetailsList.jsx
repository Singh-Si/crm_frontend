import React from 'react'
import Attachements from './Attachements'
import TimelineHistory from './TimelineHistory'
import UpcomingAndOverview from './Activities/UpcomingAndOverview'
import QuickActivities from './Activities/QuickActivities'
import MeetingsDetails from './MeetingDetails'

function DetailsList(props) {
   const receivedData = props && props.receivedData
   const followUpInfo = receivedData?.followUpInfo
   const Meetings = receivedData?.followUpInfo 
    return (
        <>
            <div className='row'>

                <div className="col-xl-8 col-md-8">
                    <div className="card dz-card" id="custom-tab">
                        <div className="tab-content border-0" id="myTabContent1">
                            <div className="tab-pane fade show active" id="DefaultTab1" role="tabpanel" aria-labelledby="home-tab1">
                                <div className="card-body pt-0">
                                    {/* Nav tabs */}
                                    <div className="custom-tab-1">
                                        <ul className="nav nav-tabs cst-tabs1 badge badge-success light">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#leadactivity"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i> Activity</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#leaddetails"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i>Overview</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#leadmeeting"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i>Meetings</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content border-0  dz-scroll height470 px-2">
                                            <div className="tab-pane fade show active" id="leadactivity" role="tabpanel">
                                                <div className="pt-4">
                                                    <div className="card border-0">
                                                        {/* <div className="card-header flex-wrap d-flex justify-content-between ">
                                                            <div>
                                                                <h4 className="card-title">Leads Details</h4>
                                                            </div>
                                                        </div> */}
                                                        <QuickActivities />
                                                            <UpcomingAndOverview />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="leaddetails">
                                                <div className="pt-4">
                                                    <div className='row'>
                                                        <div className='col-xl-12'>
                                                            <div className="card">
                                                                <div className="card-header flex-wrap d-flex justify-content-between ">
                                                                    <div>
                                                                        <h4 className="card-title">Leads Details</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body p-0">
                                                                    <div className='row'>
                                                                        <div className='col-xl-6'>
                                                                            <div className="card-body pb-0">
                                                                                <ul className="list-group list-group-flush">
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Lead Status</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.leadType}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Name</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.firstName} {receivedData && receivedData.lastName}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Lead Generated Time</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.time}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Lead Generated Date</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.date}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Email Id</strong>
                                                                                        <span className="mb-0"><a href={`${receivedData && receivedData.email}`} className='text-info'>{receivedData && receivedData.email}</a></span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>Phone No.</strong>
                                                                                        <span className="mb-0"><a href={`${receivedData && receivedData.phone}`}  className='text-info'>{receivedData && receivedData.phone}</a></span>
                                                                                    </li>
                                                                                   
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>Budget</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.budget}</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-xl-6'>
                                                                            <div className="card-body pb-0">
                                                                                <ul className="list-group list-group-flush">
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Lead Owner</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.leadCreatedBy && receivedData.leadCreatedBy.firstName} {receivedData && receivedData.leadCreatedBy && receivedData.leadCreatedBy.lastName}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>leadSource</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.leadSource}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Country</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.country}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Industry</strong>
                                                                                        <span className="mb-0">-</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>No. of Employees</strong>
                                                                                        <span className="mb-0"> - </span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>Lead Created Date</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.date}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>Lead Created Time</strong>
                                                                                        <span className="mb-0">{receivedData && receivedData.time}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>Address</strong>
                                                                                        <span className="mb-0"><a href="https://maps.app.goo.gl/pFxyJpmwaB5KBkyM6" target='_blank' className='text-info'>A-14/24, DLF Phase 1, Gurugram, Haryana 122002</a></span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                
                                                            <Attachements />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="leadmeeting">
                                                <div className="pt-4" >
                                                    <MeetingsDetails meetings={Meetings}/>

                                                    {/* <div className='row'>
                                                        <div className='col-xl-12'>
                                                            <div className="card">
                                                                <div className="card-header flex-wrap d-flex justify-content-between ">
                                                                    <div>
                                                                        <h4 className="card-title">Leads Name</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="p-0">
                                                                    <div className='row'>
                                                                        <div className='col-xl-4'>
                                                                            <div className="p-0 dz-scroll height500">

                                                                                <ul className="personal-info mting">
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>
                                                                                    <li className='border-bottom'><i class="fa-solid fa-calendar-week me-1 text-primary"></i> <strong>New Meeting</strong>
                                                                                        <p className='text-primary m-0'>Jul 28 02:00 PM - 03:00 PM</p>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-xl-8'>
                                                                            <div className="card-body pb-0 px-0 dz-scroll height500">
                                                                                <ul className="list-group list-group-flush">
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Lead Owner</strong>
                                                                                        <span className="mb-0">Ravindar Singh</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Website</strong>
                                                                                        <span className="mb-0"><a href="https://solistechnology.in/" className='text-info'>solistechnology.in/</a></span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Company</strong>
                                                                                        <span className="mb-0">BigLife Inc.</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                                        <strong>Industry</strong>
                                                                                        <span className="mb-0">Insurance</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>No. of Employees</strong>
                                                                                        <span className="mb-0">101 - 200</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>Lead Source</strong>
                                                                                        <span className="mb-0">Website</span>
                                                                                    </li>
                                                                                    <li className="list-group-item d-flex px-0 justify-content-between">
                                                                                        <strong>Address</strong>
                                                                                        <span className="mb-0"><a href="https://maps.app.goo.gl/pFxyJpmwaB5KBkyM6" target='_blank' className='text-info'>A-14/24, DLF Phase 1, Gurugram, Haryana 122002</a></span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <TimelineHistory />
            </div>
            
        </>
    )
}

export default DetailsList