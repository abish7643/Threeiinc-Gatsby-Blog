import React from 'react'
import './footer.css'


export default class Footer extends React.Component{
    state = {
        email: '',
        inputEntered: '',
        checkbox: '',
        checkboxTicked: ''
    };
    handleChange = event => {
        const isCheck = event.target.type === "check";
        this.setState({
            email: isCheck
            ? event.target.checked
            : event.target.value,
            inputEntered: '1'
            
        });
    };
    handleCheckBoxChange = event => {
        this.setState({
            checkbox: event.target.value,
            checkboxTicked: '1'
        });
    };
    handleSubmit = event => {
        event.preventDefault();
    };

    

    render() {
        let newsletterButton;
        if (this.state.inputEntered === '1' && this.state.checkboxTicked === '1'){
            newsletterButton = <button style={{ cursor: 'pointer'}} className='btn__med'>Submit</button>;
        } else {
            newsletterButton = <button className='btn__med' style={{ color: 'black', pointerEvents: 'none', cursor: 'default'}}>Submit</button>;
        }
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
                                    <input type='email' id='email' name='email'
                                    onChange={this.handleChange} value={this.state.name} placeholder='email'/>
                                </div>
                                <div style={{width: '100%'}}>
                                    <div className='newsletter__field__checkbox'>
                                        <input type='checkbox' id='checkbox' name='checkbox'
                                        onChange={this.handleCheckBoxChange} value={this.state.checkbox}
                                        style={{cursor: 'pointer', marginBottom: '30px'}}/>
                                        <p>I Acknowledge to Receive Contents from 3i INC</p>
                                    </div>
                                </div>
                                
                                <div className='newsletter__submit'>
                                    {newsletterButton}
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