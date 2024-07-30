import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom/dist';
import config from '../../config';
import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem("token");

function SubmitOtp() {
    const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
    const [resetToken, setResetToken] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');

    const handleInputChange = (index, value) => {
        // Check if the entered value is a number or empty string
        if (/^[0-9]*$/.test(value) || value === '') {
            const newOtpValues = [...otpValues];

            // Handle backspace key
            if (value === '' && index > 0) {
                newOtpValues[index] = ''; // Clear the previous input
                document.getElementById(`otp-input-${index - 1}`).focus();
            } else {
                newOtpValues[index] = value;
            }

            if (value !== '' && index < otpValues.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }

            setOtpValues(newOtpValues);
        }
    };

    const handlePaste = (e) => {
        e.preventDefault(); // Prevent the default paste behavior

        const pastedData = e.clipboardData.getData('Text');
        const pastedValues = pastedData.split('').slice(0, 6);

        const newOtpValues = Array.from({ length: 6 }, (_, index) => {
            // Use the pasted value if available, otherwise, set it to an empty string
            return pastedValues[index] || '';
        });

        setOtpValues(newOtpValues);
    };

    const handleResendOtp = async () => {
        const data = {
            "email": email,
        };
        try {
            await axios.post(`${config.API_URL}/auth/resend-otp`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            Swal.fire({
                icon: "success",
                text: "OTP send again"
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: error
            })
        }
    }

    const handleSubmitOtp = async (e) => {
        e.preventDefault();

        const data = {
            "email": email,
            "otp": otpValues.join(''),
        };

        try {
            const response = await axios.post(`${config.API_URL}/auth/verify-otp`, data, { headers: { Authorization: `Bearer ${token}` } });

            if (response?.data.success === true) {
                navigate("/user/reset-password")

                if (response?.data?.data) {
                    setResetToken(response?.data?.data?.resetToken);

                    // Redirect to ResetPassword component with resetToken as a parameter
                    navigate(`/user/reset-password?resetToken=${response?.data?.data?.resetToken}`);
                } else {
                    // Handle the case where response.data.data is not defined
                    console.error("Reset token not found in the response data");
                }

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops",
                    text: response?.data.message,
                })
            }
        } catch (error) {
            console.error(error.response.data, "error");
        }
    };

    return (
        <>
            <div className='vh-100' style={{ position: "relative" }}>
                <div className="authincation h-100">
                    <div className="container-fluid h-100">
                        <div className="row h-100">
                            <div className="col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center">
                                <div className="login-form">
                                    <div className="text-center">
                                        <h3 className="title">Submit OTP</h3>
                                        <p>Enter Your OTP to start using Decode Sales</p>
                                    </div>

                                    <form className="otp text-center"
                                        onSubmit={handleSubmitOtp}
                                    >
                                        <div className="mb-4 input-field">
                                            {otpValues.map((value, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    value={value}
                                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                                    onPaste={handlePaste}
                                                    id={`otp-input-${index}`}
                                                    maxLength="1"
                                                />
                                            ))}
                                        </div>

                                        <div className="text-center mb-4">
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Verify OTP
                                            </button>
                                        </div>

                                        <p className="text-center">
                                            <Link onClick={handleResendOtp} className="btn-link text-primary" to="javascript:void(0);">
                                                Resend OTP
                                            </Link>
                                        </p>
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
        </>
    )
}

export default SubmitOtp