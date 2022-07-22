import React from 'react'
import "./index.css";

const Loading = () => {
    return (

        <div className="loadin-wrapper text-bg-info">
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-12 text-center mt-xl-2 text-light">
                    Veuillez patientez...............................
                </div>
            </div>
        </div>
    )
}

export default Loading;