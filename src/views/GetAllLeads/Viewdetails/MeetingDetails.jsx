import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ViewMeetings from './ViewMeetings';

function MeetingsDetails(props) {

        const meeting = props.meetings
        const[meetingData , setMeetingData] = useState(meeting[0]);
        console.log(meeting, "meeting",meetingData)


        const handleClick = (e)=>{
            setMeetingData(e)
        }
        useEffect(() => {
            setMeetingData((props.meetings)[0]);
        }, [props.meetings]);
    
   
    return (
        <>
         {
         meetingData === undefined ? 
                <div className='text-center'>
                    <span>No Meeting Schedule</span>
                </div>
                : 
            <div className="row">
                <div className="col-sm-4 dz-scroll height500">
                    <div className="nav flex-column nav-pills mb-3 mtngtabs mting">
                        { meeting && meeting?.map((item,index) => {
                            const isActive = index === 0 ? 'active' : '';
                            return (
                                <Link to="#m1-tab" data-bs-toggle="pill" className={`nav-link ${isActive}`} onClick={()=>handleClick(item)}>
                                    <li><strong>New Meeting</strong>
                                        <p className='fs-13 m-0'>{item.targetDate} - {item.targetTime}</p>
                                    </li>
                                </Link>
                            )
                        })}

                       
                       
                    </div>
                </div>

               
                <ViewMeetings meetingData={meetingData} />
            
            </div>

        }
        </>
    )
}

export default MeetingsDetails