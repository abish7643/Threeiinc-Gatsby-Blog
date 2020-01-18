import React from 'react'
import './footer.css'
import foooter from '../../images/footer.jpg'
import Link from 'gatsby'
import Particles from 'react-particles-js'


const Footer = () => {
    return (
        <footer className="footer__div"> 
            <div className='footer__hero' style={{
                background: 'rgb(2,0,36)',
                backgroundImage: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(8,75,128,0.30012554950024706) 33%, rgba(80,124,133,1) 98%)',
            }}>
            <Particles style={{position: 'absolute', zIndex: '-1', top: '0', left: '0',}} params={{
        particles: {
          move: {
            speed: 3,
          },
          size: {
            value: 3,
          },
          color:{
            value: "#ffffff"
        },
        number: {
            value: 20
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
        },
        interactivity: {
            events: {
                onhover:{
                    enable: true,
                    mode: 'push'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                }
            },
        },
        
      }}/>  
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
                            
                                <input type="reset" value="Clear" style={{background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', cursor:'pointer', marginRight: '30px', color: 'white', fontSize: '10px', fontFamily: 'poppins', fontWeight: '900'}} />
                        
                            <div className='newsletter__field__checkbox'>
                                <input type='checkbox' id='1' name='acknowledgement' style={{cursor: 'pointer'}}/>
                                <p>I Acknowledge to Receive Contents from 3i INC</p>
                            </div>
                            <div className='newsletter__submit'>
                                <div data-netlify-recaptcha="true"></div>
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