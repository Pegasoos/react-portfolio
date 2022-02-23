import React from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { Nav } from 'react-bootstrap';

function NavBar(){
    const location = useLocation();

    return(
    <Nav>
        <div>
            N.W. Anthony
        </div>
        <div>
            <Nav.Item>
                <Link to = '/'>
                Profile
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to = 'contact'>
                Contact
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to = 'portfolio'>
                Portfolio
                </Link>
            </Nav.Item>
        </div>
    </Nav>
    )
}

export default NavBar;