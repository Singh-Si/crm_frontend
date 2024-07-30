import React from 'react'
import OpenActivities from './OpenActivities'
import ClosedActivities from './ClosedActivities'

function UpcomingAndOverview() {
    return (
        <>
            <div className="accordion accordion-primary" id="accordion-one">
                <div className="accordion-item">
                    <div className="accordion-header  rounded-lg" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="true" role="button">
                        <span className="accordion-header-icon" />
                        <span className="accordion-header-text"><strong>Upcoming & Overdue</strong></span>
                        <span className="accordion-header-indicator" />
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-one">
                        <div className="accordion-body-text  dz-scroll height250">
                            <ul className="timeline1">

                                <li className="timeline-inverted1">
                                    <div className="timeline-badge1 bg-primary">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    </div>
                                    <div className="timeline-panel1">
                                        <div className='d-flex justify-content-between'>
                                        <div className="timeline-heading">
                                            <h5 className="timeline-title1">Try to call Jim on Thurs (Sample)</h5>
                                            <p>You have an upcoming task</p>
                                        </div>
                                        <span className='text-warning'>03:28 PM</span>
                                        </div>
                                        <div className="timeline-body1">
                                        <textarea className="form-txtarea form-control" readOnly rows={2} id="comment" placeholder='Description' />
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted1">
                                    <div className="timeline-badge1 bg-warning">
                                    <i class="fa-solid fa-list-check"></i>
                                    </div>
                                    <div className="timeline-panel1">
                                    <div className='d-flex justify-content-between'>
                                        <div className="timeline-heading">
                                            <h5 className="timeline-title1">Called Jim, left a vm (Sample)</h5>
                                            
                                            <p>You had a task</p>
                                        </div>
                                        <span className='text-warning'>03:28 PM</span>
                                        </div>
                                        <div className="timeline-body1">
                                        <textarea className="form-txtarea form-control" readOnly rows={2} id="comment" placeholder='Description' />
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted1">
                                    <div className="timeline-badge1 bg-info">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    </div>
                                    <div className="timeline-panel1">
                                        <div className='d-flex justify-content-between'>
                                        <div className="timeline-heading">
                                            <h5 className="timeline-title1">Try to call Jim on Thurs (Sample)</h5>
                                            
                                            <p>You have an upcoming task</p>
                                        </div>
                                        <span className='text-warning'>03:28 PM</span>
                                        </div>
                                        <div className="timeline-body1">
                                        <textarea className="form-txtarea form-control" readOnly rows={2} id="comment" placeholder='Description' />
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted1">
                                    <div className="timeline-badge1 bg-danger">
                                    <i class="fa-solid fa-list-check"></i>
                                    </div>
                                    <div className="timeline-panel1">
                                        <div className='d-flex justify-content-between'>
                                        <div className="timeline-heading">
                                            <h5 className="timeline-title1">Called Jim, left a vm (Sample)</h5>
                                            
                                            <p>You had a task</p>
                                        </div>
                                        <span className='text-warning'>03:28 PM</span>
                                        </div>
                                        <div className="timeline-body1">
                                        <textarea className="form-txtarea form-control" readOnly rows={2} id="comment" placeholder='Description' />
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header collapsed rounded-lg" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo" role="button" aria-expanded="true">
                        <span className="accordion-header-text"><strong>Open Activities</strong></span>
                        <span className="accordion-header-indicator" />
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-one">
                    <div className="accordion-body-text  dz-scroll height250">
                            <OpenActivities />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header collapsed rounded-lg" id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree" role="button" aria-expanded="true">
                        <span className="accordion-header-text"><strong>Closed Activities</strong></span>
                        <span className="accordion-header-indicator" />
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-one">
                    <div className="accordion-body-text  dz-scroll height250">
                            <ClosedActivities />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpcomingAndOverview