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
                style={{backgroundColor: 'black', cursor: 'pointer'}}
                onClick = {() => navigate('/search/')}
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
                                {!isFirst && (
                                    <Link
                                        to={prevPage}
                                        rel="prev"
                                        style={{
                                            color: "#2a5298",
                                            textDecoration: "none",
                                        }}
                                        
                                    >
                                        <button className="arrow__back">{"<"}</button>
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
                                            background: "white",
                                            color: '#323232',
                                            opacity: 0.3,
                                        }}
                                        >{"<"}</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="pagination__button__container"
                        style={{
                            margin: '0px'
                        }}>
                            <div className="pagination__item">
                            <Link
                                to="/search/"
                                rel="prev"
                                style={{
                                    color: "#2a5298",
                                    textDecoration: "none",
                                }}
                                
                            >
                                <button className="search__middle"
                                >Search
                                <svg className="search-svg-btn" id="Layer_1" enable-background="new 0 0 512.002 512.002" height="512" viewBox="0 0 512.002 512.002" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m495.594 416.408-134.086-134.095c14.685-27.49 22.492-58.333 22.492-90.312 0-50.518-19.461-98.217-54.8-134.31-35.283-36.036-82.45-56.505-132.808-57.636-1.46-.033-2.92-.054-4.392-.054-105.869 0-192 86.131-192 192s86.131 192 192 192c1.459 0 2.93-.021 4.377-.054 30.456-.68 59.739-8.444 85.936-22.436l134.085 134.075c10.57 10.584 24.634 16.414 39.601 16.414s29.031-5.83 39.589-16.403c10.584-10.577 16.413-24.639 16.413-39.597s-5.827-29.019-16.407-39.592zm-299.932-64.453c-1.211.027-2.441.046-3.662.046-88.224 0-160-71.776-160-160s71.776-160 160-160c1.229 0 2.449.019 3.671.046 86.2 1.935 156.329 73.69 156.329 159.954 0 86.274-70.133 158.029-156.338 159.954zm277.296 121.02c-4.525 4.531-10.547 7.026-16.958 7.026s-12.434-2.495-16.966-7.034l-129.294-129.284c6.813-5.307 13.319-11.094 19.458-17.365 5.174-5.285 9.998-10.825 14.48-16.58l129.291 129.3c4.535 4.532 7.032 10.556 7.032 16.962s-2.496 12.431-7.043 16.975z"/><path d="m192 64.001c-70.58 0-128 57.42-128 128s57.42 128 128 128 128-57.42 128-128-57.42-128-128-128zm0 224c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96z"/></g>
                                
                                </svg>
                                </button>
                                </Link>
                            </div>
                        </div>
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
                                        <button className="arrow__next">{">"}</button>
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
                                            background: "white",
                                            color: '#323232',
                                            opacity: 0.3,
                                        }}>{">"}</button>
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
