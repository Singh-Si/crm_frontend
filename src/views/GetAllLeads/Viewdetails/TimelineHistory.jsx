import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import config from '../../../config';
import moment from 'moment';
function TimelineHistory() {
    const [data, setData] = React.useState([])
    var token = localStorage.getItem("token");
    const [activeStep, setActiveStep] = React.useState(0);

    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${config.API_URL}/history/get/${params.id}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            setData(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, [params.id, token]);
  return (
    <>
    <div className="col-xl-4">
                <div className="card dz-card" id="bootstrap-table2">
                    <div className="card-header flex-wrap d-flex justify-content-between">
                        <div>
                            <h4 className="card-title">Timeline History</h4>
                        </div>
                    </div>
                    <div class="card-body p-0">
                                <div id="DZ_W_TimeLine11" class="widget-timeline dz-scroll style-1 height470 my-4 px-4">
                                   {data && data.map((ele)=>{
                                    return (
                                        <>
                                        <ul class="timeline">
                                        <li>
                                            <div class="timeline-badge info">
                                            </div>
                                            <div class="timeline-panel">
                                                <span>{ele && ele.time}</span>
                                                <h6 class="mb-0">{ele && ele.action}</h6>
                                                <p className="mb-0">by {ele && ele.actionBy} {moment(ele && ele.date, 'DD-MM-YYYY').format('DD-MMM-YYYY')}</p>
                                                <p><bold>Updated Fields </bold>-{ele && ele.fieldsUpdated}
</p>
                                            </div>
                                        </li>  
                                    </ul>
                                        </>
                                    )
                                   })} 
                                    
                                </div>
                            </div>
                </div>
            </div>
    </>
  )
}

export default TimelineHistory