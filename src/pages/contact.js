import React from 'react'
import Layout from '../components/layout'
import NavBlackText from '../components/navBlackText'
import SEO from '../components/seo'
import './contact.css'
import about from '../images/about.jpg'
import {TumblrIcon, PinterestIcon} from "react-share";

const iconProp = {
    size: 26,
    round: true,
    bgStyle: {opacity: '1',
    },
    iconFillColor: 'white',
}

const contactLeft={
    backgroundImage: `url(${about})`,
}

export default class Contact extends React.Component{
    state = {
        contactName: '',
        contactnameinputEntered: '',
        contactEmail: '',
        contactemailinputEntered: '',
        contactMessage: '',
        contactmessageinputEntered: '',
    };
    handleContactChange = event => {
        this.setState({
            contactEmail: event.target.value,
            contactemailinputEntered: '1'
        });
    };
    handleContactNameChange = event => {
        this.setState({
            contactName: event.target.value,
        });
        if (this.state.contactName !== ''){
            this.setState({
                contactnameinputEntered: '1'
            })
        }
    };
    handleContactMessageChange = event => {
        this.setState({
            contactMessage: event.target.value,
            contactmessageinputEntered: '1'
        });
    };

    handleContactSubmit = event => {
        event.preventDefault();
    };

    

    render() {
        let contactButton;
        console.log(this.state.contactemailinputEntered)
        if (this.state.contactemailinputEntered === '1' &&
            this.state.contactnameinputEntered === '1' &&
            this.state.contactmessageinputEntered === '1'){
            
            contactButton = <button className='contact__submitbutton'>SUBMIT</button>;
        } else {
            contactButton = <button style={{pointerEvents: 'none', cursor: 'default'}}
                            className='contact__submitbutton'>SUBMIT
                            </button>;
        }
        return (
            <Layout>
            
            <SEO
                title='Contact 3i INC | 3 Idiots Incorporated.'
                description="Who is an Idiot?
                The one who questions the system,
                The one who doesn't like how the system works or
                The one who doesn't believe in the system. | 3iinc.xyz | 3iinc" />
            <div className='nav__contact__wrapper'>
                <NavBlackText/>
            </div>
            <div className='contact__section'>
                <div className='contact__container'>
                    <div className='contact__container__left' loading='lazy' style={contactLeft}>
    
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
                                <input className='name__field' placeholder='NAME'
                                onChange={this.handleContactNameChange} value={this.state.contactName}
                                type='text' id='name' name='name'/>
                            </div>
                            <div className='field'>
                                <input className='email__field'
                                onChange={this.handleContactChange} value={this.state.contactEmail}
                                placeholder='EMAIL' type='email' id='email' name='email'/>
                            </div>
                            <div className='field'>
                                <textarea className='message__field' placeholder='MESSAGE'
                                onChange={this.handleContactMessageChange} value={this.state.contactMessage}
                                name='message' id='message' rows='6' pattern='.*\S.*'></textarea>
                            </div>
                                {contactButton}
                        </form>
                    </div>
                    </div>
                </div>
                <div className='footer__contact'>
                <div className='footer__contact__container'>
                    <div className='footer__contact__container__flex'>
                    <div className='footer__contact__one'>
                        <h1>3i INC</h1>
                        <h3>3 IDIOTS INCORPORATED.</h3>
                        <p>
                            Each I in 3I is intricately designed to match the natural genetic code, the imaginary number of complex world, the structural integrity of the strongest bridge, the quintessential paragon of the contemporary universe.
                        </p>
                    </div>
                    <div className='footer__contact__two'>
                        <h2>STAY CONNECTED</h2>
                        <a href='https://www.instagram.com/3i.inc/' style={{marginLeft: '32px', padding: '0px 5px', display: 'inline-block'}} target="_blank">
                            Follow us on Instagram</a><br/>
                        <a href='https://www.pinterest.com/3iinc/' target="_blank" style={{padding: '0px 5px', display: 'inline-block'}}>
                            <TumblrIcon style={{padding: '3px',marginBottom: '-9px'}} {...iconProp} />Follow us on PinInterest</a><br/>
                        <a href='https://www.tumblr.com/blog/3i-inc' target="_blank" style={{padding: '0px 5px', display: 'inline-block'}}>
                            <PinterestIcon  style={{padding: '3px', marginBottom: '-9px'}} {...iconProp} />Follow us on Tumblr</a><br/>
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
    }
}