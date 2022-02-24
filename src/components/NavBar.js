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
                <i class="fas fa-id-badge"></i> Profile
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to = 'contact'>   
                <i class="fas fa-envelope"></i> Contact
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to = 'portfolio'>
                <i class="fas fa-code"></i> Portfolio
                </Link>
            </Nav.Item>
        </div>
    </Nav>
    )
}

export default NavBar;