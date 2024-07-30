import ProgressBar from '@ramonak/react-progress-bar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTopUsers } from '../../redux/action/dashboard/getTopuser';
import empty_data_icon from '../../assets/images/empty_data_icon.png'
import config from '../../config';

function TopUsers() {

    
    var token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const topUser = useSelector((state) => state?.getTopUsersReducer?.userInfo?.data?.top5Users)

    useEffect(() => {
        dispatch(getTopUsers(token))
    }, [])
    return (
        <>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header pb-2">
                        <h4 className="card-title">Top 5 Users</h4>
                    </div>
                    <div className="card-body p-0">
                        <div id="DZ_W_Todo1" className="widget-media dz-scroll height200 my-4 px-4">
                            <ul className="timeline">

                                {topUser?.length > 0 ? topUser?.map((item) => (

                                    <li className='border-bottom pb-5 my-2'>
                                        <Link to=''>
                                            <div className="timeline-panel">
                                                <div className="media me-2">
                                                    {item?.profilePic ? <img alt="image" width={50} src={`${config.API_URL}/uploads/${item.profilePic}`} />
                                                        :
                                                        <img alt="image" width={50} src="/images/avatar.png" />
                                                    }
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="mb-1 capitalize">{item.userName} </h5>

                                                </div>
                                                <div className='badge light badge-danger badge-sm'>Hot Lead's<sup className='bg-warning htlds'>{item.hotLeadsCount}</sup></div>
                                            </div>
                                            <div className='px-2'>
                                                <small className="d-block">Lead's Conversion <span className='badge light badge-success badge-sm'>{item.convertedLeads == null ?  'NO' :item.convertedLeads  }</span></small>
                                                <ProgressBar className='pt-2'  completed={item && item.conversionRate && item.conversionRate.toFixed(0)} labelSize={11} bgColor={"#88a67e"} />
                                                <strong className="d-block hprgbar">{item.assignedLeads}</strong>
                                            </div>
                                        </Link>
                                    </li>
                                )) :
                                    <div className='text-center'>
                                        <img src={empty_data_icon} width={200} />
                                    </div>
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopUsers