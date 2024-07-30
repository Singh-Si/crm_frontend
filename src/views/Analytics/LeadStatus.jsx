import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchDashboardLeadSource } from '../../redux/action/LeadSource/LeadSource';
import { useDispatch, useSelector } from 'react-redux';

function LeadStatus() {
    const dispatch = useDispatch();
    const leadSourceData = useSelector(state => state?.LeadSource?.data?.data);
    const capitalizedLeadSourceData = leadSourceData?.map((cur) => ({
        ...cur,
        leadSource:cur?.leadSource?.charAt(0).toUpperCase() + cur?.leadSource?.slice(1),
        key: cur._id,
    }));
    // console.log(capitalizedLeadSourceData , "capitalizedLeadSourceData") ;
    useEffect(() => {
        const token = localStorage.getItem('token');
        dispatch(fetchDashboardLeadSource(token));
    }, []);

    return (
        <>
            <div className="col-xl-9">
                <div className="card dz-card" id="bootstrap-table2">
                    <div className="card-header flex-wrap d-flex justify-content-between">
                        <div>
                            <h4 className="card-title">Lead's By Source</h4>
                        </div>

                        
                    </div>
                    <div className="card-body">
                        <ResponsiveContainer width="100%">
                            <BarChart
                                width={1200}
                                height={300}
                                data={capitalizedLeadSourceData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="leadSource" scale="point" padding={{ left: 10, right: 10 }} />
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
    );
}

export default LeadStatus;
