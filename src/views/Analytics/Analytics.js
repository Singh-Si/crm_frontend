import React from 'react'
import TitleBreadCrumb from '../../components/TitleBreadCrumb'
import LeadStatus from './LeadStatus'
import LeadType from './LeadType'
import TotalLeads from './TotalLeads'

function Analytics() {
    return (
        <>
            <div className="page-titles">
                <TitleBreadCrumb title="Analytics" />
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <TotalLeads />
                    <LeadStatus />
                    <LeadType />
                </div>
            </div>
        </>
    )
}

export default Analytics