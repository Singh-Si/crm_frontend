import React from 'react'
import TopProfile from './TopProfile'
import ZoomOut from './ZoomOut'
import Settings from './Settings'
import Notification from './Notification'
import Messages from './Messages'
import { Link } from 'react-router-dom/dist'

function TopHeader() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left top-nav">

                <ul className="navbar-nav header-right topnav-text">

                  <li className="nav-item ps-3">
                    <div className="dropdown header-profile2">
                      <Link className="nav-link" to="/">
                        <div className="header-info2 d-flex align-items-center">
                          <div className="header-info">
                            <p className='m-0'>Dashboard</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item ps-3">
                    <div className="dropdown header-profile2">
                      <Link to = "/analytics" className="nav-link" >
                        <div className="header-info2 d-flex align-items-center">
                          <div className="header-info">
                            <p className='m-0'>Analytics</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  {/* <li className="nav-item ps-3">
                    <div className="dropdown header-profile2">
                      <Link className="nav-link" to="/reports" >
                        <div className="header-info2 d-flex align-items-center">
                          <div className="header-info">
                            <p className='m-0'>Reports</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li> */}
                  {/* <li className="nav-item ps-3">
                    <div className="dropdown header-profile2">
                      <Link className="nav-link" to="/status">
                        <div className="header-info2 d-flex align-items-center">
                          <div className="header-info">
                            <p className='m-0'>Team Status</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li> */}
                  <li className="nav-item ps-3">
                    <div className="dropdown header-profile2">
                      <Link to="/products" className="nav-link"  >
                        <div className="header-info2 d-flex align-items-center">
                          <div className="header-info">
                            <p className='m-0'>Products</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>

              </div>
              <ul className="navbar-nav header-right">
                <Settings />
                <Notification />
                <Messages />
                <ZoomOut />
                <TopProfile />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default TopHeader