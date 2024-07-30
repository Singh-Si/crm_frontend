import React, { useState } from 'react';
import Swal from 'sweetalert2';
import config from '../../../../config';

function ImportLead() {
    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
    const handleFileUpload = async () => {
      if (!file) {
        Swal.fire('Please select a file for import!');
        return;
      }
      try {
        const formData = new FormData();
        formData.append('file', file);
        const authToken = localStorage.getItem('token'); // Replace with your actual authentication token
  
        const response = await fetch(`${config.API_URL}/leadSource/import`, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the token in the headers
          },
        });
        const data = await response.json();
  
        if (data.success) {
          Swal.fire('Success', data.message, 'success');
        } else {
          Swal.fire('Error', data.message, 'error');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    }
  return (
    <>
    <div className="modal fade" id="importlead" tabIndex={-1} aria-labelledby="" aria-hidden="true">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel1"><i class="fa-solid fa-upload me-2"></i>Import Lead's</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="row">
                                <div className='col-xl-12 mb-3'>
                                <label>Import File</label>
                                    <div className="dz-default dlab-message upload-img mb-3">
                                        <form action="#" className="dropzone">
                                            <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20.5 20V35" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M27.1666 26.6667L20.4999 20L13.8333 26.6667" stroke="#DADADA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="fallback">
                                                <input name="file" type="file" multiple  onChange={handleFileChange}/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='col-xl-8'>
                                <div className="form-check custom-checkbox mb-3">
                                    <input type="checkbox" className="form-check-input" id="customCheckBox1" required />
                                <label className="form-check-label" htmlFor="customCheckBox1">Also Upload Duplicate Leads.</label></div>
                                </div>
                                
                                <div className='col-xl-4 mb-3 '>
                                <button className="btn btn-primary grp-btn" onClick={handleFileUpload}  ><i class="fa-solid fa-upload me-2" ></i>Upload</button>
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

export default ImportLead