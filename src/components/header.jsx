import React from "react";
import Navbar from "./navbar";

function Header () {
    return(
        <div className="fullscreen">
            <Navbar />
        <header className="header-container">  
        <div className="name-person">  
          <h1 className="h1-name">Franco Reyes</h1>
          <h3 className="h3-position">Fotografo</h3>
          </div> 
        </header>
        </div> 
    )
}

export default Header;