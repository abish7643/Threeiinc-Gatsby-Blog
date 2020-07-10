import React from "react"
import { Link } from "gatsby"
import "./footer.css"
import {
    FacebookIcon,
    TwitterIcon,
    TumblrIcon,
    PinterestIcon
} from "react-share"

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
        const iconProp = {
            size: 36,
            round: false,
            bgStyle: { opacity: "0.2" },
            iconFillColor: "black",
        }
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
                        background: "#eee",
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
                        <div className="footer__contact__one">
                            <Link style={{textDecoration: 'none'}} to="/">
                                <h1 
                                style=
                                {{  textDecoration: 'none'
                                }}>
                                    3i INC
                                    </h1>
                            </Link>
                            <h3>3 Idiots Incorporated.</h3>
                            <p>
                                Each I in 3I is intricately designed to
                                match the natural genetic code, the
                                imaginary number of complex world, the
                                structural integrity of the strongest
                                bridge, the quintessential paragon of
                                the contemporary universe.
                            </p>
                            
                            <div
                            className="socialbuttons__footer"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-easing="ease"
                            >
                        <a href="https://www.instagram.com/3i.inc/" target="_blank" rel="noopener noreferrer">
                        
                        <svg className="icon" viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg">
                            <path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0"/><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0"/><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0"/>
                        </svg>
                        </a>
                        <a href="https://www.facebook.com/admin.threei.1/" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon {...iconProp} />
                        </a>
                        <a href="https://www.twitter.com/inc_3i/" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon {...iconProp} />
                        </a>
                        <a href="https://www.tumblr.com/blog/3i-inc/" target="_blank" rel="noopener noreferrer">
                            <TumblrIcon {...iconProp} />
                        </a>
                        <a href="https://www.pinterest.com/3iinc/" target="_blank" rel="noopener noreferrer">
                            <PinterestIcon {...iconProp} />
                        </a>
                        </div>
                    
                        </div>
                        
                    </div>
                    
                </div>
                
            </footer>
            
        )
    }
}
