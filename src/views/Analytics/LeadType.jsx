import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { LeadTypedata } from '../../redux/action/DashboardCards/LeadType';
function LeadType() {
    const dispatch = useDispatch();
    const leadTypeData = useSelector(state => state?.leadTypeData?.userInfo?.data);

    const capitalizedLeadSourceData = leadTypeData?.map((cur) => ({
        ...cur,
        leadType: cur.leadType.charAt(0).toUpperCase() + cur.leadType.slice(1),
        key: cur._id,
    }));
  
    useEffect(()=>{
        const token = localStorage.getItem("token")
        dispatch(LeadTypedata(token));
    },[dispatch])

    return (
        <>
            <div className="col-xl-12">
                <div className="card dz-card" id="bootstrap-table2">
                    <div className="card-header flex-wrap d-flex justify-content-between">
                        <div>
                            <h4 className="card-title">Lead Type</h4>
                        </div>

                       
                    </div>
                    <div className="card-body">
                    <ResponsiveContainer width="100%">
                    <BarChart
                            width={1200}
                            height={300}
                            data={capitalizedLeadSourceData  }
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="leadType" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="count" fill="var(--primary)" background={{ fill: "#eee" }} />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadType