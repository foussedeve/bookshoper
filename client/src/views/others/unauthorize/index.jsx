import React from 'react'
import {Link} from "react-router-dom";

const Unauthorize = () => {
    return (
        <div NameName="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center text-center error-page  bg-info">
            <div className="row flex-grow">
              <div className="col-lg-7 mx-auto text-white">
                <div className="row align-items-center d-flex flex-row">
                  <div className="col-lg-6 text-lg-right pr-lg-4">
                    <h1 className="display-1 mb-0">404</h1>
                  </div>
                  <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                    <h2 className="text-uppercase">désolé!</h2>
                    <h3 className="font-weight-light">Accès réfusé.</h3>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 text-center mt-xl-2">
                    <Link className="text-white font-weight-medium" to="/dashboard">Retour</Link>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 mt-xl-2">
                    <p className="text-white font-weight-medium text-center">Copyright &copy; 2022 Tous droits réservés.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    )
}

export default Unauthorize
