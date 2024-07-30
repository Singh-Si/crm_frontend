import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import config from '../../config';
import { useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import empty_data_icon from '../../assets/images/empty_data_icon.png'
import { customStyles } from '../../utils/TableCssComponent';
const moment = require('moment');
function Pipeline() {

    const { loading, userInfo, error } = useSelector((store) => store.userInfo) || " ";
    const user = userInfo && userInfo.payload && userInfo.payload._id
    var token = localStorage.getItem("token")
    const [assigned, setassign] = useState([]);

    const Pipeline = async () => {

        try {
            const response = await axios.get(
                (`${config.API_URL}/dashboard/pipeline/leads`),
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setassign(response?.data?.data)

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: error,
            });

        }
    }
    useEffect(() => {
        Pipeline()
    }, [])

    const columns = useMemo(() =>
        [
            {
                name: "LeadName",
                selector: (row) =>
                    <div>
                        <Link to={`/leads/${row._id}`} state={row} style={{ color: "black" }} tabindex="0" data-toggle="popover" field="firstName" data-trigger="focus" title={`${row?.firstName} ${row?.lastName}`}>{row?.firstName} {row?.lastName}</Link>

                    </div>, // Replace "name" with the actual property name from your data
                sortable: true,
            },
           { name: "Date",
            selector: (row) =>
            <div>
              <span to={`/leads/${row._id}`}  className='mb-1'>{ moment(row && row.createdDate).format("YYYY-MMM-DD")}</span>
            </div> ,  
            sortable: true,
            
          },
           { name: "Time",
            selector: (row) =>
            <div>
              <span to={`/leads/${row._id}`}  className='mb-1'>{row && row.createdTime}</span>
            </div> ,  
            sortable: true,
            
          },
            {
                name: "Source",
                selector: "leadSource", // Replace "email" with the actual property name from your data
                sortable: true,
                className:"capitalize"
            },
            {
                name: "Lead Status",
                selector: "leadType", // Replace "email" with the actual property name from your data
                sortable: true,
                className:"capitalize"
            },
            {
                name: "Budget",
                selector: (row) =>
                <div>
                  <span className='mb-1 capitalize badge badge-info light border-0 ms-1 m-1 '>{row.budget}</span>
                </div>
                , 
                sortable: true,
                width:"14rem"
            },

            // {
            //     name: 'Action',
            //     cell: (row) => <button className='btn btn-warning me-1 btn-sm'><i className='icon-pencil'></i></button>,
            //     sortable: true,
            // },
        ],
        []
    );

   

    return (
        <>
            <div className="col-xl-12">
                <div className="card dz-card" id="bootstrap-table2">
                    <div className="card-header flex-wrap d-flex justify-content-between">
                        <div>
                            <h4 className="card-title">Pipeline</h4>
                        </div>
                    </div>
                    {/* tab-content */}
                    {assigned?.length > 0 ?
                        <div className="tab-content" id="myTabContent-1">
                            <div className="tab-pane fade show active" id="bordered" role="tabpanel" aria-labelledby="home-tab-1">
                                <div className="card-body">
                                    <div className="table-responsive">


                                        <DataTable
                                            className='custom-table table-responsive'
                                            customStyles={customStyles}
                                            columns={columns}
                                            data={assigned}
                                            pagination
                                            selectableRowsHighlight
                                            highlightOnHover
                                            FixedHeader
                                            fixedHeaderScrollHeight='450px'
                                            // expandableRows
                                            // expandableRowsComponent={ExpandableComponent}
                                            // subHeaderComponent={subHeaderComponent}
                                            // selectableRows
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="bordered-html" role="tabpanel" aria-labelledby="home-tab-1">
                                <div className="card-body pt-0 p-0 code-area">
                                    <pre className="mb-0"><code className="language-html">{"\n"}&lt;div class="table-responsive"&gt;{"\n"}{"\t"}&lt;table class="table table-responsive-md"&gt;{"\n"}{"\t"}{"\t"}&lt;thead&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th style="width:50px;"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="checkAll" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="checkAll"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;ROLL NO.&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;NAME&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;Email&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;Date&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;Status&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}&lt;/thead&gt;{"\n"}{"\t"}{"\t"}&lt;tbody&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="customCheckBox2" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="customCheckBox2"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;strong&gt;542&lt;/strong&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex align-items-center"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;img src="images/avatar/1.jpg" class="rounded-lg me-2" width="24" alt=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;span class="w-space-no"&gt;Dr. Jackson&lt;/span&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;example@example.com{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;01 August 2020&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;i class="fa fa-circle text-success me-1"&gt;&lt;/i&gt; Successful&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-primary shadow btn-xs sharp me-1"&gt;&lt;i class="fa fa-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-danger shadow btn-xs sharp"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="customCheckBox3" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="customCheckBox3"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;strong&gt;542&lt;/strong&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;img src="images/avatar/2.jpg" class="rounded-lg me-2" width="24" alt=""&gt; &lt;span class="w-space-no"&gt;Dr. Jackson&lt;/span&gt;&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;example@example.com{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;01 August 2020&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt; Canceled&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-primary shadow btn-xs sharp me-1"&gt;&lt;i class="fa fa-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-danger shadow btn-xs sharp"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="customCheckBox4" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="customCheckBox4"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;strong&gt;542&lt;/strong&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;img src="images/avatar/3.jpg" class="rounded-lg me-2" width="24" alt=""&gt; &lt;span class="w-space-no"&gt;Dr. Jackson&lt;/span&gt;&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;example@example.com{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;01 August 2020&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt; Pending&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-primary shadow btn-xs sharp me-1"&gt;&lt;i class="fa fa-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-danger shadow btn-xs sharp"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}&lt;/tbody&gt;{"\n"}{"\t"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}{"\n"}{"\t"}</code></pre>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='text-center'>
                            <img src={empty_data_icon} width={200} />
                        </div>
                    }
                    {/* /tab-content */}
                </div>
            </div>
        </>
    )
}

export default Pipeline