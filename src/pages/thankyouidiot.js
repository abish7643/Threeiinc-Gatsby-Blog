import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import './contact.css'
import { navigate } from 'gatsby'


const Thanksyou = () => (
    <Layout>
        <Nav />
            <div className='thankyou__wrapper'>
                <div className='contact__thanks'>
                    <p>Welcome to the Club, Cheers Mate!</p>
                </div>
                <div className='home__button'>
                <button class='button_med' onClick={() => navigate(`/`)}>
                    Home
                </button>
                </div>
            </div>
    </Layout>
)

export default Thanksyou