import { Link } from "gatsby";
import React from "react";
/*import { window } from 'browser-monads';
*/
import './navBlackText.css';

const NavBlackText = () => (
        <div className="threeiinc-header-black">
            <div className="threeiinc-inner-black">
                <h1><Link to='/' className="Logo__Brand__black" style={{textDecoration: 'None'}}>3i INC</Link></h1>
                <nav className='nav__links__black'> 
                    <Link to="/about" className="nav__link__black" style={{textDecoration: 'None'}}>About</Link>
                    <Link to="/contact" style={{textDecoration: 'None'}}>Contact</Link>
                    <Link to="/contribute" style={{textDecoration: 'None'}}>Contribute</Link>
                    <a href='https://3iinc.xyz/blog/'
                        style={{opacity: '0', fontSize: '1px'}}
                    >Blog</a>
                </nav>
            </div>
        </div>

)

export default NavBlackText