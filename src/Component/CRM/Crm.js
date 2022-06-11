import React from 'react'
import './Crm.css'
import { Link } from "react-router-dom";


export default function Crm() {
  return (
      <>

  
    <div className='container mt-3'>
    <h3>CRM</h3>
    </div><hr />
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='card'>
                <p className='fw-bold p-2'>Sales Pipeline</p>
                    <ul>
                        <li>Lead</li>
                        <li>Opportunity</li>
                        <li>Customer</li>
                        <li>Conatct</li>
                        <li>Communication</li>
                        <li>Lead Source</li>
                        <li>Contaract</li>
                        <li>Appointment</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card'>
                <p className='fw-bold p-2'>Reports</p>
                    <ul>
                        <li>Lead Details</li>
                        <li>Sales Funnel</li>
                        <li>Prospects Engaged But Not Converted</li>
                        <li>Minutes to First Responsce for Opportunity</li>
                        <li>Inactive Customer</li>
                        <li>Campaign Efficiency</li>
                        <li>Lead Owner Efficiency</li>
                        <Link to='/newlead'>Lead</Link>
                        <br />
                    </ul>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card'>
                <p className='fw-bold p-2'>Settings</p>
                    <ul>
                        <li>Customer</li>
                        <li>Territory</li>
                        <li>Sales Person</li>
                        <li>Campaign</li>
                        <li>Email Campaign</li>
                        <li>SMS Center</li>
                        <li>SMS Log</li>
                        <li>SMS Settings</li>
                        <li>Email Group</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card'>
                <p className='fw-bold p-2'>Maintenance</p>
                    <ul>
                        <li>Maintenance Schedule</li>
                        <li>Maintenance visit</li>
                        <li>Warranty</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
