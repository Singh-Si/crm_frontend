import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTopHotLead } from '../../redux/action/dashboard/gettophotlead'
import { useDispatch, useSelector } from 'react-redux';
import EditLeadInformation from '../GetAllLeads/EditLeadInformation';
import { getTopUsers } from '../../redux/action/dashboard/getTopuser';
import { fetchTodayLead } from '../../redux/action/TodayLead/TodayLead';
import axios from 'axios';
import config from '../../config';
import Swal from 'sweetalert2';
import empty_data_icon from '../../assets/images/empty_data_icon.png';

function TopHotLeads() {

    const [tophotlead, setassign] = useState([]);
    let token = localStorage.getItem("token");
    const TopHotLead = async () => {

        try {
            const response = await axios.get(
                (`${config.API_URL}/dashboard/top/hot`),
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setassign(response?.data?.data)

        } catch (error) {
        }
    }
    useEffect(() => {

        TopHotLead();

    }, [])

    return (
        <>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header pb-2">
                        <h4 className="card-title">Top Hot Leads</h4>
                    </div>
                    {tophotlead && tophotlead?.length > 0 ? <div className="card-body p-0">
                        <div id="DZ_W_Todo1" className="widget-media dz-scroll height300 my-4 px-4">
                            <ul className="timeline">

                                {tophotlead && tophotlead.map((item) =>
                                (
                                    <li>
                                        <Link to={`/leads/${item._id}`}>
                                            <div className="timeline-panel">
                                                <div className="media me-2 mt-2">
                                                    <img alt="image" width={50} src="/images/avatar.png" />
                                                </div>
                                                <div className="media-body">
                                                    <h5 className=" capitalize ">{item && item.firstName} {item && item.lastName} </h5>
                                                    {/* <small className="mt-2 d-block">Created At : {item?.createdDate}</small> */}
                                                </div>
                                                <div className="media-body mb-2">
                                                    <h5 className="mb-1 capitalize badge badge-primary light border-0 ms-1 m-1 capitalize">  Budget : {item.budget} </h5>
                                                    <small className="d-block"> {item?.email}</small>
                                                </div>

                                            </div>
                                        </Link>
                                    </li>
                                ))}



                            </ul>
                        </div>
                    </div> :
                        <div className='text-center'>
                            <img src={empty_data_icon} width={200} />
                        </div>}
                </div>
            </div>
            <EditLeadInformation />
        </>
    )
}

export default TopHotLeads