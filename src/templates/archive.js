import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import NavBlackText from "../components/navBlackText"
import SEO from "../components/seo"
import "../components/home/home.css"
import "./archive.css"
import Footer from "../components/footer"

const Archive = props => {
    const blogContent = props.data.allContentfulBlog
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
        currentPage - 1 === 1 ? `/blog/` : `/blog/${currentPage - 1}/`
    const nextPage = `/blog/${currentPage + 1}/`

    return (
        <Layout>
            <SEO
                title="Blog Posts"
                keywords={[
                    "3i INC",
                    "3i Incorporated",
                    "3 Idiots Incorporation",
                    "Idiots by Choice",
                    "Idiotism",
                    "3i INC Blog",
                ]}
                description="Read the Latest Posts from the Contributers of 3i INC | Idiots by Choice! | 3iinc.xyz"
                url="https://3iinc.xyz/blog/"
            />
            <NavBlackText />
            <div
                className="Author__Info__Container"
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease"
                style={{backgroundColor: 'black'}}
            >
                <h1
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-easing="ease"
                >
                    Blog Posts
                </h1>
            </div>
            <div className="feed__initial__authorposts">
                <div className="feed">
                    {blogContent.edges.map(edge => (
                        <div
                            key={edge.node.id}
                            className="card"
                            data-sal="slide-up"
                            data-sal-delay="50"
                            data-sal-easing="ease"
                            style={{
                                backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(10, 10, 10, 0) 0%,
                            rgba(10, 10, 10, 0.5) 50%,
                            rgba(10, 10, 10, 0.7) 100%),
                            url(${edge.node.featuredImage.fluid.src})`,
                            }}
                            onClick={() => navigate(`/blog/${edge.node.slug}/`)}
                        >
                            {edge.node.category.map(category => (
                                <p
                                    className="card__category"
                                    data-sal="slide-up"
                                    data-sal-delay="60"
                                    data-sal-easing="ease"
                                    key={category.title}
                                >
                                    {category.title}
                                </p>
                            ))}
                            <p
                                className="card__title"
                                data-sal="slide-up"
                                data-sal-delay="70"
                                data-sal-easing="ease"
                            >
                                {edge.node.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <div className="pagination__container">
                        <div className="pagination__button__container">
                            <div className="pagination__item">
                                {!isLast && (
                                    <Link
                                        to={nextPage}
                                        rel="next"
                                        style={{
                                            color: "#2a5298",
                                            textDecoration: "none",
                                        }}
                                        
                                    >
                                        <button className="arrow__next">Next</button>
                                    </Link>
                                )}
                                {isLast && (
                                    <div>
                                        <button className="arrow__next"
                                        style={{
                                            visibility: "none",
                                            cursor: "none",
                                            pointerEvents: "none",
                                            textDecoration: "none",
                                            opacity: 0.4,
                                        }}>Next</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="pagination__button__container">
                            <div className="pagination__item">
                                {!isFirst && (
                                    <Link
                                        to={prevPage}
                                        rel="prev"
                                        style={{
                                            color: "#2a5298",
                                            textDecoration: "none",
                                        }}
                                        
                                    >
                                        <button className="arrow__back">Back</button>
                                    </Link>
                                )}
                                {isFirst && (
                                    <div>
                                        <button className="arrow__back"
                                        style={{
                                            visibility: "none",
                                            cursor: "none",
                                            pointerEvents: "none",
                                            textDecoration: "none",
                                            opacity: 0.4,
                                        }}
                                        >Back</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default Archive

export const pageQuery = graphql`
    query ArchiveQuery($skip: Int!, $limit: Int!) {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: { node_locale: { eq: "en-US" } }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    id
                    slug
                    title
                    authorData {
                        authorName
                        authorSlug
                    }
                    category {
                        title
                        id
                    }
                    featuredImage {
                        fluid(maxWidth: 600, quality: 70, toFormat: WEBP) {
                            src
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`
