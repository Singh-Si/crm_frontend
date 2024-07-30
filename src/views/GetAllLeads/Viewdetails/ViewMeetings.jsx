import React from 'react'

const ViewMeetings = (props) => {
    const meetingData = props.meetingData 
    console.log(meetingData ,"meetingData")
    return (
       
            <div className="col-sm-8">
                <div className="tab-content dz-scroll height500">
                    <div id="m1-tab" className="tab-pane fade active show">
                        <div className="card-body pb-0 px-0 dz-scroll height500">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                    <strong>Subject</strong>
                                    <span className="mb-0">{meetingData?.subject}</span>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                    <strong>Purpose</strong>
                                    <span className="mb-0"><a href="https://solistechnology.in/" className='text-info'>{meetingData?.purpose}</a></span>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                    <strong>Completion Date and Time  </strong>
                                    <span className="mb-0">{meetingData?.completionDate} & {meetingData?.completionTime}</span>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between  cst-bdr">
                                    <strong>Location</strong>
                                    <span className="mb-0"><a href="https://maps.app.goo.gl/pFxyJpmwaB5KBkyM6" target='_blank' className='text-info'>{meetingData?.location}</a></span>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                    <strong>Notes </strong>
                                    <span className="mb-0">{meetingData?.notes}</span>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between cst-bdr">
                                    <strong>Meeting Highlight </strong>
                                    <span className="mb-0">{meetingData?.meetingHighlight}</span>
                                </li>
                               
                                




                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
       
    )
}

export default ViewMeetings