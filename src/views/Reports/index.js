import React from 'react'
import LeadsReport from './LeadsReport'
import TitleBreadCrumb from '../../components/TitleBreadCrumb'
import UserLogs from './UserLogs'

function Reports() {
  return (
    <>
    <div className='page-titles'>
    <TitleBreadCrumb title="Reports" />
    </div>
    <div className='container-fluid'>
        <div className='row'>
        <LeadsReport />
    <UserLogs />
        </div>
    </div>
    </>
  )
}

export default Reports