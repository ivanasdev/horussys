import React from "react";
import Hlogo from "../../assets/img/hor.png"
import "./reporter.css";
const ReporterUser = () =>{
    return(
        <div className="row justify-content-center tools">
   

        <div className="Reporter-Form">
        HORUS <br/>
        <h6>Intelligence System Reporting</h6>
        <img src={Hlogo} alt="" width="290" height="100"  />

        <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">ACLARACIONES </button>
            </div>

            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">SPEI</button>
            </div>


            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">CREDITO</button>
            </div>



            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">AHORRO</button>
            </div>


          

        </div>
    </div>

    )
}


export default ReporterUser