import React from 'react'

function Settings() {
    return (
        <>
            <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link " href="javascript:void(0);" data-bs-toggle="dropdown">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8067 7.62358L20.1842 6.54349C19.6577 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83669 3.19795 9.63717 3.68456 9.63961 4.19109V4.19109C9.6246 5.23689 8.77248 6.07678 7.72657 6.07667C7.40421 6.07332 7.08846 5.98491 6.81123 5.82038V5.82038C5.89606 5.29598 4.72911 5.61126 4.20254 6.52519L3.53435 7.62358C3.00841 8.53636 3.3194 9.70258 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8067 7.63274V7.63274V7.62358Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12.1751" cy="11.889" r="2.63616" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                    <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1 p-3 height370">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-badge primary" />
                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                    <span>10 minutes ago</span>
                                    <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                </a>
                            </li>
                            <li>
                                <div className="timeline-badge info">
                                </div>
                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                    <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                </a>
                            </li>
                            <li>
                                <div className="timeline-badge danger">
                                </div>
                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                    <span>30 minutes ago</span>
                                    <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                </a>
                            </li>
                            <li>
                                <div className="timeline-badge success">
                                </div>
                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                    <span>15 minutes ago</span>
                                    <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                                </a>
                            </li>
                            <li>
                                <div className="timeline-badge warning">
                                </div>
                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                </a>
                            </li>
                            <li>
                                <div className="timeline-badge dark">
                                </div>
                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Settings