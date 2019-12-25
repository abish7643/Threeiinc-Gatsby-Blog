import React from 'react'
import './footer.css'
import foooter from '../../images/footer.jpg'

const Footer = () => {
    return (
        <footer className="footer__div">
            <div className='footer__hero' style={{backgroundImage: `linear-gradient(
            to top,
            rgba(10, 10, 10, 0.4) 10%,
            rgba(10, 10, 10, 0.9) 40%,
            rgba(10, 10, 10, 1) 100%),
            url(${foooter})`
            }}>
                3i INC
            </div>
        </footer>
    )
}

export default Footer;