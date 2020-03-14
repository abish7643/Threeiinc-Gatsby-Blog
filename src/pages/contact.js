import React from 'react'
import Layout from '../components/layout'
import NavBlackText from '../components/navBlackText'
import SEO from '../components/seo'
import Footer from '../components/footer'
import './contact.css'
import about from '../images/about.jpg'

const navStyle = {
    backgroundColor: '#fff',

}
const bodyStyle = {
    backgroundColor: "#F0F0F0"
}
const contactLeft={
    backgroundImage: `url(${about})`,
}

const Contact = () => (
    <Layout >
        <SEO
            title='Contact 3i INC | 3 Idiots Incorporation'
            description="Who is an Idiot?
            The one who questions the system,
            The one who doesn't like how the system works or
            The one who doesn't believe in the system. | 3iinc.xyz | 3iinc" />
        <NavBlackText className='nav__contact'/>
        <div className='contact__section' style={bodyStyle}>
            <div className='contact__container'>
                <div className='contact__container__left' style={contactLeft}>

                </div>
                <div className='contact__container__right'>
                    <h1>CONTACT</h1>
                    <div className='contact__container__right__inner'>
                    <form method='post' name='contact' action='/thankyouidiot' data-netlify='true' netlify-honeypot='bot'>
                        <input type='hidden' name='form-name' value='contact'/>
                        <div className='field__hidden'>
                            <label>Don't Fill This if You aren't an Idiot</label>
                            <input name='bot'/>
                        </div>
                        <div className='field'>
                            <input className='name__field' placeholder='NAME' type='text' id='name' name='name'/>
                        </div>
                        <div className='field'>
                            <input className='email__field' placeholder='EMAIL' type='text' id='email' name='email'/>
                        </div>
                        <div className='field'>
                            <textarea className='message__field' placeholder='MESSAGE' name='message' id='message' rows='6'></textarea>
                        </div>
                            <button type='submit' className='contact__submitbutton'>SUBMIT</button>
                    </form>
                </div>
                </div>
            </div>
            <div className='footer__contact'>
            <div className='footer__contact__container'>
                <div className='footer__contact__container__flex'>
                <div className='footer__contact__one'>
                    <h1>3i INC</h1>
                    <h3>3 IDIOTS INCORPORATION</h3>
                    <p>
                        Each I is 3I is intricately designed to match the natural genetic code, the imaginary number of complex world, the structural integrity of the strongest bridge, the quintessential paragon of the contemporary universe.
                    </p>
                </div>
                <div className='footer__contact__two'>
                    <h2>STAY CONNECTED</h2>
                    <a href='https://www.instagram.com/3i.inc/' target="_blank">Follow us on Instagram</a><br/>
                    <a href='https://www.instagram.com/3i.inc/' target="_blank">Follow us on Facebook</a><br/>
                    <a href='https://www.instagram.com/3i.inc/' target="_blank">Follow us on Blank</a><br/>
                </div>
                <div className='footer__contact__three'>
                    <h2>CONTACT INFO</h2>
                    <h4>3i INC<br/>
                        SOMEWHERE ON EARTH<br/>
                        GREEN GRASS, RED SOIL<br/>
                        admin@3iinc.xyz</h4>
                </div>
            </div>
        </div>
        </div>
        </div>
        
    </Layout>
)

export default Contact