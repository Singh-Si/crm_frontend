import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import TitleBreadCrumb from '../../../components/TitleBreadCrumb';
import AddUser from './AddUser';
import { fetchUserApi } from "../../../redux/action/UserApi/UserApi";
import { customStyles } from "../../../utils/TableCssComponent";
function User() {
    var token = localStorage.getItem("token");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserApi(token));
    }, []) 
    const { loading, userApi, error } =
    useSelector((store) => store) || " ";
const userData = userApi?.userInfo?.data

  const [selectedData, setSelectedData] = useState([]);
  const [columns,setColumns] = useState([
    {
        name: "Company",
        selector: (row) => row?.company?.company,
    },
    {
        name: "Full Name",
        selector: (row) => row?.firstName + " "+ row?.lastName,
        customStyles : customStyles.name
    },
    // {
    //     name: "Last Name",
    //     selector: (row) => row?.lastName,
    // },
    {
        name: "Email",
        selector: (row) => row?.email,
    },
    {
        name: "Role",
        selector: (row) => row?.role?.title,
    },
   
    {
        name: "Created At",
        selector: (row) => row?.createdAt,
        cell: (row) => new Date(row.createdAt).toDateString(),
    },
    {
        name: "Updated At",
        selector: (row) => row?.updatedAt,
        cell: (row) => new Date(row.updatedAt).toDateString(),
    },
    // {
    //     name: 'Action',
    //     cell: row => <div>
    //         <button className='btn btn-warning me-1 btn-sm'><i className='icon-pencil'></i></button>
    //         <button className='btn btn-danger btn-sm'><i className=' icon-trash'></i></button>
    //     </div>
    // },
])
const handleCheckboxChange = (event) => {
    const columnName = event.target.value;
    setColumns((prevDefs) =>
        prevDefs.map((colDef) => {
            if (colDef.name === columnName) {
                return { ...colDef, hide: !colDef.hide };
            }
            return colDef;
        })
    );
};
  const handleSelectedRowsChange = (state) => {
    setSelectedData(state.selectedRows);
  };



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
                    <h4 className="heading mb-0">Users</h4>
                    <div>
                      <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#Adduser" role="button" aria-controls="Adduser">+ Add User</a>
                    </div>
                  </div>
                 
                  
                  <DataTableExtensions columns={columns.filter((coldef) => coldef.hide != true)} data={userData}>
                    <DataTable
                    customStyles = {customStyles}
                      columns={columns}
                      data={userData}
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
      <AddUser />
    </>
  );
}

export default User;
