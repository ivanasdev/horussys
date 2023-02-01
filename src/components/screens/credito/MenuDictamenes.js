import React, { useState } from "react";
import FichaDictamen from "./FichaDictamen";

const MenuDictamen = () => {
    const [fichadictamen,setFichaDictamen]= useState("")
    return(
        <div className="row justify-content-center tools">
   

        <div className="Reporter-Form">

          
        <div className="mb-3 ">
                <button className='btn btn-sub-12'
                 type="submit "
                 onClick={() => setFichaDictamen((<FichaDictamen />))}
                 onDoubleClick={() => setFichaDictamen("")}

                 > FICHA DICTAMEN</button>
            </div>
            {fichadictamen}

        <div className="mb-3 ">
                <button className='btn btn-sub-12'
                type="submit"
             
                > DICTAMENES PRELIMINARES</button>
                  
            </div>
        </div>
    
    </div>



    )
}

export default MenuDictamen