import React, { useState } from "react";
import HLogo from "../../assets/img/hor.png"

const LoginForm = ({ Login, error }) => {
    //console.log(md5("1235"))

    const [userinfo, setUserinfo] = useState({ name: "", email: "", password: ""});


    const submitHandler = e => {
        e.preventDefault();

        if(userinfo.password==""){
            console.log("EMPTY EMPTY")
    
        }

        Login(userinfo);
        }

    return (
        <div className=" ">
            <div className="LoginForm ">
                <form className="form-label" onSubmit={submitHandler}>

               
                        <p>HORUS</p>
                        <img src={HLogo} alt="" width="290" height="90" className="HLogo" />
                       <br />
                  

                    <div className="LabelsLogin">
                        <div className="mb-3 ">
                            <label className="tit1">NAME</label>
                            <input type="text"
                                className="form-control inputlogin "
                                name="name"
                                value={userinfo.name}
                                onChange={e => setUserinfo({ ...userinfo, name: e.target.value })}
                            />

                        </div>
                    </div>
                    <div className="mb-3 ">
                        <label className="tit1">EMAIL</label>

                        <input type="text"
                            className="form-control inputlogin "
                            name="email"
                            value={userinfo.email}
                            onChange={e => setUserinfo({ ...userinfo, email: e.target.value })}
                        />

                    </div>

                    <div className="mb-3 ">
                        <label className="tit1">PASSWORD</label>
                        <input type="password"
                            name="password"
                            className="form-control inputlogin"
                            value={userinfo.password}
                            onChange={e => setUserinfo({ ...userinfo, password: e.target.value })}
                        />

                    </div>
                    <button className='btn btn-sub-1' type="submit ">INICIA SESI&Oacute;N</button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm