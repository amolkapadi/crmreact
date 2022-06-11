import React from 'react'
import './Modules.css'
import { Link } from "react-router-dom";

export default function Modules() {
    return (
        <div className='container mt-5'>
           <div className='d-flex'>
           <p className='text-muted'>MODULES</p>
           <p className='text-muted ms-auto'>Show/ Hide Cards</p>
           </div>
            <div className='row '>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i class="bi bi-bag-fill ms-3"></i>
                            <p className='ms-3'>Buying</p>
                            <i class="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-collection-play-fill ms-3 "></i>
                            <p className='ms-3'>Getting Started</p>
                            <i className="bi bi-caret-down  ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Accounting</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Selling</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Stock</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Assets</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Projects</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <Link to="/crm"><div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>CRM</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div></Link>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Support</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Human Resources</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Quality</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>

                <div className='d-flex mt-5'>
                     <p className='text-muted'>DOMAINS</p>
                </div>

                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Manufacturing</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Reatil</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                
                <div className='d-flex mt-5'>
                     <p className='text-muted'>PLACES</p>
                </div>

                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Website</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Social</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='d-flex p-1 '>
                            <i className="bi bi-card-list ms-3 "></i>
                            <p className='ms-3'>Leaderboard</p>
                            <i className="bi bi-caret-down ms-auto"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
