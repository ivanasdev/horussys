import React, { useState, useEffect } from "react";
import "../../../App.css"
import Hlogo from "../../assets/img/hor.png"

const DeveloperUser = () => {
    return (


        <div className="row justify-content-center tools">
   

            <div className="DeveloperForm">
            HORUS <br/>
            <h6>DEVELOPER MODE</h6>
            <img src={Hlogo} alt="" width="290" height="90"  />



                <div className="mb-3 ">
                    <button className='btn btn-sub-12' type="submit ">SAND BOX </button>
                </div>


                <div className="mb-3 ">
                    <button className='btn btn-sub-12' type="submit ">SIMONE</button>
                </div>



                <div className="mb-3 ">
                    <button className='btn btn-sub-12' type="submit ">IA</button>
                </div>


                <div className="mb-3 ">
                    <button className='btn btn-sub-12' type="submit ">DATA SCIENCE</button>
                </div>

            </div>
        </div>


    )




}

export default DeveloperUser

/*


import React, { useState, useEffect } from "react";
import axios from "axios"

const FetchUser = () =>{
    const [datos,setDatos] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                'http://localhost:8000/authuserlogin'
            )
            var dbdata = await response.json();
            console.log(dbdata)
        }
        getData( )  
    },[])
    return(
        <div>
            HOLA SOY FETCHINNGE
            <div>
                {
                   dbdata
                }
            </div>
            
        </div>

    )

}

export default FetchUser

*/