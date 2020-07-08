import React from "react"
import { Link } from "gatsby"
import "./footer.css"

export default class Footer extends React.Component {
    state = {
        email: "",
        inputEntered: ""
    }
    handleChange = event => {
        const isCheck = event.target.type === "check"
        this.setState({
            email: isCheck ? event.target.checked : event.target.value,
            inputEntered: "1",
        })
    }
    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        let newsletterButton
        if (
            this.state.inputEntered === "1"
        ) {
            newsletterButton = (
                <button style={{ cursor: "pointer" }} className="btn__med">
                    Submit
                </button>
            )
        } else {
            newsletterButton = (
                <button
                    className="btn__med"
                    style={{
                        color: "#eeeeee",
                        pointerEvents: "none",
                        cursor: "default",
                    }}
                >
                    Subscribe
                </button>
            )
        }
        return (
            <footer className="footer__div">
                <div
                    className="footer__hero"
                    style={{
                        background: "#2B2C31",
                    }}
                >
                    <div className="footer__contents">
                        <div className="newsletter__form">
                            <p>Want to keep up with the latest posts? Subscribe to our newsletter!</p>
                            <div className="newsletter__inner">
                                <form
                                    name="newsletter"
                                    id="newsletter"
                                    action="/thankyouidiot/"
                                    data-netlify="true"
                                    netlify-honeypot="bot"
                                >
                                    <input
                                        type="hidden"
                                        name="form-name"
                                        value="newsletter"
                                    />
                                    <div className="newsletter__field__hidden">
                                        <label>
                                            Don't Fill This if You aren't an
                                            Idiot
                                        </label>
                                        <input name="bot" />
                                    </div>
                                    <div className="newsletter__field">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            placeholder="email"
                                        />
                                    </div>
                                    <div className="newsletter__submit">
                                        {newsletterButton}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="threeiinc__header">
                            <Link to="/" style={{
                                textDecoration: "none",
                            }}>
                            
                            <p style={{
                                textDecoration: "none",
                                fontSize: '40px',
                                marginBottom: "16px",
                            }}>3i INC</p>

                            <p>Idiots by Choice</p>
                            
                            <p
                                style={{
                                    fontSize: "12px",
                                    marginTop: "-5px",
                                    backgroundColor: "whitesmoke",
                                    color: "black",
                                }}
                            >
                                Stay Home, Play Safe & Save The World
                                #BreakTheChain
                            </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
