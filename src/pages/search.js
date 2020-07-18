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
                />
                <NavBlackText />
                <Search />
                <Footer />
            </Layout>
        )
    }
}
