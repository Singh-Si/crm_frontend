import React from 'react'

function StickyNotes() {
  return (
    <>
    <div className="col-xl-4">
                <div className="card dz-card" id="bootstrap-table2">
                    <div className="card-header flex-wrap d-flex justify-content-between">
                        <div>
                            <h4 className="card-title">Sticky Notes</h4>
                        </div>
                    </div>
                    {/* tab-content */}
                    <div className="tab-content" id="myTabContent-1">
                        <div className="tab-pane fade show active" id="bordered" role="tabpanel" aria-labelledby="home-tab-1">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '50px' }}>
                                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                                                        <input type="checkbox" className="form-check-input" id="checkAll" required />
                                                        <label className="form-check-label" htmlFor="checkAll" />
                                                    </div>
                                                </th>
                                                <th><strong>ROLL NO.</strong></th>
                                                <th><strong>NAME</strong></th>
                                                <th><strong>Email</strong></th>
                                                <th><strong>Date</strong></th>
                                                <th><strong>Status</strong></th>
                                                <th><strong /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox2" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox2" />
                                                    </div>
                                                </td>
                                                <td><strong>542</strong></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="images/avatar/1.jpg" className="rounded-lg me-2" width={24} alt="" />
                                                        <span className="w-space-no">Dr. Jackson</span>
                                                    </div>
                                                </td>
                                                <td>example@example.com	</td>
                                                <td>01 August 2020</td>
                                                <td><div className="d-flex align-items-center"><i className="fa fa-circle text-success me-1" /> Successful</div></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox3" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox3" />
                                                    </div>
                                                </td>
                                                <td><strong>542</strong></td>
                                                <td><div className="d-flex align-items-center"><img src="images/avatar/2.jpg" className="rounded-lg me-2" width={24} alt="" /> <span className="w-space-no">Dr. Jackson</span></div></td>
                                                <td>example@example.com	</td>
                                                <td>01 August 2020</td>
                                                <td><div className="d-flex align-items-center"><i className="fa fa-circle text-danger me-1" /> Canceled</div></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                                                        <input type="checkbox" className="form-check-input" id="customCheckBox4" required />
                                                        <label className="form-check-label" htmlFor="customCheckBox4" />
                                                    </div>
                                                </td>
                                                <td><strong>542</strong></td>
                                                <td><div className="d-flex align-items-center"><img src="images/avatar/3.jpg" className="rounded-lg me-2" width={24} alt="" /> <span className="w-space-no">Dr. Jackson</span></div></td>
                                                <td>example@example.com	</td>
                                                <td>01 August 2020</td>
                                                <td><div className="d-flex align-items-center"><i className="fa fa-circle text-warning me-1" /> Pending</div></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="bordered-html" role="tabpanel" aria-labelledby="home-tab-1">
                            <div className="card-body pt-0 p-0 code-area">
                                <pre className="mb-0"><code className="language-html">{"\n"}&lt;div class="table-responsive"&gt;{"\n"}{"\t"}&lt;table class="table table-responsive-md"&gt;{"\n"}{"\t"}{"\t"}&lt;thead&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th style="width:50px;"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="checkAll" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="checkAll"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;ROLL NO.&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;NAME&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;Email&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;Date&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;Status&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;th&gt;&lt;strong&gt;&lt;/strong&gt;&lt;/th&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}&lt;/thead&gt;{"\n"}{"\t"}{"\t"}&lt;tbody&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="customCheckBox2" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="customCheckBox2"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;strong&gt;542&lt;/strong&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex align-items-center"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;img src="images/avatar/1.jpg" class="rounded-lg me-2" width="24" alt=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;span class="w-space-no"&gt;Dr. Jackson&lt;/span&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;example@example.com{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;01 August 2020&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;i class="fa fa-circle text-success me-1"&gt;&lt;/i&gt; Successful&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-primary shadow btn-xs sharp me-1"&gt;&lt;i class="fa fa-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-danger shadow btn-xs sharp"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="customCheckBox3" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="customCheckBox3"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;strong&gt;542&lt;/strong&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;img src="images/avatar/2.jpg" class="rounded-lg me-2" width="24" alt=""&gt; &lt;span class="w-space-no"&gt;Dr. Jackson&lt;/span&gt;&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;example@example.com{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;01 August 2020&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt; Canceled&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-primary shadow btn-xs sharp me-1"&gt;&lt;i class="fa fa-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-danger shadow btn-xs sharp"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;tr&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="form-check custom-checkbox checkbox-success check-lg me-3"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;input type="checkbox" class="form-check-input" id="customCheckBox4" required=""&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;label class="form-check-label" for="customCheckBox4"&gt;&lt;/label&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;strong&gt;542&lt;/strong&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;img src="images/avatar/3.jpg" class="rounded-lg me-2" width="24" alt=""&gt; &lt;span class="w-space-no"&gt;Dr. Jackson&lt;/span&gt;&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;example@example.com{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;01 August 2020&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;&lt;div class="d-flex align-items-center"&gt;&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt; Pending&lt;/div&gt;&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;td&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="d-flex"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-primary shadow btn-xs sharp me-1"&gt;&lt;i class="fa fa-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;a href="#" class="btn btn-danger shadow btn-xs sharp"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/td&gt;{"\n"}{"\t"}{"\t"}{"\t"}&lt;/tr&gt;{"\n"}{"\t"}{"\t"}&lt;/tbody&gt;{"\n"}{"\t"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}{"\n"}{"\t"}</code></pre>
                            </div>
                        </div>
                    </div>
                    {/* /tab-content */}
                </div>
            </div>
    </>
  )
}

export default StickyNotes