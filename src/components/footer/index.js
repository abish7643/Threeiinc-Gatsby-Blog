import React from 'react'
import './footer.css'


export default class Footer extends React.Component{

    render() {
        return (
            <footer className="footer__div"> 
                <div className='footer__hero' style={{
                    background: '#2B2C31',
                    }}>  
                <div className='footer__contents'>
                    <div className='newsletter__form'>
                        <p>Subscribe for Newsletter</p>
                        <div className='newsletter__inner'>
                            <form name='newsletter' id='newsletter' 
                            action='/thankyouidiot' data-netlify='true' netlify-honeypot='bot'>
                                <input type='hidden' name='form-name' value='newsletter'/>
                                <div className='newsletter__field__hidden'>
                                    <label>Don't Fill This if You aren't an Idiot</label>
                                    <input name='bot'/>
                                </div>
                                <div className='newsletter__field'>
                                    <input type='email' id='email' name='email' pattern=".*\S.*"
                                    placeholder='email'/>
                                </div>
                                <div style={{width: '100%'}}>
                                    <div className='newsletter__field__checkbox'>
                                        <input type='checkbox' id='checkbox' name='checkbox' style={{cursor: 'pointer', marginBottom: '30px'}}/>
                                        <p>I Acknowledge to Receive Contents from 3i INC</p>
                                    </div>
                                </div>
                                
                                <div className='newsletter__submit'>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} data-netlify-recaptcha="true"></div>
                                    
                                    <button type='submit' className='btn__med' >Submit</button>
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
}