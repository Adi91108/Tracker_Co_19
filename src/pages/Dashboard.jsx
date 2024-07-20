import React from 'react'
import SideBar from '../components/tracker0/SideBar'
import "../components/tracker0/sideBar.css"
import { Outlet } from 'react-router-dom'
import Tracker0 from '../components/tracker0/Tracker0'
import "./dashboard.css"


const Dashboard = () => {
  return (
    <>
    <div className='ContainerTrackers'>
        <SideBar />
        <Tracker0 />
        <main className='trackerMainContainer'><Outlet/></main>
        </div>
    </>
  )
}

export default Dashboard;