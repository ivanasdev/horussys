import React, { useState } from "react";
import FichaQuebranto from "./FichaQuebranto";
import MenuCreditoQuebranto from "./MenuCreditoQuebranto";

const MenuQuebrantos = () =>{
     const [menuquebrantos,setMenuQuebranto] = useState("");
    return(

        <div className="LoginForm">
            
        <div className="mb-3 ">
                    <button className='btn btn-sub-12'
                     type="submit"
                     onClick={() => setMenuQuebranto((<MenuCreditoQuebranto />))}
                     onDoubleClick={() => setMenuQuebranto("")}
                     >QUEBRANTOS CREDITO</button>
                </div>
                {menuquebrantos}
                <div className="mb-3 ">
                    <button className='btn btn-sub-12' type="submit ">QUEBRANTOS AHORRO</button>
                </div>
                <div className="mb-3 ">
                    <button className='btn btn-sub-12' type="submit ">QUEBRENTOS SPEI </button>
                </div>
          
                
         
        
     </div>

    )
}

export default MenuQuebrantos