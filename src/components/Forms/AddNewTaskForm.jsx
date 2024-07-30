import React from 'react'

function AddNewTaskForm() {
  return (
    <>
     <div className="offcanvas offcanvas-end customeoff" tabIndex={-1} id="offcanvasExample1">
            <div className="offcanvas-header">
              <h5 className="modal-title" id="#gridSystemModal1">Add New Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="container-fluid">
                <form>
                  <div className="row">
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="exampleFormControlInputfirst" className="form-label">Title<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="exampleFormControlInputfirst" placeholder="Title" />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Project<span className="text-danger">*</span></label>
                      <select className="default-select style-1 form-control">
                        <option data-display="Select">Project</option>
                        <option value="html">Salesmate</option>
                        <option value="css">ActiveCampaign</option>
                        <option value="javascript">Insightly</option>
                      </select>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="exampleFormControlInputthree" className="form-label">Start Date<span className="text-danger">*</span></label>
                      <input type="date" className="form-control" id="exampleFormControlInputthree" />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="exampleFormControlInputfour" className="form-label">End Date<span className="text-danger">*</span></label>
                      <input type="date" className="form-control" id="exampleFormControlInputfour" />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Estimated Hour<span className="text-danger">*</span></label>
                      <div className="input-group">
                        <input type="text" className="form-control" defaultValue="09:30" /><span className="input-group-text"><i className="fas fa-clock" /></span>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Status<span className="text-danger">*</span></label>
                      <select className="default-select style-1 form-control">
                        <option data-display="Select">Status</option>
                        <option value="html">In Progess</option>
                        <option value="css">Pending</option>
                        <option value="javascript">Completed</option>
                      </select>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">priority<span className="text-danger">*</span></label>
                      <select className="default-select style-1 form-control">
                        <option data-display="Select">priority</option>
                        <option value="html">Hight</option>
                        <option value="css">Medium</option>
                        <option value="javascript">Low</option>
                      </select>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Category<span className="text-danger">*</span></label>
                      <select className="default-select style-1 form-control">
                        <option data-display="Select">Category</option>
                        <option value="html">Designing</option>
                        <option value="css">Development</option>
                        <option value="javascript">react developer</option>
                      </select>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Permission<span className="text-danger">*</span></label>
                      <select className="default-select style-1 form-control">
                        <option data-display="Select">Permission</option>
                        <option value="html">Public</option>
                        <option value="css">Private</option>
                      </select>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Deadline add<span className="text-danger">*</span></label>
                      <select className="default-select style-1 form-control">
                        <option data-display="Select">Deadline</option>
                        <option value="html">Yes</option>
                        <option value="css">No</option>
                      </select>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Assigned to<span className="text-danger">*</span></label>
                      <select className="default-select style-1 form-control">
                        <option data-display="Select">Assigned</option>
                        <option value="html">Bernard</option>
                        <option value="css">Sergey Brin</option>
                        <option value="javascript"> Larry Ellison</option>
                      </select>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Responsible Person<span className="text-danger">*</span></label>
                      <input name="tagify" className="form-control py-0 ps-0 h-auto" defaultValue="James, Harry" />
                    </div>
                    <div className="col-xl-12 mb-3">
                      <label className="form-label">Description<span className="text-danger">*</span></label>
                      <textarea rows={3} className="form-control" defaultValue={""} />
                    </div>
                    <div className="col-xl-12 mb-3">
                      <label className="form-label">Summary<span className="text-danger">*</span></label>
                      <textarea rows={3} className="form-control" defaultValue={""} />
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-danger light ms-1">Cancel</button>
                    <button className="btn btn-primary me-1">Help Desk</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
  )
}

export default AddNewTaskForm