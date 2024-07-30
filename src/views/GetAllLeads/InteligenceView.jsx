import React from 'react'

function InteligenceView() {
  return (
    <>
 
        <div className='col-xl-12'>
        <div className="card cst-bdr">
        <div className="card-body ">
          <div className="row task">
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="task-summary">
                <div className="d-flex align-items-center">
                  <h2 className="text-primary count">8</h2> 
                  <span>Total Leads</span>
                </div>
                <small>------</small>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="task-summary">
                <div className="d-flex align-items-center">
                  <h2 className="text-purple count">7</h2>
                  <span>No Activity</span>
                </div>	
                <small>Leads with no completed activities</small>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="task-summary">
                <div className="d-flex align-items-center">
                  <h2 className="text-warning count">13</h2>
                  <span>Idle</span>
                </div>	
                <small>Leads with past activity but no completed activities in the last 30 day's</small>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="task-summary">
                <div className="d-flex align-items-center">
                  <h2 className="text-danger count">11</h2>
                  <span>Upcoming</span>
                </div>	
                <small>Leads with activities due in the next 30 day's</small>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="task-summary">
                <div className="d-flex align-items-center">
                  <h2 className="text-success count">21</h2>
                  <span>Overdue</span>
                </div>	
                <small>-------</small>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="task-summary">
                <div className="d-flex align-items-center">	
                  <h2 className="text-danger count">16</h2>
                  <span>Due Today</span>
                </div>	
                <small>-------</small>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      
    </>
  )
}

export default InteligenceView