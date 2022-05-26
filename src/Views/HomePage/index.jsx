import React, { useContext } from 'react';
import construction from "../../Assets/construction.PNG"

import "./style.css"

import { AuthContext } from '../../contexts/auth';

const HomePage = () => {
  const { authenticated ,logout } = useContext(AuthContext)

  const handleLogout  = () => {
    logout()

  }
    return (
      <>
      <div className="imagem">
        <img src={construction} alt="construction" />
      </div>
      <button onClick={handleLogout}>Click here to get out</button>
      </>
        
      );
}
 
export default HomePage;