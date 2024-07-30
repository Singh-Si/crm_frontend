import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config";
import {fetchPlan} from "../../redux/action/plan/plan"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { customStyles } from "../../utils/TableCssComponent";

function ProductTable(props) {

    var token = localStorage.getItem("token");
    const [response,setResponse] = useState([])
    const [lead,setLead] = useState(0)
    const fetchData = async () => {
        try {
            const response = await axios.get(`${config.API_URL}/product/fetch`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }) 
              setResponse(response.data.data )
              setLead(lead+1)
        } catch (error) {
            console.log(error)
        }
    }
 useEffect( ()=>{

   
    fetchData();
 },[response])


 const deleteData = async (id)=>{
    try {
        const response = await axios.delete(`${config.API_URL}/product/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.data.success) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Woh...',
                    text: 'User Deleted ',

                })
                fetchData()
               
            }
           

        } 
        catch (error) {
            console.error("Error deleting product:", error);

            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: error,

            })
        // console.log("Product deleted:", response.data);
      }
    //    catch (error) {
    //     console.error("Error deleting product:", error);
    //   }
 }
 const columns = [
    {
        name: "Project   Name",
        selector: 'name', // Use a string to refer to the property in your row data
        cell: row => (
            <>
            <Link to={`/product/${row._id}`} state={row}>
                {row.name}
            </Link>
            </>
        
        ),
    },
    {
        name: "Slug",
        selector: 'slug', // Use a string to refer to the property in your row data
    },
    {
        name: 'Action',
        cell: row => (
            <div>
                <button className='btn btn-danger btn-sm' onClick={() => deleteData(row._id)}>
                    <i className=' icon-trash'></i>
                </button>
            </div>
        ),
    },
];


  
    return (
        <div className="active-projects style-1">
            <DataTableExtensions columns={columns} data={response}>
                <DataTable
                    columns={columns}
                    customStyles={customStyles}
                    data={response}
                    direction="auto"
                    fixedHeader
                    fixedHeaderScrollHeight="1000px"
                    pagination
                    responsive
                    striped
                    subHeaderAlign="right"
                    subHeaderWrap
                 
                />
            </DataTableExtensions>
        </div>
    );
}

export default ProductTable;

