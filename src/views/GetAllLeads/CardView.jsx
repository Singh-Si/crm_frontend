import React, { useEffect } from 'react'
import InteligenceView from './InteligenceView'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeadSource } from '../../redux/action/LeadSource/LeadSource';
import { useState } from 'react';
import FilterAndAssignLeads from './FilterAndAssignLeads';
import { Link } from 'react-router-dom';

function CardView(props) {
    const { LeadSource } = useSelector((state) => state);
    const [filterText, setFilterText] = React.useState("");
    const leadSource = LeadSource && LeadSource.userInfo && LeadSource.userInfo.data;
    const filteredItems = leadSource && leadSource.filter(
        item => item.isTrashed != true && JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    );
    const dispatch = useDispatch();
    const [selectedData, setSelectedData] = useState(null);

    const MAX_NAME_LENGTH = 12;

    const getLimitedName = (name) => {
        if (name && name?.length > MAX_NAME_LENGTH) {
            return name?.substring(0, MAX_NAME_LENGTH) + '...';
        }
        return name;
    };

    function formatDate(dateString) {
        const dateObject = new Date(dateString);

        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObject.getDate().toString().padStart(2, '0');
        const year = dateObject.getFullYear();

        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
    }

    const handleCardView = (val) => {
        props?.propsData(val);
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        dispatch(fetchLeadSource(token));
    }, [])

    return (
        <div className='row'>
            <div className='col-xl-12'>

                <div className='card border-0'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-xl-4'>
                                <form>
                                    <div className="input-group border rounded-pill pdng">
                                        <input type="search" placeholder="Search here.." aria-describedby="button-addon3" className="form-control bg-none border-0 ml-4" onChange={(e) => setFilterText(e.target.value)}
                                            filterText={filterText} />
                                        <div className="input-group-append border-0">
                                            <button id="button-addon3" type="button" className="btn btn-link text-success"><i className="fa fa-search" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* <FilterAndAssignLeads filteredItems={filteredItems}  /> */}

                        </div>
                    </div>
                </div>
                {/* <InteligenceView />
                <FilterAndAssignLeads/> */}
            </div>

            {filteredItems && filteredItems?.map((val, userIndex) => {
                return <div key={userIndex} className="col-xl-4  col-lg-6">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            <h4 className="card-title">
                                <div className="d-flex align-items-center">
                                    {/* <img src="images/avatar/1.jpg" className="rounded-lg me-2" width={24} alt="" /> */}

                                    <Link to={`/leads/${val._id}`}>  <span className="w-space-no ">
                                        {/* {(val?.firstName)} {getLimitedName(val?.lastName)} */}
                                        {/* {getLimitedName((val?.firstName)(val?.lastName))} */}
                                        {getLimitedName(val?.firstName) + ' ' + getLimitedName(val?.lastName)}
                                    </span></Link>
                                </div>
                            </h4>
                            <span>
                                <div className="d-flex">
                                    <a
                                        // to="#EditLead"
                                        // onClick={() => setSelectedData(val)}
                                        onClick={() => handleCardView(val)}
                                        data-bs-toggle="offcanvas"
                                        href="#EditLead"
                                        aria-controls="EditLead"
                                        className="btn btn-primary shadow btn-xs sharp me-1"
                                        title='Edit'
                                    >
                                        <i className="fa fa-pencil" />
                                    </a>
                                </div>
                            </span>
                        </div>

                        <div className="card-body p-0">
                            <div id="DZ_W_TimeLine" className="widget-timeline dz-scroll height370 my-4 px-2">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-badge primary" />
                                        <div className="timeline-panel " >
                                            <h6 className="mb-0">Email</h6>
                                            <strong className="text-primary">{val && val.email ? val?.email : "No Email"}</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-badge info">
                                        </div>
                                        <div className="timeline-panel " >
                                            <h6 className="mb-0">Phone</h6>
                                            <strong className="text-primary">{val && val.phone ? val?.phone : "No phone"}</strong>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="timeline-badge success">
                                        </div>
                                        <div className="timeline-panel " >
                                            <h6 className="mb-0">Lead Source</h6>
                                            <strong className="text-primary text-capitalize">{val && val.leadSource ? val?.leadSource : "No Lead Source"}</strong>
                                        </div>
                                    </li>

                                    {/* <li>
                                        <div className="timeline-badge danger">
                                        </div>
                                        <div className="timeline-panel " >
                                            <h6 className="mb-0">Lead Status</h6>

                                            <strong className="text-primary"> {val?.users?.map((item, userIndex) => (
                                                <div key={userIndex}>


                                                    {item?.leadStatus == "ACCEPTED" ?
                                                        <div>
                                                            <span className="badge badge-info light border-0">Inprogress</span>
                                                        </div> : item.leadStatus == "PENDING" ? <><button type='button' className='badge badge-success light border-0 me-1'>
                                                            <i class="fa-solid fa-check me-1"></i>Accept</button>
                                                            <button type='button' className='badge badge-danger light border-0'>
                                                                <i class="fa-solid fa-ban me-1"></i>Reject</button>
                                                        </> : item.leadStatus == "REJECTED" ? <button type='button' className='badge badge-danger light border-0'>
                                                            <i class="fa-solid fa-ban me-1"></i>Rejected</button> : <span className="badge badge-warning light border-0"><i class="fa-solid fa-not-equal me-1"></i>Not-Assigned</span>
                                                    }
                                                </div>
                                            ))}</strong>
                                        </div>
                                    </li> */}

                                    <li>
                                        <div className="timeline-badge warning">
                                        </div>
                                        <div className="timeline-panel " >
                                            <h6 className="mb-0">Last Activity</h6>
                                            <strong className="text-primary">{formatDate(val?.updatedAt)}</strong>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="timeline-badge warning">
                                        </div>
                                        <div className="timeline-panel " >
                                            <h6 className="mb-0">Budget</h6>
                                            <strong className="text-primary">{val && val.budget ? val?.budget : "No Email"}</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CardView 