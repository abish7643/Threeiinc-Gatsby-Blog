/* eslint-disable */
import React from "react"
import NavBlackText from "../components/navBlackText"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Search from "../components/search/search"
import SEO from "../components/seo"

export default class searchpost extends React.Component {
    render() {
        return (
            <Layout>
                <SEO
                    title="Search Posts"
                    description="Get The Result You Need From The Whole Contributers of 3i INC | Idiots by Choice! | 3iinc.xyz"
                    url="https://3iinc.xyz/search/"
                    image='https://images.ctfassets.net/2g0bd82kkvps/6YYHEOQ1diL651fE06jWpy/30e2abe4ffe942d9538912f5a6fb4b03/threeiinc-icon.png'
                />
                <NavBlackText />
                <Search />
                <Footer />
            </Layout>
        )
    }
}
