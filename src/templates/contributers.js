import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import "./blog.css"
import Layout from "../components/layout"
import Footer from "../components/footer"
import NavBlackText from "../components/navBlackText"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default () => (
    <StaticQuery
        query={graphql`
            query authorArchiveQuery {
                allContentfulAuthorModel(
                    sort: { fields: [createdAt], order: DESC }
                    filter: { node_locale: { eq: "en-US" } }
                ) {
                    edges {
                        node {
                            id
                            authorName
                            authorSlug
                            seoAuthorName
                            authorDescription
                            authorPhoto {
                                fluid(
                                    maxWidth: 300
                                    quality: 70
                                    toFormat: WEBP
                                ) {
                                    ...GatsbyContentfulFluid
                                    src
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Layout>
                <NavBlackText />
                <SEO
                    title="Our Contributers | 3i INC | 3 Idiots Incorporated."
                    description="Wanna Explore Yourself? Work with 3i and Get To Know About Our Contributers,
                                Who May Be The Actual Idiots | 3iinc.xyz"
                    keywords={[
                        "Authors",
                        "Author",
                        "Contribute",
                        "Contributers",
                        "3i INC",
                        "3 Idiots",
                        "3 Idiots Incorporation",
                        "3 Idiots Incorporated",
                    ]}
                    url="https://3iinc.xyz/idiots/"
                    author="3i INC"
                />
                <div
                    style={{ textAlign: "center" }}
                    className="contribute__question__header"
                >
                    <h4
                        data-sal="slide-up"
                        data-sal-delay="50"
                        data-sal-easing="ease"
                    >
                        Wanna Explore Yourself? Work with 3i.<br></br>
                        <Link to="/contact/">
                            <p
                                data-sal="slide-up"
                                data-sal-delay="150"
                                data-sal-easing="ease"
                            >
                                Let Us Know!
                            </p>
                        </Link>
                    </h4>
                </div>
                <div
                    className="Author__Info__Container"
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                >
                    <div style={{ backgroundColor: "black" }}>
                        <h1
                            data-sal="slide-up"
                            data-sal-delay="500"
                            data-sal-easing="ease"
                        >
                            Contributers
                        </h1>
                    </div>
                </div>
                <div className="author__feed">
                    {data.allContentfulAuthorModel.edges.map(edge => (
                        <Link
                            className="about__author__contrib"
                            key={edge.node.id}
                            to={`/idiots/${edge.node.authorSlug}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <div className="author__image">
                                <Img
                                    style={{ minHeight: "170px" }}
                                    sizes={edge.node.authorPhoto.fluid}
                                />
                            </div>
                            <div className="author__details">
                                <div className="author__name">
                                    <h6 style={{ opacity: "0" }}>Author</h6>
                                    <h4>{edge.node.authorName}</h4>
                                </div>
                                <div className="author__description">
                                    <h5>{edge.node.authorDescription}</h5>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Footer />
            </Layout>
        )}
    />
)
