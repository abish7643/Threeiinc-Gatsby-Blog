import React from 'react'
import './footer.css'
import foooter from '../../images/footer.jpg'

const Footer = () => {
    return (
        <footer className="footer__div">
            <div className='footer__hero' style={{backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.9) 50%,
            rgba(10, 10, 10, 0.8) 100%),
            url(${foooter})`
            }}>
            </div>
        </footer>
    )
}

export default Footer;