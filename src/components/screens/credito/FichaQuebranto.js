import React from "react";
import HLogo from "../../assets/img/hor.png";

const FichaQuebranto = () => {
    return(

        <div className="Quebranto-Form row justify-content-center tools">
        <form className="form-label" >


       
                <p>HORUS</p>
                <h3>FICHA DE QUEBRANTOS</h3>
                <img src={HLogo} alt="" width="290" height="90" className="HLogo" />
               <br />
          

            <div className="LabelsLogin">
                <div className="container">
                    
                
                <div className="row">
                <div className="col-sm ">
                    <label className="tit1">FOLIO</label>
                    <input type="text"
                        className="form-control inputlogin "
                       /* name="name"
                        value={userinfo.name}
                        onChange={e => setUserinfo({ ...userinfo, name: e.target.value })}*/
                    />

                </div>
                <div className="col-sm  ">
                    <label className="tit1">FECHAS CREDITO</label>
                    <h6>Originaci&oacute;n de cr&eacute;dito</h6>
                    <input type="date"
                        className="form-control inputlogin "
                    />   
                    <h6>Fecha de ocurrencia</h6>
                       <input type="date"
                        className="form-control inputlogin "
                    />
                     <h6>Fecha de detecci&oacute;n</h6>
                       <input type="date"
                        className="form-control inputlogin "
                    />
                </div>
                    
            

                <div className="col-sm  ">
                    <label className="tit1">SUB CATEGORIA</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>

                
                <div className="col-sm  ">
                    <label className="tit1">ENTIDAD</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                
                <div className="col-sm  ">
                    <label className="tit1">PRODUCTO</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                
                <div className="col-sm  ">
                    <label className="tit1">PROCESO</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                
                <div className="col-sm  ">
                    <label className="tit1">CENTRO DE COSTOS </label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                      
                <div className="col-sm  ">
                    <label className="tit1">DESCRIPCI&Oacute;N </label>
                    <textarea type="text"
                        className="form-control inputlogin "
                    />
                </div>

                <div className="col-sm  ">
                    <label className="tit1">Monto Inicial del Quebranto</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>

                <div className="col-sm  ">
                    <label className="tit1">Monto total de perdida</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>

                <div className="col-sm  ">
                    <label className="tit1">Saldo de Capital</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>

                <div className="col-sm">
                    <label className="tit1">Saldo de interes</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                <div className="col-sm">
                    <label className="tit1">Saldo de IVA</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>

                <div className="col-sm">
                    <label className="tit1">Clientes Involucrados</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                <div className="col-sm">
                    <label className="tit1">Nombre(s) Cliente</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                <div className="col-sm">
                    <label className="tit1">ID Cliente</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>

                <div className="col-sm">
                    <label className="tit1">ID Cuenta</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                <div className="col-sm">
                    <label className="tit1">ID Contrato</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>

                <div className="col-sm">
                    <label className="tit1">Clientes restantes</label>
                    <input type="text"
                        className="form-control inputlogin "
                    />
                </div>
                </div>
                </div>
     




            </div>
      
            <button className='btn btn-sub-1' type="submit ">GUARDAR</button>
        </form>
    </div>

    )
}

export default FichaQuebranto