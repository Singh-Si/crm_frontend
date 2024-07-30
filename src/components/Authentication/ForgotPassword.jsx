import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem("token")

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const isForgotPasswordPage = location.pathname === '/forgot-password';

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: email
      };

      const userResponse = await axios.post(`${config.API_URL}/auth/forget-password`, data, { headers: { Authorization: `Bearer ${token}` } });

      if (userResponse?.data?.success === true) {
        setOtp(userResponse?.data?.data?.otp);

        setEmail(userResponse?.data?.data?.email)

        navigate("/user/otp")
        navigate(`/user/otp?email=${userResponse?.data?.data?.email}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      }
    } catch (error) {
      console.error(error?.response?.data, "error");
    }
  };

  return (
    <div className='vh-100' style={{ position: 'relative' }}>
      <div className="authincation h-100">
        <div className="container-fluid h-100">
          <div className="row h-100">
            {!isForgotPasswordPage && (
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
            )}
            <div className={`col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center ${isForgotPasswordPage ? 'col-xl-12 col-lg-12' : ''}`}>
              <div className="login-form">
                <div className="text-center">
                  <h3 className="title">Forgot password</h3>
                  <p>Sign in to your account to start using Decode Sales</p>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="mb-1 text-dark">Email Id</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control" defaultvalue="hello@example.com" />
                  </div>
                  {/* <div className="form-row d-flex justify-content-between mt-4 mb-2">
                    <div className="mb-4">
                      <div className="form-check custom-checkbox mb-3">
                        <input type="checkbox" className="form-check-input" id="customCheckBox1" required />
                        <label className="form-check-label" htmlFor="customCheckBox1">Remember my preference</label>
                      </div>
                    </div>
                  </div> */}
                  <div className="text-center mb-4">
                    <button onClick={handleSendOtp} type="button" className="btn btn-primary btn-block">Send OTP</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;