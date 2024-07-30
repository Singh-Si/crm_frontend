import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PieChart, Pie, Cell } from "recharts";
import { fetchProducts } from "../../redux/action/products/products";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 }
];

const COLORS = ["#2731c8", "#b800d8", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;


const indicateData = () => {
  return (
    <div>

    </div>
  )
}
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {/* <tspan>{data[index].name}</tspan> */}
      <tspan x={x} y={y + 5} dy={5} fill="white" fontWeight="semibold">
        {`${data[index].value}`}
      </tspan>
    </text>
  );
};




export default function App() {


  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const dataa = useSelector((store) => store?.fetchProductsReducer?.userInfo);
  // console.log(dataa)

  useEffect(() => {
    dispatch(fetchProducts(token))
  }, [dispatch])
  return (

    <>
<div className="card-body">
      {data.length > 0 ?
        <PieChart width={500} height={330}>
          <Pie
            data={data}
            cx={250}
            cy={140}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart> :
        <div>
          <span>No data Available</span>
        </div>}



      <div className="project-date">
        <div className="project-media">
          <p className="mb-0">
            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={12} height={12} rx={3} fill="var(--primary)" />
            </svg>
            Completed Projects
          </p>
          <span>125 Projects</span>
        </div>
        <div className="project-media">
          <p className="mb-0">
            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={12} height={12} rx={3} fill="#3AC977" />
            </svg>
            Progress Projects
          </p>
          <span>125 Projects</span>
        </div>
        <div className="project-media">
          <p className="mb-0">
            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={12} height={12} rx={3} fill="#FF5E5E" />
            </svg>
            Cancelled
          </p>
          <span>125 Projects</span>
        </div>
        <div className="project-media">
          <p className="mb-0">
            <svg className="me-2" width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width={12} height={12} rx={3} fill="#FF9F00" />
            </svg>
            Yet to Start
          </p>
          <span>125 Projects</span>
        </div>
      </div>
      </div>
    </>
  );
}
