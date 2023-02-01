import React, { useState } from "react";
import Hlogo from "../../assets/img/hor.png";
import MenuCredito from "../../screens/credito/MenuCredito";


const AdminUser =() => {
    const [creditomenu, setCreditoMenu] = useState("");
    return(

        <div className="row justify-content-center tools">


        <div className="Login-Form">
        HORUS <br/>
        <h6>AMDMINISTRATOR </h6>
        <img src={Hlogo} alt="" width="290" height="100"  />

        <div className="mb-3 ">
                <button className='btn btn-sub-12' 
                type="submit"
                onClick={() => setCreditoMenu(<MenuCredito />)}
                onDoubleClick={() => setCreditoMenu("")}
                >CREDITO</button>
                
            </div>
            {creditomenu}


            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">AHORRO</button>
            </div>


            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">ALERTAS</button>
            </div>



            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">MONITOREO</button>
            </div>


        

        </div>
    </div>

    )
}

export default AdminUser