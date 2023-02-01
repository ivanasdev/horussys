import React, { useState} from 'react';
import './App.css';

import LoginForm from './components/screens/users/Loginform';
import md5 from "md5";

import AdminUser from './components/access/administrator/adminuser';




function App() {

  const adminUser = {
    email:"admin@horus.com",
    password:"admin"
  }


  const [user,setUser]=useState({name:"",email:"",password:""});
  const [error,setError]= useState("");
  
  const Login = userinfo => {
    if(userinfo.email === adminUser.email  && userinfo.password === adminUser.password ){
      setUser({
        name:userinfo.name,
        email:userinfo.email,
        password:userinfo.password
      })
      console.log(userinfo.name,userinfo.email,md5(userinfo.password ) );
    }
    else{
      if(userinfo.password== "admin" ){
        console.log("ADMIN")
   
        
      }
      else{
        console.log("SUCCESSFULL LOGIN");
        console.log(userinfo.name,userinfo.email,md5(userinfo.password ));
      }

    }
  }
  
  return (
    <div className="App">
      <div className="container-fluid">

        
        {(user.email != "") ? (
       
        
              <AdminUser />
         
      
          ) :(
   

            <LoginForm  Login={Login} error={error}/>
        

          ) }


     

      </div>
      <div>
  
      </div>

    </div>
  );
}

export default App;
