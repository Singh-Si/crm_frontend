import React from 'react'

function Reason() {
  return (
    <>
    <div className="modal fade" id="reason" tabIndex={-1} aria-labelledby="reason" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel1"><i class="fa-regular fa-comment me-2"></i>Reason/Comment</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="row">
                            <div className="col-xl-12 mb-3">
                                <label className="form-label">Please Type Your Comments Here...<span className="text-danger">*</span>
                                </label>
                            <textarea className="form-txtarea form-control" rows={3} id="comment" defaultValue={""} /></div>
                                <div className='col-xl-12'>
                                <button className="btn btn-primary  float-right"><i class="fa-regular fa-paper-plane me-2"></i>Submit</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Reason