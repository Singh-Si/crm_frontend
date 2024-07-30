import React,{useEffect} from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { fetchCountLead, fetctAllLead } from '../../redux/action/allleads/getalllead';
import { useDispatch, useSelector } from 'react-redux';


const RADIAN = Math.PI / 180;
const data = [
    { name: 'Total Number of Leads', value: 2000, color: 'var(--primary)' },
    
];

const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
    
    let total = 0;
    data.forEach((v) => {
        total += v.value ;
    });
    const ang = 450;
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
        <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
        <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
    ];
};
<Tooltip
    content={({ active, payload }) => {
        if (active && payload && payload.length) {
            const dataPoint = payload && payload[0] && payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p>Name: {dataPoint.name}</p>
                    <p>Value: {dataPoint.value}</p>
                </div>
            );
        }
        return "null";
    }}
/>

function TotalLeads() {
    const dispatch = useDispatch();
    const leadTypeData = useSelector(state => state?.fetchAllLeadReducer?.userInfo?.data)
    
useEffect(()=>{
    const token = localStorage.getItem("token")
    dispatch(fetchCountLead(token));
},[dispatch])

    return (
        <>
            <div className="col-xl-3">
                <div className="card dz-card" id="bootstrap-table2">
                    <div className="card-header flex-wrap d-flex justify-content-between">
                        <div>
                            <h4 className="card-title">Total Lead's</h4>
                        </div>
                        

                    </div>
                    <div className="card-body">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={60}
                                    data={leadTypeData}
                                    cx={cx}
                                    cy={cy}
                                    innerRadius={iR}
                                    outerRadius={oR}
                                    fill="var(--primary)"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                {needle(value, data, cx, cy, iR, oR, '#d7d5d5')}
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalLeads