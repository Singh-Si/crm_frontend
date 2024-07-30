import React from 'react'
import Status from './Status'
import TitleBreadCrumb from '../../components/TitleBreadCrumb'

function TeamStatus() {
  return (
    <>
    <div className='page-titles'>
      <TitleBreadCrumb title="Team Status" />
    </div>
      <div className='container-fluid'>
        <div className='row'>
        <Status />
        </div>
      </div>
    </>
  )
}

export default TeamStatus