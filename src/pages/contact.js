import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import SEO from '../components/seo'
import Footer from '../components/footer'
import './contact.css'

const Contact = () => (
    <Layout>
        <SEO
            title='Contact - 3i INC'
            description="Contact 3i INC | 3 Idiots Incorporation | 3iinc.xyz | 3iinc |
            We Are The Fucking Idiots! Who is an Idiot?
            The one who questions the system,
            The one who doesn't like how the system works or
            The one who doesn't believe in the system."/>
        <Nav/>
        <div className='contact__header'>
        <div className='contact__section'>
            <div className='contact__form'>
                <h2>Contact Form for Idiots</h2>
                <div className='inner'>
                    <form method='post' name='contact' action='/thankyouidiot' data-netlify='true' netlify-honeypot='bot'>
                        <input type='hidden' name='form-name' value='contact'/>
                        <div className='field__hidden'>
                            <label>Don't Fill This if You aren't an Idiot</label>
                            <input name='bot'/>
                        </div>
                        <div className='field'>
                            <label>Name</label>
                            <input type='text' id='name' name='name'/>
                        </div>
                        <div className='field'>
                            <label>Email</label>
                            <input type='text' id='email' name='email'/>
                        </div>
                        <div className='field'>
                            <label>Message</label>
                            <textarea name='message' id='message' rows='6'></textarea>
                        </div>
                        <div className='submit'>
                            <button type='submit' className='btn__med'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        <div className='footer_wrapper'>
            <Footer/>
        </div>
    </Layout>
)

export default Contact