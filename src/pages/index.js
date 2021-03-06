import React from "react"
import { Helmet } from "react-helmet"
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>3 Idiots Incorporated. | Idiots by Choice</title>
                    <meta
                        name="title"
                        content="3 Idiots Incorporated. | Idiots by Choice"
                    />
                    <meta
                        name="description"
                        content="
          Who's an Idiot? The one who questions the system,
          The one who doesn't like how the system works or
          The one who doesn't believe in the system.
          We Are The Freakin' Idiots! | 3i INC"
                    />
                    <meta
                        name="keywords"
                        content="3iinc, idiots, 3i, INC, 3 Idiots Incorporation, 3 Idiots Incorporated, 3 Idiots, Blog, Articles, Rogue, Idiot, Choice"
                    />
                    <meta name="url" content="https://3iinc.xyz" />
                </Helmet>
                <NavBlackText />
                <Featured />
                <Home />
                <Footer />
            </Layout>
        )
    }
}
