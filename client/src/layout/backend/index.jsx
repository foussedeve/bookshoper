import React ,{useState} from 'react'
import {NavLink,Link }from "react-router-dom"
import useAuth from "../../utility/hook/useAuth"
import session from '../../session'

const Backend = ({children}) => {
  const {signout}=useAuth()
  const [user, setUser]=useState(session.get("USER_SESSION").data)

    return (

      <div className="container-scroller">
     
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href=""><img src="../../assets/images/logo.svg" alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini" href=""><img src="../../assets/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src="../../assets/images/faces/face15.jpg" alt=""/>
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">{`${user.firstname} ${user.lastname} `}</h5>
                  <span>{`${user.email}`}</span>
                </div>
              </div>
            <div className="dropdown">
            <a dropdown-toggle="true" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-vertical"></i></a>
              <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                  </div>
                </a>
              </div>

            </div>
            </div>
          </li>
          {/* sidebar navigation start-------------------------------------------------------*/}
          <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li>
          <li className="nav-item menu-items">
            < NavLink className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">Dashboard</span>
            </ NavLink>
          </li>
          <li className="nav-item menu-items">
            < NavLink className="nav-link" to="/mes-livres">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Livres</span>
            </ NavLink>
          </li>
          <li className="nav-item menu-items">
            < NavLink className="nav-link" to="/mes-abonnes">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
              <span className="menu-title">Abonnés</span>
            </ NavLink>
          </li>
          <li className="nav-item menu-items">
            < NavLink className="nav-link" to="/livres-emprunte">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title">Emprunts</span>
            </ NavLink>
          </li>                       
          <li className="nav-item menu-items">
            <a className="nav-link" href="">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* end-sidbar */}
      {/* start header-------------------------------------------------------*/}
  
      <div className="container-fluid page-body-wrapper">
   
        <nav className="navbar p-0 fixed-top d-flex flex-row">
          {/*  logo -------------------------------------------------------*/}
          <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
            <a className="navbar-brand brand-logo-mini" href="../../index.html"><img src="../../assets/images/logo-mini.svg" alt="logo" /></a>
          </div>
          <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="mdi mdi-menu"></span>
            </button>
            <ul className="navbar-nav w-100">
              <li className="nav-item w-100">
                <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                  <input type="text" className="form-control" placeholder="Search products"/>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              {/* Create start-------------------------------------------------------*/}
              <li className="nav-item dropdown d-none d-lg-block">
                <a className="nav-link btn btn-success create-new-button" dropdown-toggle="true" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">+ Créer</a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" >
                  <h6 className="p-3 mb-0">Actions</h6>
                  <div className="dropdown-divider"></div>
                  <Link to="nouveau-livre" className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-file-outline text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">Nouveau livre</p>
                    </div>
                  </ Link>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-web text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">UI Development</p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-layers text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">Software Testing</p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">See all projects</p>
                </div>
              </li>
              {/* create end -------------------------------------------------------*/}
              {/* notification start-------------------------------------------------------*/}
              <li className="nav-item dropdown border-left">
                <a className="nav-link count-indicator dropdown-toggle" dropdown-toggle="true" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-bell"></i>
                  <span className="count bg-danger"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" >
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Event today</p>
                      <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Settings</p>
                      <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-link-variant text-warning"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Launch Admin</p>
                      <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">See all notifications</p>
                </div>
              </li>
              {/* notification end-------------------------------------------------------*/}
              {/* use menu start-------------------------------------------------------*/}
              <li className="nav-item dropdown">
                <a className="nav-link" dropdown-toggle="true" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="navbar-profile">
                    <img className="img-xs rounded-circle" src="../../assets/images/faces/face15.jpg" alt=""/>
                    <p className="mb-0 d-none d-sm-block navbar-profile-name">{`${user.firstname} ${user.lastname} `}</p>
                    <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" >
                  <h6 className="p-3 mb-0">Profile</h6>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Paramètres</p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <Link to="#" className="dropdown-item preview-item" onClick={signout}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-logout text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Déconnexion</p>
                    </div>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">Advanced settings</p>
                </div>
              </li>
              {/* user menu end -------------------------------------------------------*/}
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-format-line-spacing"></span>
            </button>
          </div>
        </nav>
       {/* end-header -------------------------------------------------------*/}
        <div className="main-panel">
          <div className="content-wrapper">
            {children}
          </div>
        </div>
    
      </div>
     
    </div>
            
               
            
       
    )
}

export default Backend;