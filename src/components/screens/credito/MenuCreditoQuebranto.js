import React, { useState } from "react";
import FichaQuebranto from "./FichaQuebranto";
import MenuFichasPerdida from "./MenuFichaPerdida";

const MenuCreditoQuebranto = () =>{
    const [ficha,setFicha] = useState("");
    const [menufichasperdida,setMenuFichasPerdida] = useState("");



    return(

        <div className="row justify-content-center tools">
   

        <div className="Reporter-Form">


        <div className="mb-3 ">
                <button className='btn btn-sub-12'
                type="submit"
                onClick={() => setFicha((<FichaQuebranto />))}
                onDoubleClick = {() => setFicha("")}
                >FICHA QUEBRANTO CREDITO</button>
                    {ficha}
            </div>
            
            <div className="mb-3 ">
                <button className='btn btn-sub-12'
                 type="submit"
                 onClick={() => setMenuFichasPerdida((<MenuFichasPerdida />))}
                 >FICHA EVENTO PERDIDA</button>
                 {menufichasperdida}
            </div>



            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">REGISTRO</button>
            </div>
            <div className="mb-3 ">
                <button className='btn btn-sub-12' type="submit ">ANEXO</button>
            </div>




          

        </div>
    
    </div>

    )
}

export default MenuCreditoQuebranto