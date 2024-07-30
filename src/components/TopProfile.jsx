import axios from 'axios'
import React from 'react'
import { useDebugValue } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import config from '../config'
import { useState } from 'react'
import Swal from 'sweetalert2'
function TopProfile() {
  
  const handleLogout = () => {
    localStorage.removeItem('token');

      window.location.href = '/user/login';
  };

  const [userProfile, setUserProfile] = useState([]);
  const token = localStorage.getItem("token")

  const usersDetails = async () => {
    try {
      const response = await axios.post(`${config.API_URL}/verify`, { token: token });
      setUserProfile(response?.data?.body?.payload)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    usersDetails()
  }, [])


  return (
    <>
      <li className="nav-item ps-3">
        <div className="dropdown header-profile2">
          <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="header-info2 d-flex align-items-center">
              <div className="header-media">
                <img src="images/avatar.png" alt="" />
              </div>
              <div className="header-info">
                <h6 className="capitalize">{userProfile.firstName} {userProfile.lastName}</h6>
                <p>{userProfile.email}</p>
              </div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-end" style={{}}>
            <div className="card border-0 mb-0">
              <div className="card-header py-2">
                <div className="products">
                  <img src="images/avatar.png " className="avatar avatar-md" alt="" />
                  <div>
                    <h6 className="capitalize">{userProfile.firstName} {userProfile.lastName}</h6>
                    <p>{userProfile.email}</p>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 py-2">
                <Link to="/profile" className="dropdown-item ai-icon ">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38857 4.8716 7.38857 7.40969C7.38 9.93922 9.42381 11.9973 11.9524 12.0059H11.9848Z" stroke="var(--primary)" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ms-2">Profile </span>
                </Link>

                <Link
                  onClick={handleLogout}
                  className="dropdown-item ai-icon">
                  <svg className="profle-logout" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#ff7979" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg>
                  <span className="ms-2 text-danger">Logout </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default TopProfile