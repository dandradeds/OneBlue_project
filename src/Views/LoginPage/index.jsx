import React, { useState, useContext } from 'react';

import { AuthContext } from "../../contexts/auth"



import iconLogo from "../../Assets/oneblue.png"
import "./style.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const LoginPage = () => {
  const { authenticated, login} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password })
    login(email, password)
  }
    return (
        <div id="login">
          <img src={iconLogo} alt="logo" />
            <form className="form" onSubmit={handleSubmit}>
            <h1 className="title">Sing in</h1>
            <div className="field">
              <label htmlFor="usuario">Username</label>
              <TextField type="usuario" variant="outlined" size="small" fullWidth  name='usuario' id='usuario' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <TextField type="password" variant="outlined" size="small"  fullWidth  name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="actions" style ={{ width:'200px',display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:"center", marginLeft:'65px'}}>
              <Button variant="contained" type='submit'> Sing in </Button>
              <Button variant="contained" type='submit'> Sing up </Button> 
            </div>
          </form>
          <div className="ResetSenha">
             <a class="font-normal" href="/forgotPassword">I forgot my password</a>
          </div>
        </div>
      );
}
 
export default LoginPage;