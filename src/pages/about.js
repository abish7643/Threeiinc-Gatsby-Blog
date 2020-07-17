import React from "react"
import SEO from "../components/seo"
import NavBlackText from "../components/navBlackText"
import Layout from "../components/layout"
import "./index.css"

const textHighlight = {
    borderBottom: "rgb(189, 0, 61) 1.5px solid",
}

export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <SEO
                    title="About Us"
                    description="Who's an Idiot? The one who questions the system,
                    The one who doesn't like how the system works or
                    The one who doesn't believe in the system.
                    We Are The Fucking Idiots! | 3iinc.xyz"
                    url="https://3iinc.xyz/about/"
                    keywords="3iinc, idiots, 3i, INC, 3 Idiots Incorporation, 3 Idiots Incorporated, 3 Idiots, Blog, Articles, Rogue, Idiot, Choice"
                />

                <NavBlackText />
                <div className="about__hero__div">
                    <div className="about__hero__div__inner">
                        <div className="about__hero__text">
                            <h2
                                className="about__hero__heading1"
                                data-sal="slide-up"
                                data-sal-delay="300"
                                data-sal-easing="ease"
                            >
                                An <span style={textHighlight}>about</span> page
                                eh?
                            </h2>
                        </div>
                        <div className="about__hero__text__content"></div>
                    </div>
                </div>
            </Layout>
        )
    }
}
