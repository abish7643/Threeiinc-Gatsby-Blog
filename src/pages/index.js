import React from "react"
import SEO from "../components/seo"
import NavBlackText from "../components/navBlackText"
import Layout from "../components/layout"
import Featured from "../components/featured"
import Home from "../components/home"
import Footer from "../components/footer"
import "./index.css"

export default class IndexPage extends React.Component {

    render() {
        return (
            <Layout>
                <SEO
                    title={"3 Idiots Incorporated. | Idiots by Choice"}
                    description={
                        "Who's an Idiot? The one who questions the system, The one who doesn't like how the system works or The one who doesn't believe in the system. We Are The Freakin' Idiots! | 3i INC"
                    }
                    keywords={"3iinc, idiots, 3i, INC, 3 Idiots Incorporation, 3 Idiots Incorporated, 3 Idiots, Blog, Articles, Rogue, Idiot, Choice"}
                    url={`https://3iinc.xyz`}
                    image='https://images.ctfassets.net/2g0bd82kkvps/6ynBunIyUpjS8JMkNoZDrt/6c334f81010a4401ea1f99292bb9376c/threeiinc-cover.png'
                    type='website'
                />

                <NavBlackText />
                <Featured />
                <Home />
                <Footer />
            </Layout>
        )
    }
}
