import React from "react"
import Layout from "../components/layout"
import NavBlackText from "../components/navBlackText"

import "./contact.css"
import { navigate } from "gatsby"
const textHighlight = {
    borderBottom: "rgb(189, 0, 61) 1.5px solid",
}

const Thanksyou = () => (
    <Layout>
        <NavBlackText />
        <div className="thankyou__wrapper">
            <div
                className="contact__thanks"
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease"
            >
                <p>
                    <span>Welcome to the Club</span>
                    <br />
                    <span style={textHighlight}>Cheers Mate!</span>
                </p>
            </div>
            <div className="home__button">
                <button
                    className="button_med"
                    data-sal="fade"
                    data-sal-delay="300"
                    data-sal-easing="ease-in"
                    onClick={() => navigate(`/`)}
                >
                    Home
                </button>
            </div>
        </div>
    </Layout>
)

export default Thanksyou
