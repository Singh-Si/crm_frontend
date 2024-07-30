import React from 'react'
import ClientQuickDetails from './ClientQuickDetails'
import { useLocation,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function StatusDetails(props) {
    const location = useLocation();
    const receivedData = location && location.state;

    const { userInfo } = useSelector((store) => store.userInfo) || " ";
    const UserInfo = userInfo && userInfo.payload && userInfo.payload
    const UserDetails = UserInfo && UserInfo.role && UserInfo.role[0]
    return (
        <>
            <div className='row'>
                <ClientQuickDetails />
                <div className="col-xl-8">
                    <div className="card dz-card" id="custom-tab">
                        <div className="tab-content border-0" id="myTabContent1">
                            <div className="tab-pane fade show active" id="DefaultTab1" role="tabpanel" aria-labelledby="home-tab1">
                                <div className="card-body pt-0">
                                    {/* Nav tabs */}
                                    <div className="custom-tab-1">
                                        <ul className="nav nav-tabs cst-tabs badge badge-success light">
                                            <li className="nav-item">
                                                <Link className="nav-link active" data-bs-toggle="tab" to="#taba"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i> Unqualified</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="tab" to="#tabb"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i> New</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="tab" to="#tabc"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i>  Working</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="tab" to="#tabd"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i> Nurturing</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" data-bs-toggle="tab" to="#tabe"><i class="fa-solid fa-arrows-rotate fs-11 me-2"></i> Converted</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content border-0">
                                            <div className="tab-pane fade show active" id="taba" role="tabpanel">
                                                <div className="pt-4">
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className='card-body pb-0'>
                                                                <ul className="list-group list-group-flush sts-mark">
                                                                    <li className="list-group-item d-flex px-0 py-0 justify-content-start" style={{ alignItems: "center" }}>
                                                                        <strong>Status</strong>
                                                                        <span className="mb-0 badge badge-success light border-0">Unqualified</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className='card-body pb-0'>
                                                                <button type="button" className="btn btn-success btn-sm grp-btn"><i className="fa-solid fa-check me-2" />Mark as Current Status</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className="card-body pb-0">
                                                                <ul className="list-group list-group-flush">
                                                                    <h5><strong>Key Feilds</strong></h5>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>Lead Source</strong>
                                                                        <span className="mb-0">{receivedData && receivedData.leadSource}</span>
                                                                    </li>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong> Lead Name</strong>
                                                                        <span className="mb-0">{receivedData && receivedData.firstName} {receivedData && receivedData.lastName}</span>
                                                                    </li>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>Is Completed</strong>
                                                                        <span className="mb-0">{receivedData && receivedData.isCompleted == false? <span>False</span>:<p>True</p>}</span>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className="card-body pb-0">
                                                                <h3>
                                                                    Guidance for Success
                                                                </h3>
                                                                <p>
                                                                    Keep track of the info related to your unqualified leads.

                                                                    Your lead may be unqualified if they are not interested in your products or they have left the company associated with the prospect.
                                                                </p>
                                                                <ul className='list-group list-group-flush sts-lst'>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Document lessons learned for future reference</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Save outreach details and contact information</li>


                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabb">
                                                <div className="pt-4">
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className='card-body pb-0'>
                                                                <ul className="list-group list-group-flush sts-mark">
                                                                    <li className="list-group-item d-flex px-0 py-0 justify-content-start" style={{ alignItems: "center" }}>
                                                                        <strong>Status</strong>
                                                                        <span className="mb-0 badge badge-success light border-0">New</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className='card-body pb-0'>
                                                                <button type="button" className="btn btn-success btn-sm grp-btn"><i className="fa-solid fa-check me-2" />Mark as Current Status</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className="card-body pb-0">
                                                                <ul className="list-group list-group-flush">
                                                                    <h5><strong>Key Feilds</strong></h5>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>Country</strong>
                                                                        <span className="mb-0">{receivedData && receivedData.country}</span>
                                                                    </li>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>State</strong>
                                                                        <span className="mb-0">{receivedData && receivedData.state}</span>
                                                                    </li>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>City</strong>
                                                                        <span className="mb-0">{receivedData && receivedData.city}</span>
                                                                    </li>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>No. of Employees</strong>
                                                                        <span className="mb-0">-</span>
                                                                    </li>



                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className="card-body pb-0">
                                                                <h3>
                                                                    Guidance for Success
                                                                </h3>
                                                                <strong>Determine which leads are qualified or unqualified.</strong>
                                                                <p>
                                                                    Keep track of the info related to your New leads.

                                                                    Your lead may be unqualified if they are not interested in your products or they have left the company associated with the prospect.
                                                                </p>
                                                                <ul className='list-group list-group-flush sts-lst'>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Assign the lead to a representative</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Gather key details on the lead from their company's website</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Create a plan to build a connection with this lead</li>


                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabc">
                                                <div className="pt-4">
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className='card-body pb-0'>
                                                                <ul className="list-group list-group-flush sts-mark">
                                                                    <li className="list-group-item d-flex px-0 py-0 justify-content-start" style={{ alignItems: "center" }}>
                                                                        <strong>Status</strong>
                                                                        <span className="mb-0 badge badge-success light border-0">Working</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className='card-body pb-0'>
                                                                <button type="button" className="btn btn-success btn-sm grp-btn"><i className="fa-solid fa-check me-2" />Mark as Current Status</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className="card-body pb-0">
                                                                <ul className="list-group list-group-flush">
                                                                    <h5><strong>Key Feilds</strong></h5>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>Title</strong>
                                                                        <span className="mb-0">{UserDetails && UserDetails.title}</span>
                                                                    </li>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong> Permissions </strong>
                                                                        {UserDetails && UserDetails.permission && UserDetails.permission.map((ele)=>{
                                                                            return (
                                                                                <span className='badge-success p-1 text-light'>{ele && ele.label}</span>
                                                                            )
                                                                        }) }
                                                                        {/* <span className="mb-0"><Link to="mailto:rakeshkumar@solistechnology.in" className='text-info'></Link></span> */}
                                                                    </li>
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className="card-body pb-0">
                                                                <h3>
                                                                    Guidance for Success
                                                                </h3>
                                                                <strong>Qualify promising leads.</strong>
                                                                <ul className='list-group list-group-flush sts-lst'>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Identify a contact for the lead</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Save their contact information to the lead record</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Make a plan for your outreach (For example, How many times will you reach out? What's your pitch?)</li>


                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabd">
                                                <div className="pt-4">
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className='card-body pb-0'>
                                                                <ul className="list-group list-group-flush sts-mark">
                                                                    <li className="list-group-item d-flex px-0 py-0 justify-content-start" style={{ alignItems: "center" }}>
                                                                        <strong>Status</strong>
                                                                        <span className="mb-0 badge badge-success light border-0">Nurturing</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className='card-body pb-0'>
                                                                <button type="button" className="btn btn-success btn-sm grp-btn"><i className="fa-solid fa-check me-2" />Mark Status as Complete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className="card-body pb-0">
                                                                <ul className="list-group list-group-flush">
                                                                    <h5><strong>Key Feilds</strong></h5>
                                                                    <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                                                        <strong>Rating (Lead Status)</strong>
                                                                        <span className="mb-0">Hot</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className="card-body pb-0">
                                                                <h3>
                                                                    Guidance for Success
                                                                </h3>
                                                                <strong>Nurture your leads and identify opportunities.</strong>
                                                                <ul className='list-group list-group-flush sts-lst'>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Identify pain points that you can solve for this lead</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Determine the likelihood of this lead converting</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>If this lead is qualified, convert it to an opportunity</li>
                                                                    <li className='list-group-item d-flex px-0 py-2'><i class="fa-solid fa-circle-dot"></i>Ensure that Marketing and Sales work together to develop your lead qualifying process</li>


                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tabe">
                                                <div className="pt-4">
                                                    <div className='row'>
                                                        <div className='col-xl-5'>
                                                            <div className='card-body pb-0'>
                                                                <ul className="list-group list-group-flush sts-mark">
                                                                    <li className="list-group-item d-flex px-0 py-0 justify-content-start" style={{ alignItems: "center" }}>
                                                                        <strong>Status</strong>
                                                                        <span className="mb-0 badge badge-success light border-0">Converted</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='col-xl-7'>
                                                            <div className='card-body pb-0'>
                                                                <button type="button" className="btn btn-success btn-sm grp-btn"><i className="fa-solid fa-check me-2" />Select Converted Status</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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

export default StatusDetails