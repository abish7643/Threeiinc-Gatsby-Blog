import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import './contact.css'
import { Link } from 'gatsby'

const Thanksyou = () => (
    <Layout>
        <Nav />
            <div className='contact__header__thankyou'></div>
            <div className='thankyou__wrapper'>
                <div className='contact__thanks'>
                    <p>Welcome to the Club, Cheers Mate!</p>
                </div>
                <div className='home__button'>
                <button class='button_med'>
                    <Link to='/' className="button_med_link" style={{textDecoration: 'None', color: 'white'}}>Home</Link>
                </button>
                </div>
            </div>
            <div className='footer_wrapper_thankyou'>
            <Footer/>
            </div>
    </Layout>
)

export default Thanksyou