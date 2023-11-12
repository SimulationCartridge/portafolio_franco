import React from "react";
import Navbar from "./navbar";

function Header () {
    return(
        <div className="fullscreen">
            <Navbar />
        <header className="header-container">  
        <div>  
          <h1 className="name">Franco Reyes</h1>
          <h3 className="position">Fotografo</h3>
          </div> 
        </header>
        </div> 
    )
}

export default Header;