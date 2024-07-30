import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem("token");

function ResetPassword() {
  const [resetFormFields, setResetFormFields] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false
  });

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const resetToken = searchParams.get('resetToken');

  const { newPassword, confirmPassword } = resetFormFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResetFormFields((prevFields) => ({
      ...prevFields,
      [name]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevVisibility) => ({
      ...prevVisibility,
      [field]: !prevVisibility[field]
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      resetToken,
      newPassword,
      confirmPassword
    };

    try {
      const response = await axios.post(`${config.API_URL}/auth/reset-password`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });


      if (response?.data?.message === "Password updated successfully") {

        window.location.href = "/";

      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response?.data?.message
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='vh-100' style={{ position: "relative" }}>
      <div className="authincation h-100">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
              <div className="login-form">
                <div className="text-center">
                  <h3 className="title">Reset Password</h3>
                  <p>Reset your account to start using Decode Sales</p>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="mb-4 position-relative">
                    <label className="mb-1 text-dark">New Password</label>
                    <input
                      name="newPassword"
                      value={newPassword}
                      onChange={handleInputChange}
                      type={passwordVisibility.newPassword ? "text" : "password"}
                      className="form-control"
                    />
                    <span
                      className="eye"
                      onClick={() => togglePasswordVisibility('newPassword')}
                    >
                      {passwordVisibility.newPassword ? (
                        <i className="fa fa-eye" />
                      ) : (
                        <i className="fa fa-eye-slash" />
                      )}
                    </span>
                  </div>

                  <div className="mb-4 position-relative">
                    <label className="mb-1 text-dark">Confirm Password</label>
                    <input
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleInputChange}
                      type={passwordVisibility?.confirmPassword ? "text" : "password"}
                      className="form-control"
                    />
                    <span
                      className="eye"
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                      {passwordVisibility?.confirmPassword ? (
                        <i className="fa fa-eye" />
                      ) : (
                        <i className="fa fa-eye-slash" />
                      )}
                    </span>
                  </div>
                  <div className="form-row d-flex justify-content-between mt-4 mb-2">
                    <div className="mb-4">
                      <div className="form-check custom-checkbox mb-3">
                        <input type="checkbox" className="form-check-input" id="customCheckBox1" required />
                        <label className="form-check-label" htmlFor="customCheckBox1">Remember my preference</label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Link to="/login" className="btn-link text-primary">Login</Link>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="pages-left h-100">
                <div className="login-content">
                  <img src="/images/solis-logo.png" className="mb-3 logo-dark w-50" alt="" />
                  <p>Decode Sales CRM dashboard uses line charts to visualize customer-related metrics and trends over time.</p>
                </div>
                <div className="login-media text-center">
                  <img src="/images/login.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;