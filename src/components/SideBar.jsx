import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SideBar() {
  const { userApi } = useSelector((store) => store) || " ";
  const users = userApi && userApi.userInfo && userApi.userInfo.data;
  const [sideToggle, setSideToggle] = useState(false);
  const [sideAdmin, setAdminToggle] = useState(false);
  const expectedLead = ['read', 'create'];
  const expectedManager = ['read', 'create', 'update'];
  const expectedAdmin = ['read', 'create', 'update', 'delete'];
  const expectedSuperAdmin = ['read', 'create', 'update', 'delete',"root"];
  const sortExpecteSuperAdmin = expectedSuperAdmin.slice().sort();
  const sortAdmin = expectedAdmin.slice().sort();
  const sortData = expectedManager.slice().sort();
  const sortExpectedLead = expectedLead.slice().sort();

const { userInfo } = useSelector((store) => store.userInfo) || " ";
const userPermission = userInfo && userInfo.payload && userInfo.payload && userInfo.payload.role && userInfo.payload.role[0] && userInfo.payload.role[0].permission;
const sortedUserPermissions = userPermission && userPermission.map(permission => permission.value).sort();
const compairedAdmin = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortAdmin);
const compairedSuperAdmin = JSON.stringify(sortedUserPermissions) === JSON.stringify(sortExpecteSuperAdmin);

  const handleLogout = () => {
    localStorage.removeItem('token');

      window.location.href = '/user/login';
  };

  return (
    <>
      <Helmet>
        {/* {/ <script src="js/demo.js"></script> /} */}
        <script src="js/styleSwitcher.js"></script>
        {/* <script src="vendor/tagify/dist/tagify.js"></script>
    <script src="js/custom.js"></script>
 <script src="js/deznav-init.js"></script> */}
      </Helmet>

      <div className="deznav pt-4">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <Link to="/" className aria-expanded="false">
                <div className="menu-icon">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/all-leads" className aria-expanded="false">
                <div className="menu-icon">
                  <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.79222 13.9396C12.1738 13.9396 15.0641 14.452 15.0641 16.4989C15.0641 18.5458 12.1931 19.0729 8.79222 19.0729C5.40972 19.0729 2.52039 18.5651 2.52039 16.5172C2.52039 14.4694 5.39047 13.9396 8.79222 13.9396Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.79223 11.0182C6.57206 11.0182 4.77173 9.21874 4.77173 6.99857C4.77173 4.7784 6.57206 2.97898 8.79223 2.97898C11.0115 2.97898 12.8118 4.7784 12.8118 6.99857C12.8201 9.21049 11.0326 11.0099 8.82064 11.0182H8.79223Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.1095 9.9748C16.5771 9.76855 17.7073 8.50905 17.7101 6.98464C17.7101 5.48222 16.6147 4.23555 15.1782 3.99997" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.0458 13.5045C18.4675 13.7163 19.4603 14.2149 19.4603 15.2416C19.4603 15.9483 18.9928 16.4067 18.2374 16.6936" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="nav-text">All Leads</span>
              </Link>
            </li>
            <li>
              <a
                className={`has-arrow ${sideToggle ? "mm-expanded" : ""}`}
                aria-expanded={sideToggle ? "true" : "false"}
                onClick={() => setSideToggle(!sideToggle)}
                style={{ cursor: "pointer" }}
              >
                <div className="menu-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    width={22} height={22}
                  >
                    <path stroke="#888888" strokeLinecap="round" strokeLinejoin="round" d="M15.41 22h-.19a.46.46 0 01-.26-.27l-2.22-5.8c-.09-.24.03-.51.26-.61.71-.26 1.28-.82 1.58-1.49.64-1.43 0-3.1-1.43-3.74-1.43-.64-3.1 0-3.74 1.41-.3.71-.32 1.5-.05 2.19.3.74.89 1.31 1.64 1.59.24.09.37.36.28.61L9 21.69c-.04.12-.13.22-.25.27-.12.04-.25.04-.36 0C3.24 19.97.67 14.18 2.66 9.03c1.99-5.15 7.78-7.72 12.93-5.73 2.47.96 4.46 2.85 5.54 5.27a9.905 9.905 0 01.2 7.65c-1.01 2.66-3.1 4.78-5.75 5.78h-.17M12 3.59c-4.97-.13-9.1 3.8-9.23 8.77a9.007 9.007 0 005.55 8.54l1.89-4.9c-1.83-1-2.52-3.28-1.53-5.11a3.784 3.784 0 015.11-1.53 3.775 3.775 0 010 6.64l1.89 4.93a9.113 9.113 0 004.76-5c1.84-4.62-.4-9.85-5.02-11.7A9.107 9.107 0 0012 3.59z" />
                  </svg>
                </div>
                <span className="nav-text">Source</span>
              </a>
              <ul
                aria-expanded={sideToggle ? "true" : "false"}
                className={`left mm-collapse ${sideToggle ? "mm-show" : ""}`}
              >
                <li><Link to="#">Website</Link></li>
                <li><Link to="/facebook ">Facebook</Link></li>
                {/* <li><Link to="#">Instagram</Link></li> */}
                {/* <li><Link to="#">Justdial</Link></li> */}
                {/* <li><Link to="#">Google Ads</Link></li> */}
                <li><Link to="/manual-data">Manual Data</Link></li>
                {/* <li><Link to="#">LinkedIn</Link></li> */}
                {/* <li><Link to="#">Up Work</Link></li>
                <li><Link to="#">Fiverr</Link></li> */}
              </ul>
            </li>

            
            
           {
           compairedAdmin || compairedSuperAdmin ? 
            <li>
            <a
              className={`has-arrow ${sideAdmin ? "mm-expanded" : ""}`}
              aria-expanded={sideAdmin ? "true" : "false"}
              onClick={() => setAdminToggle(!sideAdmin)}
              style={{ cursor: "pointer" }}
            >
              <div className="menu-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  width={22} height={22}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path stroke="#888888" strokeLinecap="round" strokeLinejoin="round" d="M12 14v2a6 6 0 00-6 6H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
                </svg>
              </div>
              <span className="nav-text">Admin Tool</span>
            </a>
            <ul
              aria-expanded={sideAdmin ? "true" : "false"}
              className={`left mm-collapse ${sideAdmin ? "mm-show" : ""}`}
            >
              <li><Link to="/role">Role</Link></li>
              <li><Link to="/user">User</Link></li>
              {compairedSuperAdmin ? <li><Link to="/company">Company</Link></li>:""}
            </ul>
          </li>:""
           }
         

            <li>
              <Link className aria-expanded="false">
                <div className="menu-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.45597C4.42197 2.77148 2.77197 4.42148 2.77197 6.45648V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.8096 12.0214H9.76855" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.8813 9.10626L21.8093 12.0213L18.8813 14.9373" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span onClick={handleLogout} className="nav-text">Logout</span>
              </Link>
            </li>
          </ul>
          {/* <div className="help-desk">
                <a href="javascript:void(0)" className="btn btn-primary">Help Desk</a>
              </div> */}
        </div>
      </div>
    </>
  );
}

export default SideBar;