import { Link } from "gatsby";
import React from "react";
/*import { window } from 'browser-monads';
*/
import './nav.css';

const Nav = () => (
        <div className="threeiinc-header">
            <div className="threeiinc-inner">
                <h1><Link to='/' className="Logo__Brand">3i INC</Link></h1>
                <nav> 
                    <Link to="/about" className="nav__link">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/contribute">Contribute</Link>
                </nav>
            </div>
        </div>

)

export default Nav