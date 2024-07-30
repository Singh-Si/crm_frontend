import React from 'react'
import moment from 'moment';
import { useLocation } from 'react-router-dom';
function ClientQuickDetails() {
    const location = useLocation();
const receivedData = location && location.state
console.log(receivedData,'receivedData')
    return (
        <>
            <div className='col-xl-4'>
                <div className="card">

                    <div className="card-body p-0">
                        <div className="card-header border-0 pb-0">
                            <h4 className="card-title">
                                <div className="d-flex align-items-center">
                                    <img src="images/avatar/1.jpg" className="rounded-lg me-2" width={24} alt="" />
                                    <span className="w-space-no"><bold>{receivedData && receivedData.company && receivedData.company.company}</bold></span>
                                </div>

                            </h4>
                        </div>
                        <div className='btn-group sts-grp-btn'>
                            <button type="button" className="btn btn-info btn-sm me-1"><i className="fa-solid fa-pencil me-2" />Edit</button>
                            <button type="button" className="btn btn-danger btn-sm me-1"><i className="fa-solid fa-trash me-2" />Delete</button>
                            {/* <button type="button" className="btn btn-warning btn-sm me-1"><i className="fa-regular fa-clone me-2" />Clone</button>
                            <button type="button" className="btn btn-success btn-sm me-1"><i className="fa-solid fa-arrows-rotate me-2" />Convert</button> */}
                        </div>
                        <div id="DZ_W_TimeLine11" className="widget-timeline dz-scroll style-1 height270 my-4 px-4">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-badge primary" />
                                    <div className="timeline-panel d-flex justify-content-between">
                                        <strong>Company Registered Date </strong>
                                        <span className="mb-0 fs-14 opcty badge badge-warning light border-0">{moment.utc(receivedData && receivedData.company && receivedData.company.createdAt).format("MMM Do, YYYY") }</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-badge info">
                                    </div>
                                    <div className="timeline-panel d-flex justify-content-between">
                                        <strong >Company Email</strong>
                                        <span className="mb-0 fs-14 opcty badge badge-primary light border-0">{receivedData && receivedData.company && receivedData.company.email}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-badge danger">
                                    </div>
                                    <div className="timeline-panel d-flex justify-content-between">
                                        <strong >Plan Purchased On</strong>
                                        <span className="mb-0 fs-14 opcty"><a href='#' disabled className='text-info badge badge-success light border-0'>{moment.utc(receivedData && receivedData.company && receivedData.company.PurchasedOn).format("MMM Do, YYYY") }</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-badge success">
                                    </div>
                                    <div className="timeline-panel d-flex justify-content-between">
                                        <strong >Plan Expired On</strong>
                                        <span className="mb-0 fs-14 opcty"><a href='mailto:xyz@solistechnology.in' className='text-info badge badge-danger light border-0'>{moment.utc(receivedData && receivedData.company && receivedData.company.expireOn).format("MMM Do, YYYY") }</a></span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ClientQuickDetails