import React, { useState } from "react"

import './css/Sidemenu.css'

 import 'bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function Sidemenu() {

  const [border, setBorder] = useState("#fafafa");

      const appStyles = {
            border: `2px solid ${border}`,
          };

    
    return (
     <>
    <div className="container-fliud sidebar-container" style={appStyles}>
       
        <Navbar >
           
           <Nav className="left-menu flex-column">
               <Nav.Item>
                  <Link to="/Dashboard"><i className="bi bi-columns-gap"></i>  Dashboard</Link>
                </Nav.Item>  
                <Nav.Item >
                <Link to="/GeneratedIds"><i className="bi bi-card-checklist"></i> View / Generate ID</Link></Nav.Item>
                
                <div style={{width: '50%'}}>
            
            <i className="bi bi-back" style={{ fontSize: '30px', justifyContent: 'end', float: 'right'}} onMouseEnter={() => setBorder("#31b347")} onMouseLeave={() => setBorder("#fafafa")}></i>
    </div>
                   
                   
                
           </Nav>
         </Navbar>
        
     
    
     
     </div>
     </>
    );
  }
  
  export default Sidemenu;