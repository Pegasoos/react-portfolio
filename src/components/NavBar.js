import React from 'react';
 import { Link } from 'react-router-dom';
 import { Nav } from 'react-bootstrap';

function NavBar(){

    return(
    <Nav className = "navbar navbar-expand">
        <div id = "logo">
            N.W. Anthony
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <Nav.Item>
                <Link to = '/'>
                <i className="fas fa-id-badge"></i> Profile
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to = 'contact'>   
                <i className="fas fa-envelope"></i> Contact
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to = 'portfolio'>
                <i className="fas fa-code"></i> Portfolio
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to = 'resume'>
                    My Resume <i className="fas fa-file-pdf"></i>
                </Link>
            </Nav.Item>
        </ul>
        </div> 
    </Nav>
    )
}

export default NavBar;