import React, { useState } from "react";
import FichaQuebranto from "./FichaQuebranto";
import "../../../App.css"
import MenuQuebrantos from "./MenuQuebrantos";
import MenuDictamen from "./MenuDictamenes";
const MenuCredito = () =>{
    const [menucredito,setMenuCredito] = useState("");
    const [menuquebrantos, setMenuQuebrantos] = useState("");
    const [menudictamen,setMenuDictamen] = useState("");

    return(
        

     <div className="LoginForm">
        <div className="mb-3 ">
                    <button className='btn btn-sub-12'
                     type="submit"
                     onClick={() => setMenuCredito((<MenuQuebrantos />))}
                     onDoubleClick={() => setMenuCredito("")}
                     > QUEBRANTOS</button>
                </div>
                {menucredito}

                <div className="mb-3 ">

                    <button className='btn btn-sub-12'
                     type="submit"
                     onClick={() => setMenuDictamen((<MenuDictamen />))}
                     onDoubleClick={() => setMenuDictamen("")}
                     >DICTAMENES</button>

                </div>
                {menudictamen}

                <div className="mb-3 ">
                    <button className='btn btn-sub-12' type="submit ">ACLARACIONES </button>
                </div>

               
         
        
     </div>


    )
}

export default MenuCredito