import React from 'react'

function NewTask() {
  return (
    <>
    <div className="modal fade" id="newtask" tabIndex={-1} aria-labelledby="newtask" aria-hidden="true">
        <div className="modal-dialog  cstm-mdl modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel1"><i class="fa-solid fa-list-check me-2"></i>New Task</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="row">
              <div className='col-xl-12 mb-3'>
                                    Coming Soon
                                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary"><i class="fa-regular fa-floppy-disk me-2"></i> Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewTask