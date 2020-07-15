import React from "react"
import Layout from "../components/layout"
import NavBlackText from "../components/navBlackText"
import SEO from "../components/seo"
import "./contact.css"
import Image from "../components/image"
import Footer from "../components/footer"

export default class Contact extends React.Component {
    state = {
        contactName: "",
        contactnameinputEntered: "",
        contactEmail: "",
        contactemailinputEntered: "",
        contactMessage: "",
        contactmessageinputEntered: "",
        formStartedToFill: false,
    }
    handleContactChange = (event) => {
        this.setState({
            contactEmail: event.target.value,
            contactemailinputEntered: "1",
        })
    }
    handleContactNameChange = (event) => {
        this.setState({
            contactName: event.target.value,
        })
        if (this.state.contactName !== "") {
            this.setState({
                contactnameinputEntered: "1",
            })
        }
    }
    handleContactMessageChange = (event) => {
        this.setState({
            contactMessage: event.target.value,
            contactmessageinputEntered: "1",
        })
        this.state.formStartedToFill = true
    }

    handleContactSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        let contactButton
        console.log(this.state.contactemailinputEntered)
        if (
            this.state.contactemailinputEntered === "1" &&
            this.state.contactnameinputEntered === "1" &&
            this.state.contactmessageinputEntered === "1" &&
            this.state.contactName !== "" &&
            this.state.contactEmail !== "" &&
            this.state.contactMessage !== ""
        ) {
            contactButton = (
                <button className="btn__med" style={{ marginTop: "24px" }}>
                    SUBMIT
                </button>
            )
        } else {
            contactButton = (
                <button
                    className="btn__med__inactive"
                    style={{
                        marginTop: "24px",
                        pointerEvents: "none",
                        cursor: "none",
                    }}
                >
                    SUBMIT
                </button>
            )
        }
        return (
            <Layout>
                <SEO
                    title="Contact 3i"
                    description="Who is an Idiot?
                The one who questions the system,
                The one who doesn't like how the system works or
                The one who doesn't believe in the system. | 3iinc.xyz | 3iinc"
                    url="https://3iinc.xyz/contact/"
                />
                <div className="nav__contact__wrapper">
                    <NavBlackText />
                </div>
                <div className="contact__section">
                    <div className="contact__container">
                        <div className="contact__container__left">
                            <Image />
                        </div>
                        <div className="contact__container__right">
                            <h1
                                className="contact__container__right__heading"
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-easing="ease-in-out"
                            >
                                Contact Us
                            </h1>
                            <div
                                className="contact__container__right__inner"
                                data-sal="fade"
                                data-sal-delay="300"
                                data-sal-easing="ease-in-out"
                            >
                                <form
                                    method="post"
                                    name="contact"
                                    action="/thankyouidiot/"
                                    data-netlify="true"
                                    netlify-honeypot="bot"
                                >
                                    <input
                                        type="hidden"
                                        name="form-name"
                                        value="contact"
                                    />
                                    <div className="field__hidden">
                                        <label>
                                            Don't Fill This if You aren't an
                                            Idiot
                                        </label>
                                        <input name="bot" />
                                    </div>
                                    <div className="field">
                                        <input
                                            className="name__field"
                                            placeholder="NAME"
                                            onChange={
                                                this.handleContactNameChange
                                            }
                                            value={this.state.contactName}
                                            type="text"
                                            id="name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            className="email__field"
                                            onChange={this.handleContactChange}
                                            value={this.state.contactEmail}
                                            placeholder="EMAIL"
                                            type="email"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="field">
                                        <textarea
                                            className="message__field"
                                            placeholder="MESSAGE"
                                            onChange={
                                                this.handleContactMessageChange
                                            }
                                            value={this.state.contactMessage}
                                            name="message"
                                            type="message"
                                            id="message"
                                            rows="5"
                                            pattern=".*\S.*"
                                        ></textarea>
                                    </div>
                                    <div className="contact__submit__btn__container">
                                        {contactButton}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Layout>
        )
    }
}
