import React from 'react'
import TitleBreadCrumb from '../../../components/TitleBreadCrumb'
import StatusDetails from './StatusDetails'
import DetailsList from './DetailsList'
import { useLocation } from 'react-router-dom';

function ViewDetails() {
    const location = useLocation();
    const receivedData = location && location.state;

    return (
        <>
            <div className='page-titles'>
                <TitleBreadCrumb title="Lead Details" />
            </div>
            <div className='container-fluid'>
                <StatusDetails receivedData={receivedData} />
                <DetailsList receivedData={receivedData}  />
            </div>
        </>
    )
}

export default ViewDetails