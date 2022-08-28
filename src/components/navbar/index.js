import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <h3>
                <Link to='/'>Messanger</Link>
            </h3>
            <div>
                
                <Link to={'/'}>Log out</Link>
            </div>
        </nav>
    );
};



export default Navbar;