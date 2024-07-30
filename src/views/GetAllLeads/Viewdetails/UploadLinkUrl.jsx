import React from 'react'

function UploadLinkUrl() {
  return (
    <>
    <div className="modal fade" id="uploadlink" tabIndex={-1} aria-labelledby="uploadlink" aria-hidden="true">
        <div className="modal-dialog modal-dialog-center">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel1">Upload Link (URL)</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xl-12">
                  <label className="form-label">Link (URL)<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary"><i class="fa-solid fa-upload me-2"></i>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadLinkUrl