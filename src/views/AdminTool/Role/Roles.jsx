import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import { fetchRole } from "../../../redux/action/role/role";
import TitleBreadCrumb from '../../../components/TitleBreadCrumb';
import AddRole from './AddRole';
import { Link } from "react-router-dom";
import EditRole from "./EditRole";
import {customStyles } from '../../../utils/TableCssComponent'
function Roles() {
  const { loading, RoleData, error } = useSelector((store) => store) || " ";
  const role = RoleData?.userInfo?.data;
  const [selectedData, setSelectedData] = useState([]);
  const[state,setstate] = useState("")
const [data ,setRoleData] = useState('')

const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      customStyles : customStyles.name
    },

    {
      name: "Created At",
      selector: "createdAt",
      cell: (row) =>
        row?.createdAt ? new Date(row.createdAt).toDateString() : "",
    },
    {
      name: "Permissions",
      selector: "permission",
      cell: (row) => (
        <div>
          {row &&
            row.permission &&
            row.permission.map((ele, index) => (
              <li key={index} style={{ float: "left" }}>
                {(ele.value=="read") && <div className="badge badge-primary light border-0 ms-1 m-1 capitalize">{ele.value}</div>}
                {(ele.value=="create") && <div className="badge badge-success light border-0 ms-1 m-1 capitalize">{ele.value}</div>}
                {(ele.value=="update") && <div className="badge badge-warning light border-0 ms-1 m-1 capitalize">{ele.value}</div>}
                {(ele.value=="delete") && <div className="badge badge-danger light border-0 ms-1 m-1 capitalize ">{ele.value}</div>}
              </li>
            ))}
        </div>
      ),
    },
    {
      name: 'Action',
      cell: row => (
        <div>
          <button className="btn btn-primary shadow btn-xs sharp me-1" data-bs-toggle="offcanvas" href="#editrole" role="button" aria-controls="editrole" onClick={()=>setRoleData(row)}><i className="fa fa-pencil"  /></button>
        </div>
      ),
    },
  ];

  const handleSelectedRowsChange = (state) => {
    setSelectedData(state.selectedRows);
  };

//   const handleCheckboxChange = (event) => {
//     const columnName = event.target.value;
//     setColumns((prevDefs) =>
//       prevDefs.map((colDef) => {
//         if (colDef.name === columnName) {
//           return { ...colDef, hide: !colDef.hide };
//         }
//         return colDef;
//       })
//     );
//   };

 

 
  return (
    <>
      <div className='page-titles'>
        <TitleBreadCrumb title="User Roles" />
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-xl-12 bst-seller">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting ">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Roles</h4>
                    <div>
                      <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#Addrole" role="button" aria-controls="Addrole">+ Add Role</a>
                    </div>
                  </div>
                 
                  
                  <DataTableExtensions columns={columns.filter((coldef) => coldef.hide != true)} data={role}>
                    <DataTable
                      columns={columns}
                      customStyles={customStyles}
                      data={role}
                      direction="auto"
                      fixedHeader
                      fixedHeaderScrollHeight="1000px"
                      pagination
                      responsive
                      striped
                      subHeaderAlign="right"
                      subHeaderWrap
                      selectableRows
                      onSelectedRowsChange={handleSelectedRowsChange}
                    />
                  </DataTableExtensions>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddRole />
      <EditRole  props={data}  showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default Roles;
