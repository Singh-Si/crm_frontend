import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRecentLead } from '../../redux/action/dashboard/getRecentLead';
import empty_data_icon from '../../assets/images/empty_data_icon.png'

function RecentlyViewedLeads() {

    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    const data = useSelector((state)=>state?.getRecentLeadReducer?.userInfo?.data)
    useEffect(()=>{
        dispatch(getRecentLead(token))
    },[dispatch])
    return (
        <>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header pb-2">
                        <h4 className="card-title">Recently Viewed Leads</h4>
                    </div>
                    <div className="card-body p-0">
                        <div id="DZ_W_Todo1" className="widget-media dz-scroll height300 my-4 px-4">
                           
                           
                          { data?.length>0 ? 
                           <ul className="timeline">

                                {data && data.map((item)=>(

                                <li className='border-bottom'>
                                    <Link to='/lead-details'>
                                        <div className="timeline-panel">
                                            <div className="media me-2">
                                                <img alt="image" width={50} src="images/avatar/1.jpg" />
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mb-1 text-primary"></h5>
                                                <small className="d-block">{item.createdDate}</small>
                                            </div>
                                        </div>
                                        <ul className="list-group list-group-flush rcntly-leads p-2">
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <span>{item.company}</span>
                                                <span className="mb-0">{item.fullName}</span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <span>{item.title}</span>
                                                <span className="mb-0">Senior VP</span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <span>Phone No.</span>
                                                <span className="mb-0">{item.number}</span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <span>{item.email}</span>
                                                <span className="mb-0">example@example.com</span>
                                            </li>
                                        </ul>

                                    </Link>
                                </li>
                                )) 
                          
                                
                                }
     
                            </ul> 
                            : 
                            <div className='text-center'>
                                    <img src={empty_data_icon} width={200}/>
                                  </div> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentlyViewedLeads