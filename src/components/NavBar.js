import React from 'react';
 import { Link } from 'react-router-dom';
 import { Nav } from 'react-bootstrap';

function NavBar(){

    return(
    <Nav>
        <div>
            N.W. Anthony
        </div>
        <div>
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
        </div>
    </Nav>
    )
}

export default NavBar;