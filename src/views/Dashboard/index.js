import React, { useEffect, useMemo } from "react";
import LogoHeader from "../../components/LogoHeader";
import TopHeader from "../../components/TopHeader";
import SideBar from "../../components/SideBar";
import Cards from "./Cards";
import TitleBreadCrumb from "../../components/TitleBreadCrumb";
import TodayLeads from "./TodayLeads";
import Meetings from "./Meetings";
import Pipeline from "./Pipeline";
import StickyNotes from "./StickyNotes";
import AddNewTask from "../../components/Forms/AddNewTask";
import AddNewTaskForm from "../../components/Forms/AddNewTaskForm";
import { useState } from "react";
import Select from "react-select";
import TopHotLeads from './TopHotLeads';
import TopBudgetLead from './TopBudgetLeads';
import TopUsers from './TopUsers';
import RecentlyViewdLeads from './RecentlyViewedLeads';


function Dashboard() {

    const [selectValue, SetSelectValue] = useState('today')

    const handleSelectValue = (value) => {
        SetSelectValue(value)
    }

   
    return (
        <>

            <div className="page-titles">
                <TitleBreadCrumb title="Dashboard" />
                <div className="d-flex align-items-center cs-settiong">
                    <span className='text-warning'>SORT BY:</span>
                    <select className="default-select status-select normal-select"
                        onChange={(e) => handleSelectValue(e.target.value)}
                        value={selectValue}
                    >
                        <option value="today">Today</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
            </div>
            {/* <AddNewTaskForm /> */}
            <div className="container-fluid">
                <Cards selectValue={selectValue} />
                <div className='row'>
                    <div className="col-xl-8">
                        <div className="row">

                            <TodayLeads /> 
                            <Meetings />
                            <Pipeline />
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="row">
                            <TopHotLeads  />
                            <TopUsers />
                            <RecentlyViewdLeads />
                            {/* <TopBudgetLead /> */}
                            
                        </div>
                    </div>

                    {/* <StickyNotes /> */}
                </div>

            </div>
        </>
    )
}
export default Dashboard;