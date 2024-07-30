import axios from 'axios';
import React, { useEffect, useState } from 'react'
import config from '../../config';

function UserDetails({ userProfile }) {



  return (
    <>
      <div className="col-xl-12">
        <div className="card h-auto">
          <div className="card-body">
            <div className="profile-personal-info">
              <h4 className="text-primary mb-4">Personal Information</h4>
              <div className="row mb-2">
                <div className="col-sm-3 col-5">
                  <h5 className="f-w-500">Name <span className="pull-end">:</span>
                  </h5>
                </div>
                <div className="col-sm-9 col-7 capitalize"><span>{userProfile.firstName} {userProfile.lastName}</span>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-3 col-5">
                  <h5 className="f-w-500">Email<span className="pull-end">:</span>
                  </h5>
                </div>
                <div className="col-sm-9 col-7"><span>{userProfile.email}</span>
                </div>
              </div>
              {/* <div className="row mb-2">
                <div className="col-sm-3 col-5">
                  <h5 className="f-w-500">Gender <span className="pull-end">:</span>
                  </h5>
                </div>
                <div className="col-sm-9 col-7"><span>Male</span>
                </div>
              </div> */}
              {/* <div className="row mb-2">
                <div className="col-sm-3 col-5">
                  <h5 className="f-w-500">Company <span className="pull-end">:</span></h5>
                </div>
                <div className="col-sm-9 col-7"><span>Solis Technology</span>
                </div>
              </div> */}
              <div className="row mb-2">
                <div className="col-sm-3 col-5">
                  <h5 className="f-w-500">Role <span className="pull-end">:</span>
                  </h5>
                </div>
                <div className="col-sm-9 col-7"><span className='capitalize'>{(userProfile?.role?.map((item) =>item.title))}</span>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-3 col-5">
                  <h5 className="f-w-500">Permissions <span className="pull-end">:</span>
                  </h5>
                </div>
                <div className="col-sm-9 col-7"><span>
                  <div className="bootstrap-badge">
                    {console.log((userProfile?.role))}
                    {userProfile?.role?.map((item) =>
                      item?.permission?.map((e) => {
                        if (e.label === "Read") {
                          return <span className="badge light badge-info me-1" >{e.label}</span>;
                        } else if (e.label === "Create") {
                          return <span className="badge light badge-success me-1">{e.label}</span>;
                        } else if (e.label === "Delete") {
                          return <span className="badge light badge-danger me-1" >{e.label}</span>;
                        }
                        else if (e.label === "Update") {
                          return <span className="badge light badge-warning me-1" >{e.label}</span>;
                        }
                        return null; // or any default value
                      })
                    )}

                   
                  </div>
                </span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails