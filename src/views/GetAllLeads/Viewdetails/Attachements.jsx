import React from 'react'
import UploadFile from './UploadFile'
import UploadLinkUrl from './UploadLinkUrl'

function Attachements() {
    return (
        <>
            <div className="card-header flex-wrap d-flex justify-content-between border-top">
                <div>
                    <h4 className="card-title">Attachements</h4>
                </div>
                <div className="basic-dropdown">
                    <div className="dropdown">
                        <button type="button" className="btn btn-info btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                            Attach File
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#uploadfile"><i className='fa fa-file me-2'></i>Upload File</a>
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#uploadlink"><i className='fa-solid fa-link me-2'></i>Link (URL)</a>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body p-0">
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className="card-body pb-0">
                            <table className="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th><strong>File Name</strong></th>
                                        <th><strong>Attached By</strong></th>
                                        <th><strong>Date Added</strong></th>
                                        <th><strong>Size</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href='images/Solis-Technology-PDF.pdf' className='text-info' target='_blank'>Solis Technology PDF</a>
                                        </td>
                                        <td>Ravindar Singh</td>
                                        <td>Nov 16, 2023 03:21 PM</td>
                                        <td>263.5 KB</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <UploadFile />
            <UploadLinkUrl />

            
        </>
    )
}

export default Attachements