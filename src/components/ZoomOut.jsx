import React from 'react'

function ZoomOut() {
    return (
        <>
            <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link bell dz-fullscreen" href="javascript:void(0);">
                    <svg id="icon-full" viewBox="0 0 24 24" width={20} height={20} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" style={{ strokeDasharray: '37, 57', strokeDashoffset: 0 }} /></svg>
                    <svg id="icon-minimize" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="A098AE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" style={{ strokeDasharray: '37, 57', strokeDashoffset: 0 }} /></svg>
                </a>
            </li>
        </>
    )
}

export default ZoomOut