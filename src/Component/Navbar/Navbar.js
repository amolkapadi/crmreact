import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">B</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div class="input-group">
                <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                <span class="input-group-text"><i class="bi bi-search"></i></span>
              </div>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">A</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Settings
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Settings 1</a></li>
                  <li><a class="dropdown-item" href="#">Settings 2</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Help
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Help 1</a></li>
                  <li><a class="dropdown-item" href="#">Help 2</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><i class="bi bi-chat-left-text-fill"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i class="bi bi-bell-fill"></i></a>
              </li>




            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
