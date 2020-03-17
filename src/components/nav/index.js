import { Link } from "gatsby";
import React from "react";
/*import { window } from 'browser-monads';
*/
import './nav.css';

const Nav = () => (
        <div className="threeiinc-header">
            <div className="threeiinc-inner">
                <h1><Link to='/' className="Logo__Brand" style={{textDecoration: 'None'}}>3i INC</Link></h1>
                <nav className='nav__links'> 
                    <Link to="/about" className="nav__link" style={{textDecoration: 'None'}}>About</Link>
                    <Link to="/contact" style={{textDecoration: 'None'}}>Contact</Link>
                    <Link to="/idiots" style={{textDecoration: 'None'}}>Contribute</Link>  
                </nav>
            </div>
            <a href='https://3iinc.xyz/blog/'
                        style={{opacity: '0', fontSize: '1px'}}
                    >Blog</a>
                    <a href='https://3iinc.xyz/idiots/'
                        style={{opacity: '0', fontSize: '1px'}}
                    >Authors</a>
        </div>

)

export default Nav