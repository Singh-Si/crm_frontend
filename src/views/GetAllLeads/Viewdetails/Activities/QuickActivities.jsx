import React from 'react'
import LogCall from './LogCall'
import NewTask from './NewTask'
import NewEvent from './NewEvent'
import ActivityEmail from './ActivityEmail'

function QuickActivities() {
    return (
        <>
            <div className='btn-group pb-4'>
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#logcall">
                    <span class="btn-icon-center text-primary me-2"><i class="fa-solid fa-phone-volume"></i></span>
                    Log a Call
                </button>
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#newtask">
                    <span class="btn-icon-center text-primary me-2"><i class="fa-solid fa-list-check"></i></span>
                    New Task
                </button>
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#newevent">
                    <span class="btn-icon-center text-primary me-2"><i class="fa-regular fa-calendar-days"></i></span>
                    New Event
                </button>
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#activityemail">
                    <span class="btn-icon-center text-primary me-2"><i class="fa-regular fa-envelope"></i></span>
                    Email
                </button>
            </div>
            <LogCall />
            <NewTask />
            <NewEvent />
            <ActivityEmail />
        </>
    )
}

export default QuickActivities