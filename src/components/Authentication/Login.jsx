import React from 'react'
import { Link } from 'react-router-dom/dist'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from '../../redux/action/user'

function Login() {
  const [inputdata, setValues] = useState({
    password: '',
    email: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { loading, userInfo, error } =
    useSelector((store) => store.userInfo) || ' ';

  if ((userInfo && userInfo.verified) || userInfo?.code === 'FETCHED') {
    window.location.replace('/');
  }

  if (error) {
    console.log(error);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserInfo(inputdata));
  };

  return (
    <>
      <div className='vh-100' style={{ position: "relative" }}>
        <div className="authincation h-100">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
                <div className="login-form">
                  <div className="text-center">
                    <h3 className="title">Sign In</h3>
                    <p>Sign in to your account to start using Decode Sales</p>
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="mb-4">
                      <label className="mb-1 text-dark">Email Id</label>
                      <input type="email"
                        className="form-control form-control"
                        defaultValue="hello@example.com"
                        value={inputdata.email}
                        onChange={(e) => setValues({ ...inputdata, email: e.target.value })}
                      />
                    </div>
                    <div className="mb-4 position-relative">
                      <label className="mb-1 text-dark">Password</label>
                      <input
                        id="dz-password"
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        defaultValue={123456}
                        value={inputdata.password}
                        onChange={(e) => setValues({ ...inputdata, password: e.target.value })}
                      />
                      <span className="eye">
                        <i
                          className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                          onClick={togglePasswordVisibility}
                        />
                      </span>
                    </div>
                    <div className="form-row d-flex justify-content-between mt-4 mb-2">
                      <div className="mb-4">

                      </div>
                      <div className="mb-4">
                        <Link to="/user/forget-password" className="btn-link text-primary">Forgot Password?</Link>
                      </div>
                    </div>
                    <div className="text-center mb-4 ">
                      <button type="submit" className="btn btn-primary btn-block "
                        onClick={onSubmit}
                      > Sign In</button>
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
    </>
  )
}

export default Login