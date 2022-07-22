import React from 'react'

const SimpleLoader = () => {
    return (
    
        <div className="container-scroller ">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center text-center ">
          <div className="row flex-grow">
            <div className="col-lg-7 mx-auto text-white">
              <div className="mt-5 d-flex justify-content-center align-items-center">
                <div className="col-12 text-center mt-xl-2">
                Chargement encours...............................
                </div>
              </div>          
            </div>
          </div>
        </div>

      </div>

    </div>
    )
}

export default SimpleLoader;