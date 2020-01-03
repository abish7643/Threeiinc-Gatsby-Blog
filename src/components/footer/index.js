import React from 'react'
import './footer.css'
import foooter from '../../images/footer.jpg'
import Link from 'gatsby'

const Footer = () => {
    return (
        <footer className="footer__div">
            <div className='footer__hero' style={{backgroundImage: `linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(10, 10, 10, 0.5) 50%,
            rgba(10, 10, 10, 0.3) 100%),
            url(${foooter})`
            }}>
            <div className='footer__contents'>
                <div className='newsletter__form'>
                    <p>Subscribe for Newsletter</p>
                    <div className='newsletter__inner'>
                        <form method='post' name='newsletter' action='/thankyouidiot' data-netlify='true' netlify-honeypot='bot'>
                            <input type='hidden' name='form-name' value='newsletter'/>
                            <div className='newsletter__field__hidden'>
                                <label>Don't Fill This if You aren't an Idiot</label>
                                <input name='bot'/>
                            </div>
                            <div className='newsletter__field'>
                                <p>Email</p>
                                <input type='text' id='email' name='email' placeholder='email'/>
                            </div>
                            <div className='newsletter__field__checkbox'>
                                <input type='checkbox' id='1' name='acknowledgement'/>
                                <p>I Acknowledge to Receive Contents from 3i INC</p>
                            </div>
                            <div className='newsletter__submit'>
                                <button type='submit' className='btn__med'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='threeiinc__header'>
                    3i INC
                    <p>Idiots by Choice</p>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;